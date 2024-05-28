import { Suspense } from "react";
import Search from "./search";
const Page = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Search />
            </Suspense>
        </div>
    );
};

export default Page;
