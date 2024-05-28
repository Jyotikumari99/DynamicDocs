"use client";
import bytesToSize from "@/lib/utils/bytes-to-size";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const FileInfo = ({ file }: { file: any }) => {
    const [fileType, setFileType] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        file && setFileType(file?.fileType?.split("/")[0]);
        setLoading(false);
    }, [file]);
    const fileSize = bytesToSize(file.fileSize);
    return (
        <div>
            {loading ? (
                <div className="h-full w-full flex justify-center items-center">
                    <Loader2 className="animate-spin text-primary h-8 w-8" />
                </div>
            ) : (
                <div className="h-full text-center border flex justify-center mx-4 flex-col items-center p-2 rounded-md border-blue-200">
                    <Image
                        src={fileType === "image" ? file?.fileUrl : "/file.svg"}
                        width={200}
                        height={200}
                        alt="document preview"
                        className="h-[200px] rounded-md object-contain "
                    />
                    <div className="w-full">
                        <h2>{file.fileName}</h2>
                        <div className="flex justify-center gap-6 w-full">
                            <div className="flex justify-center">
                                <p className="text-gray-500  text-[13px]">Type: &nbsp;</p>
                                <h2 className="text-gray-400 text-[13px]">{fileType === "image" ? fileType : file.fileType}</h2>
                            </div>
                            <div className="flex justify-center">
                                <p className="text-gray-500  text-[13px]">Size: &nbsp;</p>
                                <h2 className="text-gray-400 text-[13px]">{fileSize}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileInfo;
