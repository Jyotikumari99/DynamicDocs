"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
const Search = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");

    const { data, isLoading, error } = trpc.authCallback.useQuery(undefined);
    useEffect(() => {
        if (!isLoading) {
            if (error?.data?.code === "UNAUTHORIZED") {
                router.push("/");
            } else {
                router.push(origin ? `/${origin}` : "/docchat");
            }
        }
    }, [isLoading, error]);
    return (
        <div className="w-full mt-24 flex justify-center items-center h-[60vh]">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="font-semibold text-xl">Setting up your account...</h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    );
};

export default Search;
