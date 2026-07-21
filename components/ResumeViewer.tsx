"use client";

import { useCallback, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type ResumeViewerProps = {
  /** Path under /public, e.g. "/resume.pdf" */
  file: string;
};

export function ResumeViewer({ file }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState(0);
  const [width, setWidth] = useState(720);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      const max = Math.min(window.innerWidth - 40, 820);
      setWidth(Math.max(280, max));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onLoadSuccess = useCallback(({ numPages: next }: { numPages: number }) => {
    setNumPages(next);
    setError(null);
  }, []);

  const onLoadError = useCallback((err: Error) => {
    console.error(err);
    setError(
      "Could not load the resume PDF. Drop your file at public/resume.pdf and refresh.",
    );
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-6">
      {error ? (
        <div
          role="alert"
          className="w-full border border-border bg-surface px-5 py-8 text-center text-sm text-muted"
        >
          <p className="text-foreground" style={{ fontWeight: 600 }}>
            Resume not found
          </p>
          <p className="mt-2">{error}</p>
        </div>
      ) : null}

      <Document
        file={file}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
        loading={
          <p className="py-16 text-sm text-muted" aria-live="polite">
            Loading resume…
          </p>
        }
        className="flex w-full flex-col items-center gap-6"
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page
            key={`page-${index + 1}`}
            pageNumber={index + 1}
            width={width}
            renderAnnotationLayer
            renderTextLayer
            className="resume-page overflow-hidden bg-white shadow-[0_18px_50px_-24px_rgba(26,36,33,0.45)]"
            loading={
              <div
                className="bg-white shadow-[0_18px_50px_-24px_rgba(26,36,33,0.45)]"
                style={{ width, height: width * 1.294 }}
                aria-hidden
              />
            }
          />
        ))}
      </Document>
    </div>
  );
}
