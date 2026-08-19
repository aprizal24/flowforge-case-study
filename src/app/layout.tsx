import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowforge-case-study.vercel.app/"),

  title: "FlowForge — UI/UX Case Study",
  description:
    "FlowForge is a project management workspace designed to simplify complex workflows through clear interfaces, task management, collaboration, and analytics.",
  
    alternates: {
  canonical: "/",
},

    keywords: [
    "FlowForge",
    "UI/UX Design",
    "UX Case Study",
    "Product Design",
    "Project Management",
    "UI Design",
  ],

  authors: [{ name: "Rian" }],
  creator: "Rian",

  openGraph: {
    title: "FlowForge — UI/UX Case Study",
    description:
      "A UI/UX case study exploring the design of FlowForge, a focused project management workspace.",
    type: "website",
    siteName: "FlowForge",
    images: [
      {
        url: "/images/flowforge/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowForge UI/UX Case Study",
      },
    ],
  },

  twitter: {
  card: "summary_large_image",
  title: "FlowForge — UI/UX Case Study",
  description:
    "A UI/UX case study exploring the design of FlowForge, a focused project management workspace.",
  images: ["/images/flowforge/og-image.png"],
},

};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
