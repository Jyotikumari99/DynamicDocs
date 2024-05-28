import React from "react";
import Dropzone from "@/components/Dropzone";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || !user.id) redirect("/auth-callback?origin=convertify");
    const dbUser = await db.user.findFirst({
        where: {
            id: user.id,
        },
    });
    if (!dbUser) {
        redirect("/auth-callback?origin=convertify");
    }
    return (
        <div className="space-y-16 py-8 ">
            <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-medium text-center text-blue-600">Free Unlimited File Type Converter</h1>
                <p className="text-gray-600 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
                    Your unlimited, free file type converter! Effortlessly switch between image, audio, and video formats with just a click. No limits, no fees,
                    just seamless conversion.
                </p>
            </div>
            <MaxWidthWrapper>
                <Dropzone />
            </MaxWidthWrapper>
        </div>
    );
};

export default page;
