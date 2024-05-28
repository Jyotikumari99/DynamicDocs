"use client";

import React, { useEffect, useState } from "react";
import { database } from "../../../../../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import FileInfo from "../../../_components/FileInfo";
import FileShareForm from "../../../_components/FileShareForm";

interface PageProps {
    params: {
        fileId: string;
    };
}

const Page = ({ params }: PageProps) => {
    const [file, setFile] = useState({});
    const { fileId } = params;
    const [updating, setUpdating] = useState(false);

    const getFileInfo = async () => {
        try {
            const fileRef = doc(database, "uploadedFile", fileId);
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
    }, [fileId]);

    const updatePasssword = async (password: string) => {
        setUpdating(true);
        const docRef = doc(database, "uploadedFile", fileId);
        await updateDoc(docRef, {
            password: password,
        });
        toast({
            title: "Success",
            description: "Password Updated Successfully",
            variant: "success",
        });
        setUpdating(false);
    };

    return (
        <div className="py-10 px-20 ">
            <Link href="/fileshare/upload" className="flex gap-3">
                <ArrowLeftSquare />
                Go to Upload
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 h-full">
                <FileInfo file={file} />
                <FileShareForm file={file} updating={updating} updatePasssword={updatePasssword} />
            </div>
        </div>
    );
};

export default Page;
