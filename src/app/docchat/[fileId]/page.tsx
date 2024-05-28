import React from "react";
import Link from "next/link";
import PdfRenderer from "@/components/PdfRenderer";
import ChatWrapper from "@/components/chat/ChatWrapper";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
interface PageProps {
    params: {
        fileId: string;
    };
}
const page = async ({ params }: PageProps) => {
    const { fileId } = params;
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || !user.id) redirect(`/auth-callback?origin=docchat/${fileId}`);
    // make database call
    const file = await db.file.findFirst({
        where: {
            id: fileId,
            userId: user.id,
        },
    });
    if (!file) {
        return (
            <div className="text-black flex justify-center items-center h-[40vh]">
                <div className="flex flex-col items-center justify-center gap-2">
                    <AlertTriangle size={34} className="text-red-600" />
                    <h1 className="text-center text-xl font-semibold">File Not Found</h1>
                    <p className="pb-2">Sorry, the file you are looking for does not exist.</p>
                    <Link
                        href="/docchat"
                        className={buttonVariants({
                            size: "sm",
                        })}
                    >
                        Back
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
            <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
                {/* Left Side Panel */}
                <div className="flex-1 xl:flex">
                    <div className="px-4 py-2 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        <PdfRenderer url={file.url} />
                    </div>
                </div>
                <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0 ">
                    <ChatWrapper fileId={file.id} />
                </div>
            </div>
        </div>
    );
};

export default page;
