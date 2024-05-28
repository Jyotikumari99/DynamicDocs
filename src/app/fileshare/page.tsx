import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const page = () => {
    return (
        <div>
            <section className=" text-black ">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[92vh] lg:items-center">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                            Save, Share and
                            <span className="sm:block pb-2"> Manage Files. </span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                            Sharing your files has never been easier than with FileShare. Upload, share, and collaborate effortlessly.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                className="flex justify-between items-center w-full rounded border border-blue-600 bg-blue-600 py-3 px-10 text-sm font-semibold text-white hover:text-blue-600  hover:bg-transparent  focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                href="/fileshare/upload"
                            >
                                Get Started <MoveRight className="ms-2 animate-ping" size={12} />
                            </Link>
                        </div>
                        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                            <li className="md:flex-1">
                                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-blue-600">Step 1</span>
                                    <span className="text-xl font-semibold">Upload the file you want to share</span>
                                    <span className="mt-2 text-zinc-700">Start by uploading the file you wish to share with others.</span>
                                </div>
                            </li>
                            <li className="md:flex-1">
                                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-blue-600">Step 2</span>
                                    <span className="text-xl font-semibold">Choose encryption (optional)</span>
                                    <span className="mt-2 text-zinc-700">
                                        Select whether you want the file to be password encrypted or not for added security.
                                    </span>
                                </div>
                            </li>
                            <li className="md:flex-1">
                                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-blue-600">Step 3</span>
                                    <span className="text-xl font-semibold">Share the file link</span>
                                    <span className="mt-2 text-zinc-700">Once ready, share the file link either through email or directly with others.</span>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
