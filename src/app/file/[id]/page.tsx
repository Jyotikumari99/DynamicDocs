"use client";
import React, { useEffect, useState } from "react";
import { database } from "../../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";

import { ArrowBigDownDash, ArrowDownToLine, Loader2 } from "lucide-react";
interface PageProps {
    params: {
        id: string;
    };
}
const Page = ({ params }: PageProps) => {
    const id = params.id;
    const [file, setFile] = useState<any>(null);
    const [password, setPassword] = useState<string>("");
    const getFileInfo = async () => {
        try {
            const fileRef = doc(database, "uploadedFile", id);
            const docSnap = await getDoc(fileRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setFile(data);
            } else {
                toast({
                    title: "No such file exists!",
                    description: "Please reupload the file and try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            console.log("Error getting document:", error);
            toast({
                title: "Failed to Show File Preview",
                description: "Please try again after some time.",
                variant: "destructive",
            });
        }
    };

    useEffect(() => {
        getFileInfo();
    }, [id]);
    const handleDownloadClick = async () => {
        try {
            const response = await file.fileUrl;
            const downloadLink = document.createElement("a");
            downloadLink.href = response;
            downloadLink.setAttribute("download", "file");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.log("Error downloading file:", error);
            toast({
                title: "Failed to Download File",
                description: "Please try again after some time.",
                variant: "destructive",
            });
        }
    };
    return file ? (
        <div className="bg-gray-200 h-[92vh] w-full flex justify-center items-center flex-col gap-4">
            <div className="w-1/3 bg-white rounded-md shadow-lg p-4">
                <h2 className="text-2xl font-semibold text-gray-600 text-center">
                    <span className="text-primary">{file.userName} </span> Shared file with You
                </h2>
                <p className="text-center my-2">Find the file details below</p>
                <div className="p-8 flex items-center justify-center">
                    <ArrowDownToLine className="text-primary h-28 w-28 animate-bounce" />
                </div>

                <div className="grid grid-rows-2 ">
                    <h2 className="grid grid-cols-3 text-center font-medium">
                        <span>File Name ✨</span>
                        <span>File Type ✨</span>
                        <span>File Size ✨</span>
                    </h2>
                    <h2 className=" grid grid-cols-3 text-center">
                        <span>{file.fileName}</span>
                        <span>{file.fileType}</span>
                        <span>{file.fileSize} bytes</span>
                    </h2>
                </div>
                {file.password.length > 3 && (
                    <>
                        <div className="w-full text-center mt-6">
                            <input
                                className="w-1/2 bg-transparent border-2 rounded-md border-gray-300 p-2 "
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password to access file"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <p className="text-red-700 text-center text-sm">This is a password protected file, enter the password to access the file.</p>
                    </>
                )}
                <button
                    onClick={handleDownloadClick}
                    disabled={file.password !== password}
                    className="disabled:bg-gray-300 disabled:text-primary/50 disabled:cursor-not-allowed  mt-6 flex items-center justify-center mx-auto p-2 w-3/4 text-center bg-primary text-white rounded-3xl"
                >
                    <ArrowBigDownDash /> Download
                </button>
                <p className="text-center text-sm text-gray-400 font-medium">*Term and Conditions apply</p>
            </div>
        </div>
    ) : (
        <div className="bg-gray-200 h-[92vh] w-full flex justify-center items-center flex-col gap-4">
            <Loader2 className="h-8 w-8 text-primary animate-spin" />
        </div>
    );
};

export default Page;
