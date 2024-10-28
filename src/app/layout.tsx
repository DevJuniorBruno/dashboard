import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils"; 
import { Sidebar } from "@/components/sidebar";


export const metadata: Metadata = {
  title: "JOGUE COM MODERAÇÂO",
  description: "Project for portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={cn(
            "min-h-screen bg-background font-sans antialised"
          )}>         
          <Sidebar/>
          {children}
        </body>
    </html>
  );
}
