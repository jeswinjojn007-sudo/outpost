import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AppShell } from "@/components/AppShell";
import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/ui/themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Outpost : Agentic Workspace",
  description:
    "An AI agent that draws and writes alongside with you and your team",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider 
    appearance={{
      theme: dark,
      variables: {colorPrimary: "oklch(0.74 0.16 55"},
    }}
    >
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <TooltipProvider>
            <AppShell>{children}</AppShell>{" "}
            {/*app shell is used to creat a header it is a dynamic
          component which is on server side  so we need to creat a client side in outside of UI folder  */}
          </TooltipProvider>{" "}
          {/*using tooltip when we hover on somethig the name will reflected above */}
          <Toaster richColors />
          {/* when we use Toaster it will show same box when we click on a button */}
        </body>
      </html>
    </ClerkProvider>
  );
}
