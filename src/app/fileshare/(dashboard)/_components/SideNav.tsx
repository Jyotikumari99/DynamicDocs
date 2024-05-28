"use client";
import React, { useState } from "react";
import { File, Shield, Upload } from "lucide-react";
import Link from "next/link";

const SideNav = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const menuList = [
        {
            id: 0,
            name: "Upload",
            icon: <Upload />,
            path: "/fileshare/upload",
        },
        {
            id: 1,
            name: "Files",
            icon: <File />,
            path: "/fileshare/files",
        },
    ];
    return (
        <div className="shadow-sm border-r h-full">
            <div className="p-5 border-b">
                <h2 className="text-blue-600 font-bold text-4xl">File Share</h2>
            </div>
            <div className="flex flex-col float-left w-full">
                {menuList.map((menu) => (
                    <Link
                        href={menu.path}
                        key={menu.id}
                        className={`flex gap-2 p-4 px-5 hover:bg-gray-100 w-full text-gray-600 ${activeIndex === menu.id ? "bg-blue-50 text-primary " : null}`}
                        onClick={() => setActiveIndex(menu.id)}
                    >
                        {menu.icon}

                        <h2>{menu.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SideNav;
