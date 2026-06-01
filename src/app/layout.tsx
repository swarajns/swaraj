import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Swaraj N S — Performance Marketing & Growth",
  description:
    "Performance Marketing & Growth Specialist with 4+ years in SEO, Google Ads, Meta Ads & Next.js. Based in Dubai, UAE.",
  authors: [{ name: "Swaraj N S", url: "https://swarajns.online" }],
  openGraph: {
    title: "Swaraj N S — Performance Marketing & Growth",
    description: "SEO · Google Ads · Meta Ads · Next.js · Dubai, UAE",
    url: "https://swarajns.online",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}