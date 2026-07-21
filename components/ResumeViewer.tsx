"use client";

/**
 * ============================================================
 * YOUR TURN — build the clean PDF resume viewer
 * ============================================================
 * Goal: show public/resume.pdf as paper-like pages — NOT the browser’s
 * ugly PDF toolbar (that’s what you get from a bare <iframe>).
 *
 * Interview soundbite (practice saying this out loud):
 *   “I put the PDF in /public so Next.js serves it as a static file.
 *    Instead of iframe-embedding it, I render pages with pdf.js via
 *    react-pdf so each page becomes a canvas. That looks clean and
 *    avoids browser PDF chrome. The viewer is client-only because
 *    pdf.js needs browser APIs.”
 *
 * Why these pieces exist:
 * 1. public/resume.pdf  →  URL /resume.pdf (static asset)
 * 2. react-pdf Document → loads the PDF, tells you how many pages
 * 3. react-pdf Page     → draws one page onto a <canvas>
 * 4. pdfjs worker       → PDF parsing runs off the main thread
 * 5. "use client"       → this file must run in the browser
 *
 * Steps (do them in order):
 * 1. Keep this file as a Client Component (`"use client"` stays).
 * 2. Import { Document, Page, pdfjs } from "react-pdf"
 *    and the two CSS files:
 *      import "react-pdf/dist/Page/AnnotationLayer.css"
 *      import "react-pdf/dist/Page/TextLayer.css"
 * 3. Point the worker at a CDN (pdf.js needs this once per module):
 *      pdfjs.GlobalWorkerOptions.workerSrc =
 *        `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`
 * 4. Accept a `file` prop (string path like "/resume.pdf").
 * 5. useState for numPages (start at 0).
 * 6. Render <Document file={file} onLoadSuccess={...}>
 *    In onLoadSuccess, setNumPages from the callback argument.
 * 7. Inside Document, map 1..numPages into <Page pageNumber={n} width={...} />
 * 8. Style pages with className "resume-page" (CSS already in globals.css)
 *    so they look like white paper with a soft shadow.
 *
 * Stretch (optional, still good interview material):
 * - Responsive width with useEffect + window.innerWidth
 * - onLoadError UI if the PDF is missing
 * - loading= prop on Document / Page
 *
 * Done looks like: /resume shows your PDF pages as canvases, no PDF toolbar.
 * Delete this comment block when you are finished.
 * ============================================================
 */

type ResumeViewerProps = {
  /** Path under /public, e.g. "/resume.pdf" */
  file: string;
};

export function ResumeViewer({ file }: ResumeViewerProps) {
  return (
    <div className="mx-auto w-full max-w-[860px]">
      <div className="rounded-lg border border-dashed border-accent/40 bg-accent/5 px-5 py-8 sm:px-8">
        <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-accent">
          YOUR TURN · ResumeViewer.tsx
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Implement the pdf.js viewer here. The file prop is already wired
          from the resume page as{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            {file}
          </code>
          . Follow the comment block at the top of this file — that is your
          checklist. When it works, replace this box with{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            Document
          </code>{" "}
          +{" "}
          <code className="rounded bg-foreground/5 px-1 py-0.5 text-foreground">
            Page
          </code>{" "}
          from react-pdf.
        </p>
      </div>
    </div>
  );
}
