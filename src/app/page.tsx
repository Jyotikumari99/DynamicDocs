"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { testimonials } from "@/lib/utils";
import Rating from "@/components/Rating";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
export default function Home() {
    return (
        <main className="scroll-smooth">
            {/* Value proposition section started */}
            <div>
                <div className="relative isolate">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36 125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>

                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                        <div
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                            className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36 125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>
            {/* Value Proposition Section Ended */}
            <MaxWidthWrapper className="mb-32 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
                <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
                    <p className="text-sm font-semibold text-gray-700">Dynamic Docs is now live!</p>
                </div>
                <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl ">
                    Manage your <span className="text-blue-600">documents</span> in seconds
                </h1>
                <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                    <span className="font-semibold text-blue-600">FileShare</span> for easy file sharing,{" "}
                    <span className="font-semibold text-blue-600">Convertify</span> for quick document conversion, and{" "}
                    <span className="font-semibold text-blue-600">DocChat</span> for interactive PDF discussions.
                </p>
                <Link href={"/dashboard"} className={buttonVariants({ size: "lg", className: "mt-5" })}>
                    Get Started <ArrowRight className=" ml-1 h-5 w-5" />
                </Link>
            </MaxWidthWrapper>

            {/* Featues Section Started */}
            <h2 id="#features" className="text-center font-bold text-3xl sm:text-5xl text-blue-600 my-8 sm:my-12">
                Feature&apos;s
            </h2>
            <div className="grid grid-cols-1 text-center md:grid-cols-3">
                <Card className="border-0 bg-transparent">
                    <CardHeader>
                        <div className="m-4 mx-auto max-w-6xl px-2 lg:px-4">
                            <div className="flow-root ">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                                    <Image
                                        src="/convertify.png"
                                        alt="product preview"
                                        width={216}
                                        height={216}
                                        quality={100}
                                        className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>

                        <CardTitle>
                            <span className=" font-bold text-2xl text-blue-600 sm:text-4xl">Convertify</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className=" text-lg text-gray-600">
                            Converting your documents is a breeze with Convertify. Simply upload your files and let Convertify do the rest.
                        </p>
                        <Link
                            href="/convertify"
                            className={buttonVariants({
                                size: "sm",
                                className: "mt-4 w-1/4 outline-blue-600",
                                variant: "outline",
                            })}
                        >
                            <ArrowRight className="animate-ping text-blue-600 w-full hover:duration-500" size={16} />
                        </Link>
                    </CardContent>
                </Card>
                <Card className="border-0 bg-transparent">
                    <CardHeader>
                        <div className="mx-auto max-w-6xl px-2 lg:px-4 m-4">
                            <div className="flow-root ">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                                    <Image
                                        src="/docchat.jpg"
                                        alt="product preview"
                                        width={216}
                                        height={216}
                                        quality={100}
                                        className="rounded-md bg-white  shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>
                        <CardTitle>
                            <span className="font-bold text-2xl text-blue-600 sm:text-4xl">Doc Chat</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg text-gray-600">
                            Empower users to interact with PDF files by asking questions and receiving relevant information.
                        </p>
                        <Link
                            href="/docchat"
                            className={buttonVariants({
                                size: "sm",
                                className: "mt-4 w-1/4 outline-blue-600",
                                variant: "outline",
                            })}
                        >
                            <ArrowRight className="animate-ping text-blue-600 w-full hover:duration-500" size={16} />
                        </Link>
                    </CardContent>
                </Card>
                <Card className="border-0 bg-transparent">
                    <CardHeader>
                        <div className="mx-auto max-w-6xl px-2 lg:px-4 m-4">
                            <div className="flow-root ">
                                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl">
                                    <Image
                                        src="/Fileshare.png"
                                        alt="product preview"
                                        width={216}
                                        height={216}
                                        quality={100}
                                        className="rounded-md bg-white  shadow-2xl ring-1 ring-gray-900/10"
                                    />
                                </div>
                            </div>
                        </div>
                        <CardTitle>
                            <span className=" font-bold text-2xl text-blue-600 sm:text-4xl">File Share</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className=" text-lg text-gray-600">
                            Sharing your files has never been easier than with FileShare. Upload, share, and collaborate effortlessly.
                        </p>
                        <Link
                            href="/fileshare"
                            className={buttonVariants({
                                size: "sm",
                                className: "mt-4 w-1/4 outline-blue-600",
                                variant: "outline",
                            })}
                        >
                            <ArrowRight className="animate-ping text-blue-600 w-full hover:duration-500" size={16} />
                        </Link>
                    </CardContent>
                </Card>
            </div>
            {/* Features Section Ended */}

            {/* Testimonials Section Started */}
            <MaxWidthWrapper>
                <h2 className="text-center font-bold text-3xl sm:text-5xl text-blue-600 my-8 sm:my-12">Praise from the OG User&apos;s</h2>
                <Carousel className="my-20 ">
                    <CarouselContent>
                        {testimonials.map((data, index) => (
                            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/3">
                                <div className="p-2">
                                    <Card>
                                        <CardContent className="py-10 flex flex-col justify-center flex-1 ">
                                            <span className="font-semibold">{data.name} </span>
                                            <Rating rating={data.rating} />
                                            <Separator className="my-2" />
                                            <span className="text-justify">{data.comment}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </MaxWidthWrapper>
            {/* Testimonials Section Ended */}

            {/* Faq Section Started */}
            <h2 className="text-center font-bold text-3xl md:hidden text-blue-600 py-3 ">Burning Questions?</h2>
            <MaxWidthWrapper className="grid grid-cols-1 gap-x-12 md:grid-cols-3 items-center h-[90vh] sm:h-[70vh] md:h-[80vh]">
                <div className="join join-vertical w-full md:col-span-2 ">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How secure is Dynamic Docs for storing sensitive documents?</div>
                        <div className="collapse-content">
                            <p>
                                Dynamic Docs prioritizes the security and confidentiality of your documents. We utilize industry-standard encryption protocols
                                to safeguard your data, and our servers are hosted in secure data centers with robust physical and digital security measures in
                                place.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I access Dynamic Docs from my mobile device?</div>
                        <div className="collapse-content">
                            <p>
                                Yes, Dynamic Docs is accessible from any device with an internet connection, including desktops, laptops, tablets, and
                                smartphones. Simply log in to your account using your preferred web browser, and you&apos;ll have access to all of our features
                                on the go.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How does the DocChat feature work for collaborating on documents?</div>
                        <div className="collapse-content">
                            <p>
                                With the DocChat feature, users can annotate, comment, and discuss PDF documents in real-time with colleagues or clients. Simply
                                upload a PDF file, and you can start a conversation thread directly within the document, making collaboration seamless and
                                efficient.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">What file formats does Convertify support for document conversion?</div>
                        <div className="collapse-content">
                            <p>
                                Convertify supports a wide range of file formats for conversion, including but not limited to PDF, DOCX, XLSX, PPTX, JPG, PNG,
                                and more. You can easily convert files between different formats with just a few clicks.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How can I share documents securely with others using Dynamic Docs?</div>
                        <div className="collapse-content">
                            <p>
                                Sharing documents securely is easy with Dynamic Docs. Simply upload the document you want to share, specify the recipients and
                                their access permissions, and our platform will handle the rest. You can control who has access to your documents and track
                                their activity in real-time.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Is there a free trial available for Dynamic Docs?</div>
                        <div className="collapse-content">
                            <p>
                                Yes, we offer a free trial of Dynamic Docs for new users. Sign up for an account to access all of our features and experience
                                the benefits of our platform firsthand. No credit card is required during the trial period, so you can explore Dynamic Docs
                                risk-free.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex flex-col justify-center items-center w-full text-blue-600">
                    <h2 className="text-center font-bold sm:text-6xl ">Burning Questions?</h2>

                    <MessageCircleQuestion size={240} />
                </div>
            </MaxWidthWrapper>
            <Footer />
        </main>
    );
}
