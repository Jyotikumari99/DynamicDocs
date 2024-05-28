"use client";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
    const [mode, setMode] = useState<string>("development");
    return (
        <div className="py-16">
            <div className="mx-auto mv-28 max-w-5xl sm:mt-49">
                <div className="mb-8 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <Link href="/docchat" className="mt-2 font-bold text-4xl text-blue-600 sm:text-5xl">
                            DocChat
                        </Link>
                        <h2 className="mt-2 font-bold text-xl text-gray-900 sm:text-2xl">Start chatting in minutes</h2>
                        <p className="mt-4 text-lg text-gray-600"> Chatting to your PDF files has never been easier than DocChat.</p>
                    </div>
                </div>
                {/* Steps Section Started */}
                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 1</span>
                            <span className="text-xl font-semibold">Sign up for an account</span>
                            <span className="mt-2 text-zinc-700">
                                Either starting out with a free plan or choose our{" "}
                                <Link href="/pricing" className="text-blue-700 underline underline-offset-2">
                                    pro plan.
                                </Link>
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 2</span>
                            <span className="text-xl font-semibold">Upload your PDF file</span>
                            <span className="mt-2 text-zinc-700">We&apos;ll process your file and make it ready for you to chat with.</span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 3</span>
                            <span className="text-xl font-semibold">Start asking questions</span>
                            <span className="mt-2 text-zinc-700">It&apos;s that simple. Start asking questions and Dynamic Docs will do the rest.</span>
                        </div>
                    </li>
                </ol>
                {/* Steps Section Ended */}
            </div>
            {/* Doc Chat Ended */}
            <div className="mx-auto mv-20 mt-20 max-w-5xl sm:mt-35">
                <div className="mb-8 px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <Link href="/fileshare" className="mt-2 font-bold text-4xl text-blue-600 sm:text-5xl">
                            FileShare
                        </Link>

                        <h2 className="mt-2 font-bold text-xl text-gray-900 sm:text-2xl">Share files seamlessly</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Sharing your files has never been easier than with FileShare. Upload, share, and collaborate effortlessly.
                        </p>
                    </div>
                </div>
                {/* Steps Section Started */}

                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 1</span>
                            <span className="text-xl font-semibold">Sign up for an account</span>
                            <span className="mt-2 text-zinc-700">
                                Either starting out with a free plan or choose our{" "}
                                <Link href="/pricing" className="text-blue-700 underline underline-offset-2">
                                    pro plan.
                                </Link>
                            </span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 2</span>
                            <span className="text-xl font-semibold">Upload your file </span>
                            <span className="mt-2 text-zinc-700">We&apos;ll process your file and make it ready for sharing.</span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 3</span>
                            <span className="text-xl font-semibold">Share your file</span>
                            <span className="mt-2 text-zinc-700">Share the link manually or Dynamic Doc will send the file link to the target email.</span>
                        </div>
                    </li>
                </ol>
                {/* Steps Section Ended */}
            </div>

            <div className="mx-auto mv-20 mt-20 max-w-5xl sm:mt-35">
                <div className=" px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <Link href="/convertify" className="mt-2 font-bold text-4xl text-blue-600 sm:text-5xl">
                            Convertify
                        </Link>
                        <h2 className="mt-2 font-bold text-xl text-gray-900 sm:text-2xl">Convert files with ease</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Converting your documents is a breeze with Convertify. Simply upload your files and let Convertify do the rest.
                        </p>
                    </div>
                </div>
                {/* Steps Section Started */}
                <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 1</span>
                            <span className="text-xl font-semibold">Upload or drag and drop your file</span>
                            <span className="mt-2 text-zinc-700">Get started by selecting your file or simply drag and drop it into the designated area.</span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 2</span>
                            <span className="text-xl font-semibold">Select extension you want</span>
                            <span className="mt-2 text-zinc-700">Choose the desired file extension you want to convert your file into.</span>
                        </div>
                    </li>
                    <li className="md:flex-1">
                        <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pl-0 md:pt-4">
                            <span className="text-sm font-medium text-blue-600">Step 3</span>
                            <span className="text-xl font-semibold">Download your converted file</span>
                            <span className="mt-2 text-zinc-700">Once processed, your converted file will be ready for download.</span>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Page;
