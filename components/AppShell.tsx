"use client"; // when ever we use client side use this 'use client

import { usePathname } from "next/navigation"; // this is used to get the current path name of the page
import React from "react";
import { SiteHeader } from "./SiteHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  //  this is a component which is used to create a header and footer for the application and it will be used in the layout.tsx file
  const pathname = usePathname(); //helps to know which page  are we mcurrently on and we can use this to highlight the current page in the header
  const isFullScreenRoute =
    pathname?.startsWith("/workspace/") || pathname?.startsWith("/shared/"); // this is used to check if the current page is a full screen page or not and we can use this to hide the header on full screen pages

  if (isFullScreenRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col pt-18">{children}</div>
    </>
  );
}
