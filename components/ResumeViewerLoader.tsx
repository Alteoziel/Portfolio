"use client";

import dynamic from "next/dynamic";

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
