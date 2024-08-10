import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       {/* eslint-disable-next-line @next/next/inline-script-id */}
       <Script
          type="module"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";
            mermaid.contentLoaded();
          `,
          }}
        />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
