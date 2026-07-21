import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResumeViewerLoader } from "@/components/ResumeViewerLoader";

export const metadata: Metadata = {
  title: `Resume · ${site.name}`,
  description: `Resume for ${site.name}`,
};

export default function ResumePage() {
  return (
    <div className="bg-atmosphere flex min-h-full flex-col">
      <Header />
      <main className="flex-1 px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto mb-10 flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-sm text-muted">
              <Link
                href="/"
                className="underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                ← Back home
              </Link>
            </p>
            <h1
              className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight text-foreground sm:text-4xl"
              style={{ fontWeight: 700 }}
            >
              Resume
            </h1>
            <p className="mt-2 text-muted">
              View my resume on the page, or download the PDF.
            </p>
          </div>
          <a
            href={site.links.resume}
            download
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Download PDF
          </a>
        </div>

        <ResumeViewerLoader file={site.links.resume} />
        {/* YOUR TURN: implement components/ResumeViewer.tsx (loader is wired) */}
      </main>
      <Footer />
    </div>
  );
}
