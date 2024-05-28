import React, { useState } from "react";
import UploadForm from "../../_components/UploadForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className="p-5 px-8 md:px-28">
            <h2 className="text-xl text-center m-5">
                Start <strong className="text-primary">Uploading</strong> files and <strong className="text-primary">Share</strong> them.
            </h2>
            <UploadForm userEmail={user?.email} userName={user?.given_name} />
        </div>
    );
};

export default Page;
