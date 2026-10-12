import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arboressence Firewood & Tree | Wangaratta Seasoned Redgum Delivery & Tree Services",
  description: "Split seasoned redgum and mixed hardwood delivered by the cubic metre or ton across Wangaratta, Glenrowan, Oxley, and Milawa. Professional tree removals, pruning and stump grinding. Call (03) 5725 7493.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-surface-950 text-surface-100 antialiased selection:bg-amber-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
