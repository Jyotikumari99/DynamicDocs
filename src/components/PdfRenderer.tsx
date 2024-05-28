"use client";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import { toast } from "./ui/use-toast";
import { ChevronDown, ChevronUp, Loader2, LogOut, RotateCw, SearchIcon } from "lucide-react";
import { useResizeDetector } from "react-resize-detector";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import SimpleBar from "simplebar-react";
import PdfFullScreen from "./PdfFullScreen";
import Link from "next/link";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfRendererProps {
    url: string;
}
const PdfRenderer = ({ url }: PdfRendererProps) => {
    const [numPages, setNumPages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [rotation, setRotation] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);
    const [renderedScale, setRenderedScale] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(() => renderedScale !== scale);

    const { width, ref } = useResizeDetector();
    const CustomPageValidator = z.object({
        page: z.string().refine((num) => Number(num) > 0 && Number(num) <= numPages!),
    });
    type TCustomPageValidator = z.infer<typeof CustomPageValidator>;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<TCustomPageValidator>({
        defaultValues: {
            page: "1",
        },
        resolver: zodResolver(CustomPageValidator),
    });
    const handlePageSubmit = ({ page }: TCustomPageValidator) => {
        setCurrentPage(Number(page));
        setValue("page", String(page));
    };
    return (
        <div className="w-full bg-white rounded-md shadow flex flex-col items-center ">
            <div className="h-14 w-full border-b border-zinc-200 flex items-center justify-between px-2">
                <div className="flex items-center gap-1.5">
                    <Button
                        aria-label="previous page"
                        variant="ghost"
                        disabled={currentPage <= 1}
                        onClick={() => {
                            setCurrentPage((prev) => (prev - 1 > 1 ? prev - 1 : 1));
                            setValue("page", String(currentPage - 1));
                        }}
                    >
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-1.5">
                        <Input
                            {...register("page")}
                            className={cn("w-12 h-8 text-center", errors.page && "focus-visible:ring-red-500")}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSubmit(handlePageSubmit)();
                                }
                            }}
                        />
                        <p className="text-zinc-700 text-sm space-x-1">
                            <span>/</span>
                            <span>{numPages ?? "X"}</span>
                        </p>
                    </div>
                    <Button
                        aria-label="next page"
                        variant="ghost"
                        disabled={currentPage >= numPages! || numPages === undefined}
                        onClick={() => {
                            setCurrentPage((prev) => (prev + 1 > numPages! ? numPages! : prev + 1));
                            setValue("page", String(currentPage + 1));
                        }}
                    >
                        <ChevronUp className="h-4 w-4" />
                    </Button>
                </div>
                <div className="space-x-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                                <SearchIcon className="h-4 w-4 me-2" />
                                {scale * 100}% <ChevronDown className="h-3 w-3 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(2)}>
                                200%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(1.75)}>
                                175%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(1.5)}>
                                150%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(1.25)}>
                                125%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(1)}>
                                100%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(0.75)}>
                                75%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(0.5)}>
                                50%
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex justify-center" onSelect={() => setScale(0.25)}>
                                25%
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" onClick={() => setRotation((prev) => prev + 90)} aria-label="rotate 90 degree">
                        <RotateCw className="h-4 w-4" />
                    </Button>
                    <PdfFullScreen url={url} />
                    <Link
                        href="/docchat"
                        className={buttonVariants({
                            size: "sm",
                            variant: "ghost",
                            className: "text-black",
                        })}
                    >
                        <LogOut className="h-4 w-4 " />
                    </Link>
                </div>
            </div>
            <div className="flex-1 w-full max-h-screen">
                <SimpleBar autoHide={false} className="max-h-[calc(100vh-8rem)]">
                    <div ref={ref}>
                        <Document
                            file={url}
                            loading={
                                <div className="flex justify-center">
                                    <Loader2 className="my-24 h-6 w-6 animate-spin" />
                                </div>
                            }
                            onLoadError={() => {
                                toast({
                                    title: "Failed to load PDF",
                                    description: "Please try again later.",
                                    variant: "destructive",
                                });
                            }}
                            onLoadSuccess={({ numPages }) => {
                                setNumPages(numPages);
                            }}
                        >
                            {isLoading && renderedScale ? (
                                <Page width={width ? width : 1} key={"#" + renderedScale} scale={scale} pageNumber={currentPage} rotate={rotation} />
                            ) : null}
                            <Page
                                className={cn(isLoading ? "hidden" : "")}
                                width={width ? width : 1}
                                scale={scale}
                                pageNumber={currentPage}
                                rotate={rotation}
                                key={"@" + scale}
                                loading={
                                    <div className="flex justify-center">
                                        <Loader2 className="my-24 h-6 w-6 animate-spin" />
                                    </div>
                                }
                                onRenderSuccess={() => {
                                    setRenderedScale(scale);
                                }}
                            />
                        </Document>
                    </div>
                </SimpleBar>
            </div>
        </div>
    );
};

export default PdfRenderer;
