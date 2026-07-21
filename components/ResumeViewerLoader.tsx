"use client";

import dynamic from "next/dynamic";

/**
 * Loads ResumeViewer only in the browser.
 *
 * Why this file exists (say this in an interview):
 * pdf.js / react-pdf touch browser-only APIs (DOM, canvas, workers).
 * If Next tried to render that during SSR, the build or first paint can blow up.
 * `dynamic(..., { ssr: false })` skips server render for that subtree.
 *
 * You usually do NOT need to change this file — build ResumeViewer.tsx instead.
 */
const ResumeViewer = dynamic(
  () =>
    import("@/components/ResumeViewer").then((mod) => mod.ResumeViewer),
  {
    ssr: false,
    loading: () => (
      <p className="py-24 text-center text-sm text-muted" aria-live="polite">
        Loading resume…
      </p>
    ),
  },
);

type ResumeViewerLoaderProps = {
  file: string;
};

export function ResumeViewerLoader({ file }: ResumeViewerLoaderProps) {
  return <ResumeViewer file={file} />;
}
