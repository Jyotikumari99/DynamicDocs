"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface NavbarProps {
    name: string | null | undefined;
    url: string | null | undefined;
}
const Navbar = ({ name, url }: NavbarProps) => {
    const currentPath = usePathname();
    const [navTitle, setNavTitle] = useState("Dynamic Docs.");
    const [navHref, setNavHref] = useState("/");
    // useEffect(() => {
    //     if (currentPath === "/fileshare") {
    //         setNavTitle("FileShare.");
    //         setNavHref("/fileshare");
    //     } else if (currentPath === "/convertify") {
    //         setNavTitle("Convertify.");
    //         setNavHref("/convertify");
    //     } else if (currentPath === "/docchat") {
    //         setNavTitle("DocChat.");
    //         setNavHref("/docchat");
    //     }
    // }, []);
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href={navHref} className="flex z-40 font-semibold">
                        {navTitle}
                    </Link>
                    {/* Todo: Ad mobile navbar */}
                    <div className="sm:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <AlignJustify size={16} />
                            </SheetTrigger>

                            <SheetContent>
                                <h2 className="font-semibold border-b p-2">{navTitle}</h2>
                                <ul>
                                    <li className="border-b p-2">
                                        <Link className="flex items-center " href="/pricing">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="border-b p-2">
                                        <LoginLink>Sign in</LoginLink>
                                    </li>
                                    <li className="border-b p-2">
                                        <RegisterLink>Get started</RegisterLink>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link
                                href="/pricing"
                                className={buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}
                            >
                                Pricing
                            </Link>
                            {name && url ? (
                                <>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Image className="rounded-full border-2 border-gray-600" src={url} height={40} width={40} alt="Profile" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent className="w-56">
                                            <DropdownMenuLabel className="text-center">{name}</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuCheckboxItem className="flex justify-center p-0">
                                                <LogoutLink className="flex gap-2 items-center">
                                                    Logout <LogOut size={14} />
                                                </LogoutLink>
                                            </DropdownMenuCheckboxItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            ) : (
                                <>
                                    <LoginLink
                                        className={buttonVariants({
                                            variant: "ghost",
                                            size: "sm",
                                        })}
                                    >
                                        Sign in
                                    </LoginLink>
                                    <RegisterLink
                                        className={buttonVariants({
                                            size: "sm",
                                        })}
                                    >
                                        Get started <ArrowRight className=" ml-1.5 h-5 w-5" />
                                    </RegisterLink>
                                </>
                            )}
                        </>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;
