"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import { AlignCenter, X } from "lucide-react";
interface LayoutProps {
    children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
    // if (!user || !user.id) redirect("/api/auth/login"); // remember this path for other pages

    const [showSideNav, setShowSideNav] = useState(false);
    return (
        <div>
            {/* Sidebar */}
            <div className={`${showSideNav ? "block" : "hidden"} h-full md:block md:w-64 fixed inset-y-0 z-50 top-14 transition-all bg-gray-200`}>
                <SideNav />
            </div>

            {/* Toggle button for small screens */}
            <div className="md:hidden fixed z-50 top-16 left-1">
                {showSideNav ? (
                    <X className="rounded-full h-6 w-6 p-1 bg-gray-200" onClick={() => setShowSideNav(!showSideNav)} />
                ) : (
                    <AlignCenter className="rounded-full h-6 w-6 p-1 bg-gray-200" onClick={() => setShowSideNav(!showSideNav)} />
                )}
            </div>

            {/* Main Content */}
            <div className={`md:ml-64 ${showSideNav ? "absolute top-14 inset-0 z-0" : null}`}>{children}</div>
        </div>
    );
};

export default Layout;
