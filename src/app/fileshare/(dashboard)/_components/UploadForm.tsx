"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Button } from "@/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";
import { FileText, RefreshCw, X } from "lucide-react";
import bytesToSize from "@/lib/utils/bytes-to-size";
import { storage, database } from "../../../../../firebaseConfig";
import { generateRandomString } from "@/lib/utils/generate-random-string";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";

// Prop Types
interface uploadFormProps {
    userEmail: string | null | undefined;
    userName: string | null | undefined;
}

// main fuction
/**
 * UploadForm component for uploading files.
 *
 * @component
 * @param {Object} uploadFormProps - The props for the UploadForm component.
 * @param {string} uploadFormProps.userEmail - The email of the user.
 * @param {string} uploadFormProps.userName - The name of the user.
 * @returns {JSX.Element} The UploadForm component.
 */
const UploadForm = ({ userEmail, userName }: uploadFormProps) => {
    // All states
    const [loading, setLoading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);
    const [file, setFile] = useState<File | null>(null);
    const [fileSize, setFileSize] = useState("");
    const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
    const router = useRouter();

    const handleButtonClick = async (file: File) => {
        try {
            setLoading(true);
            const metadata = {
                contentType: file.type,
            };
            const storageRef = ref(storage, "uploaded-files/" + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);
            uploadTask.on("state_changed", async (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                await setProgress(progress);
                if (progress === 100) {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(async (downloadURL) => {
                            await saveInformation(file, downloadURL);
                        })
                        .catch(async (error) => {
                            console.error("Error getting download URL: ", error);
                            await deleteFile(file.name);
                            toast({
                                title: "Error",
                                description: "Error uploading file",
                                variant: "destructive",
                            });
                            setLoading(false);
                            setFile(null);
                            setFileSize("");
                        });
                }
            });
        } catch (error: any) {
            console.error("Error uploading file: ", error);
            await deleteFile(file.name);
            toast({
                title: "Error",
                description: "Error uploading file",
                variant: "destructive",
            });
            setLoading(false);
        }
    };

    const saveInformation = async (file: File, fileUrl: string) => {
        setLoading(true);
        setIsFileUploaded(false);
        try {
            const docId = generateRandomString().toString();
            await setDoc(doc(database, "uploadedFile", docId), {
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type,
                fileUrl: fileUrl,
                userEmail: userEmail,
                userName: userName,
                password: "",
                id: docId,
                shortUrl: process.env.NEXT_PUBLIC_BASE_URL + "file/" + docId,
            })
                .then(() => {
                    setFile(null);
                    setLoading(false);
                    setFileSize("");
                    setIsFileUploaded(true);
                    toast({
                        title: "Success",
                        description: "File uploaded successfully",
                        variant: "success",
                    });
                    router.push(`/fileshare/file-preview/${docId}`);
                })
                .catch(async (error) => {
                    console.error("Error saving file information: ", error);
                    await deleteFile(file.name);
                    toast({
                        title: "Error",
                        description: "Error uploading file",
                        variant: "destructive",
                    });
                    setLoading(false);
                    setIsFileUploaded(false);
                });
        } catch (error) {
            console.error("Error saving file information: ", error);
            await deleteFile(file.name);
            toast({
                title: "Error",
                description: "Error uploading file",
                variant: "destructive",
            });
            setLoading(false);
            setIsFileUploaded(false);
        }
    };

    const deleteFile = async (fileName: string) => {
        try {
            const fileRef = ref(storage, `uploaded-files/${fileName}`);
            await deleteObject(fileRef);
            console.log("File deleted successfully:", fileName);
        } catch (error: any) {
            if (error.code === "storage/object-not-found") {
                console.log("File does not exist:", fileName);
            } else {
                console.error("Error in deleting file:", error);
            }
        }
    };

    const onFileSelect = (file: File | null) => {
        if (file && file.size > 4194304) {
            toast({
                title: "File Size Exceeded",
                description: "Size of the file is greater than 4MB.",
                variant: "destructive",
            });
            return;
        }
        setFile(file);
        setFileSize(bytesToSize(file?.size!));
    };
    return (
        <div className="text-center">
            <div className="flex items-center justify-center w-full">
                <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    {loading ? (
                        <RefreshCw className="animate-spin h-12 w-12 text-primary" />
                    ) : isFileUploaded ? (
                        <div className="flex items-center justify-center flex-col">
                            <svg
                                className="animate-bounce h-20 w-20 border-4 border-primary rounded-full text-primary"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <p className="text-primary font-semibold text-lg">File Uploaded</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-10 h-10 mb-4 text-primary dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or <strong className="text-primary"> drag</strong> and
                                    <strong className="text-primary"> drop</strong>
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Image, Audio, Video or Document (MAX. 4MB)</p>
                            </div>
                            <input onChange={(e: any) => onFileSelect(e.target.files[0])} id="dropzone-file" type="file" className="hidden" />
                        </>
                    )}
                </label>
            </div>
            {file && (
                <div className="flex items-center justify-between border-gray-400 border p-2 rounded-lg  mx-auto mt-5 ">
                    <div className="flex gap-2 items-center justify-center">
                        <FileText className="h-12 w-12 text-blue-600" />
                        <div className="text-left">
                            <h2 className="font-semibold">{file.name}</h2>
                            <h2 className="text-gray-400 text-[12px]">
                                {fileSize} / {file.type}
                            </h2>
                        </div>
                    </div>
                    <X
                        className="h-6 w-6 text-red-600 hover:cursor-pointer hover:rounded-full hover:border-2 hover:border-red-600 "
                        onClick={() => setFile(null)}
                    />
                </div>
            )}

            {progress > 0 && file ? (
                <ProgressBar progress={progress} />
            ) : (
                <Button
                    disabled={!file}
                    className="p-2 bg-primary text-white w-full sm:w-1/2 md:w-1/4 rounded-full mt-5  disabled:bg-gray-500"
                    onClick={() => handleButtonClick(file!)}
                >
                    Upload
                </Button>
            )}
        </div>
    );
};

export default UploadForm;
