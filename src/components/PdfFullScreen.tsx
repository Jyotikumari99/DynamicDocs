"use client";
import React, { useState } from "react";
import SimpleBar from "simplebar-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { Expand, Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeDetector } from "react-resize-detector";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
interface FullScreenProps {
    url: string;
}
const PdfFullScreen = ({ url }: FullScreenProps) => {
    const [numPages, setNumPages] = useState<number>();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { width, ref } = useResizeDetector();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"ghost"} className="gap-1.5" aria-label="fullscreen">
                    <Expand className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-7xl w-full">
                <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)] mt-6">
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
                            {new Array(numPages).fill(0).map((_, i) => (
                                <Page width={width ? width : 1} key={i} pageNumber={i + 1} />
                            ))}
                        </Document>
                    </div>
                </SimpleBar>
            </DialogContent>
        </Dialog>
    );
};

export default PdfFullScreen;
