"use client";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { database } from "../../../../../firebaseConfig";
import { toast } from "@/components/ui/use-toast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const FilesTable = ({ email }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUserFiles = async (email) => {
        setLoading(true);
        const fileCollection = collection(database, "uploadedFile");
        const q = query(fileCollection, where("userEmail", "==", email));

        try {
            const querySnapshot = await getDocs(q);
            const files = querySnapshot.docs.map((doc) => doc.data());
            setFiles(files);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error("Error fetching user files:", error);
            toast({
                title: "Error fetching user files",
                description: "An error occurred while fetching user files. Please try again later.",
                variant: "error",
            });
        }
    };

    useEffect(() => {
        fetchUserFiles(email);
    }, []);
    return loading ? (
        <div className="h-[60vh] flex justify-center items-center ">
            <Loader2 size={48} className="text-primary animate-spin" />
        </div>
    ) : (
        <div className="p-4">
            <h2 className="text-primary font-semibold text-2xl">My Files</h2>
            {files.length > 0 ? (
                <Table>
                    <TableCaption>All the uploaded files will be shown above</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>File Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Size(in bytes)</TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {files.map((file, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{file.fileName}</TableCell>
                                <TableCell className="font-medium">{file.fileType}</TableCell>
                                <TableCell className="font-medium">{file.fileSize}</TableCell>
                                <TableCell className="font-medium">
                                    <Link href={`/fileshare/file-preview/${file.id}`}>View</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total Files</TableCell>
                            <TableCell className="text-right">{files.length}</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            ) : (
                <div className="text-red-600 text-center">No files uploaded, please upload a file to share</div>
            )}
        </div>
    );
};

export default FilesTable;
