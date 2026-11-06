import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aedin Richardson",
    template: "%s | Aedin Richardson",
  },
  description:
    "Full-stack developer in Cedar City, Utah. Code. Circuits. AI. Portfolio of apps including Alte' Budgeting, Kami-No-Ko, Unlock Style Escape Rooms, and OnceItWorks.",
  authors: [{ name: "Aedin Richardson" }],
  openGraph: {
    title: "Aedin Richardson",
    description:
      "Full-stack developer building at the intersection of intelligent software, microcontrollers, and AI.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06110d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-fog">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-phosphor focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to work
        </a>
        {children}
      </body>
    </html>
  );
}
