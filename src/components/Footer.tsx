import React from "react";
import Link from "next/link";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { MailOpen } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
const Footer = () => {
    return (
        <div className=" w-full py-2 bg-black text-white">
            <div className="border-b">
                <h2 className="text-light text-center text-xl font-semibold py-4">Dynamic Docs.</h2>
            </div>
            <MaxWidthWrapper>
                <div className="container mx-auto h-100 py-3">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="col-span-1 ">
                            <h3 className="text-lg font-semibold ">Reach us at</h3>
                            <ul className="mt-2 text-slate-200">
                                <li className="flex items-center py-1">
                                    <MailOpen size={16} className="mr-2" />
                                    <Link href="mailto:shivendrajat8004@gmail.com" rel="noreferrer" target="_blank">
                                        shivendrajat8004@gmail.com
                                    </Link>
                                </li>
                                <li className="flex items-center py-1">
                                    <Phone size={16} className="mr-2" />
                                    <Link href="tel:+917828278004">+91 7828278004</Link>
                                </li>
                                <li className="flex items-center py-1">
                                    <MapPin size={16} className="mr-2" />
                                    <span>Guna, Madhya Pradesh, India 473226</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center">
                            <h3 className="text-lg font-semibold m-0">Services</h3>
                            <ul className="mt-2 text-slate-200">
                                <li className="py-1">
                                    <Link href="/docchat">Doc Chat</Link>
                                </li>
                                <li className="py-1">
                                    <Link href="/fileshare">File Share</Link>
                                </li>
                                <li className="py-1">
                                    <Link href="/convertify">Convertify</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 flex flex-col justify-center items-center">
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="mt-2 text-slate-200">
                                <li className="py-1">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="py-1">
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                                <li className="py-1">
                                    <Link href="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-5 py-2">
                    <Link href="/">
                        <Facebook size={24} />
                    </Link>
                    <Link href="/">
                        <Twitter size={24} />
                    </Link>
                    <Link href="/">
                        <Instagram size={24} />
                    </Link>
                    <Link href="/">
                        <Linkedin size={24} />
                    </Link>
                </div>
                <div className="text-center">
                    <p className="text-sm m-0"> &copy; Dynamic Docs 2024</p>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Footer;
