// import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import "simplebar-react/dist/simplebar.min.css";
const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });
interface MetadataIcons {
    icon: string;
    icon16: string;
    icon32: string;
    iconApple: string;
    iconAndroid: string;
    iconAndroidLarge: string;
}

interface Metadata {
    title: string;
    creator: string;
    keywords: string;
    description: string;
    icons: MetadataIcons;
}
export const metadata: Metadata = {
    title: "Dynamic Docs - Document Management and Collaboration Platform",
    creator: "Shiv Software Solutions",
    keywords:
        "document management platform, file conversion tool, file sharing service, PDF interaction platform, Convertify, FileShare, DocChat, artificial intelligence document processing, document collaboration, Shiv Software Solutions, free document management, premium document management, document workflow optimization, seamless document handling, dynamic document solutions",
    description:
        "Dynamic Docs is your all-in-one solution for managing documents seamlessly. Developed by Shiv Software Solutions, our platform offers a suite of powerful features designed to simplify your document workflow. With Convertify, FileShare, and DocChat, you can effortlessly convert file types, securely share files, and interact with PDFs using our cutting-edge artificial intelligence model. Our platform is designed to empower users with intuitive tools that streamline document management tasks. Whether you're a student, professional, or business owner, Dynamic Docs has everything you need to enhance productivity and collaboration. From converting files to sharing documents with ease, our platform caters to your every need. With a focus on user experience and accessibility, Dynamic Docs offers both free and premium plans to suit your requirements. Our free tier provides access to essential features, while premium plans unlock advanced functionalities for power users and businesses. Join thousands of satisfied users who trust Dynamic Docs to revolutionize their document management experience. Start simplifying your workflow today with Dynamic Docs by Shiv Software Solutions.",
    icons: {
        icon: "/favicon.ico",
        icon16: "/favicon-16x16.png",
        icon32: "/favicon-32x32.png",
        iconApple: "/apple-touch-icon.png",
        iconAndroid: "/android-chrome-192x192.png",
        iconAndroidLarge: "/android-chrome-512x512.png",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const givenName = user?.given_name || "";
    const familyName = user?.family_name || "";
    const name = givenName + " " + familyName;
    const url = user?.picture;
    return (
        <html lang="en" className="light">
            <Providers>
                <body className={cn("min-h-screen font-sans antialiased grainy", inter.className, outfit.className)}>
                    <Toaster />
                    <Navbar name={name} url={url} />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
