"use client";
import { toast } from "@/components/ui/use-toast";
import { Copy, CopyCheck, Eye, EyeOff, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const FileShareForm = ({
    file,
    updatePasssword,

    updating,
}: {
    file: any;
    updatePasssword: any;

    updating: boolean;
}) => {
    const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);
    const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);
    const [password, setPassword] = useState(file.password);
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsPasswordEnabled(file.passwordEnabled);
        setPassword(file.password);
    }, []);
    const sendEmail = async () => {
        setIsLoading(true);
        try {
            const data = {
                emailToSend: email,
                userName: file.userName,
                fileName: file.fileName,
                shortUrl: file.shortUrl,
                fileSize: file.fileSize,
                fileType: file.fileType,
            };
            const url = "/api/send";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Email sent successfully",
                    variant: "success",
                });

                setIsLoading(false);
            } else {
                toast({
                    title: "Unable to send email",
                    description: "Please try again later",
                    variant: "destructive",
                });
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            toast({
                title: "Unable to send email",
                description: "Please try again later",
                variant: "destructive",
            });
        }
    };
    return (
        <div>
            {file ? (
                <div className="flex flex-col gap-2 h-full">
                    <div>
                        <label className="text-[14px] text-gray-600 font-semibold">Short URL</label>
                        <div className="flex gap-5 p-2 border rounded-md justify-start border-gray-300">
                            <input type="text" value={file.shortUrl} disabled className="disabled:text-gray-500 bg-transparent outline-none w-full" />
                            {isLinkCopied ? (
                                <CopyCheck className="text-gray-400 hover:text-gray-600" />
                            ) : (
                                <Copy
                                    className="text-gray-400 hover:text-gray-600"
                                    onClick={async () => {
                                        await navigator.clipboard.writeText(file.shortUrl);
                                        setIsLinkCopied(true);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div className="gap-3 flex items-center mt-5 px-1">
                        <input
                            type="checkbox"
                            name="check"
                            id="check"
                            className="h-4 w-4"
                            checked={isPasswordEnabled}
                            onChange={(e) => {
                                setIsPasswordEnabled(e.target.checked);
                            }}
                        />
                        <label htmlFor="check" className="w-full p-0 m-0 text-gray-600 font-semibold">
                            Enable Password?
                        </label>
                    </div>
                    {isPasswordEnabled && (
                        <div className="flex gap-3 items-center">
                            <div className="flex w-full gap-5 p-2 border rounded-md justify-start border-gray-300">
                                <input
                                    type={`${showPass ? "text" : "password"}`}
                                    name="password"
                                    id="password"
                                    value={password}
                                    className="bg-transparent w-full disabled:text-gray-500 outline-none"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {showPass ? (
                                    <EyeOff className="text-gray-400 hover:text-gray-600" onClick={() => setShowPass(!showPass)} />
                                ) : (
                                    <Eye className="text-gray-400 hover:text-gray-600" onClick={() => setShowPass(!showPass)} />
                                )}
                            </div>
                            <button
                                className="p-2 bg-primary text-white rounded-md disabled:bg-gray-300 hover:bg-primary/75"
                                disabled={password?.length < 4}
                                onClick={() => updatePasssword(password)}
                            >
                                {updating ? (
                                    <>
                                        <Loader2 className="animate-spin" />{" "}
                                    </>
                                ) : (
                                    "Save"
                                )}
                            </button>
                        </div>
                    )}
                    <div className="border border-gray-300 rounded-md text-gray-500">
                        <div className="p-2">
                            <label htmlFor="email" className="text-gray-600 font-semibold">
                                Send File to Email
                            </label>
                            <div className="flex gap-5 p-2 border rounded-md justify-start mt-1 border-gray-300 ">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-transparent w-full disabled:text-gray-500 outline-none "
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                className="w-full bg-primary disabled:bg-primary/75 disabled:cursor-not-allowed text-white py-2 mt-2 rounded-md"
                                onClick={sendEmail}
                                disabled={!email.includes("@")}
                            >
                                {isLoading ? <Loader2 className="h-4 w-4 text-white animate-spin text-center mx-auto" /> : "Send Email"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader2 className="h-8 w-8 animate-spin" />
            )}
        </div>
    );
};

export default FileShareForm;
