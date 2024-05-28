import React from "react";
import FilesTable from "../../_components/FilesTable";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Page = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div>
            <FilesTable email={user?.email} />
        </div>
    );
};

export default Page;
