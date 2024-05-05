import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PageTransitionWrapper from "./components/page-wrapper";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });
import Cursor from "./components/cursor";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import TanstackProvider from "@/queryProvider/provider";
import { TableContextProvider } from "./table/context";
import { ViewTransitions } from "next-view-transitions";
import "react-quill/dist/quill.snow.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={inter.className}>
          <TanstackProvider>
            <TableContextProvider>
              {/* <Cursor /> */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "30px",
                  justifyContent: "flex-end",
                }}
              >
                <Link href={"/home"}>Home </Link>
                <Link href={"/about"}>About </Link>
                <Link href={"/service"}>Service </Link>
                <Link href={"/keyframe"}>keyframe </Link>
                <Link href={"/layout"}>layout </Link>
                <Link href={"/reorder"}>Reorder</Link>
                <Link href={"/text-stagger"}>Text Stagger</Link>
                <Link href={"/text"}>Text </Link>
                <Link href={"/parallax"}>Parallax</Link>
                <Link href={"/table"}>Table</Link>
                <Link href={"/non-recursive"}>Non Recursive</Link>
                <Link href={"/comments"}>Comments</Link>
                <Link href={"/scroll"}>scroll</Link>
                <Link href={"/scroll-view"}>scroll-view</Link>
                <Link href={"/nba-team"}>NBA Team</Link>
                <Link href={"/carousel"}>Carousel</Link>
                <Link href={"/text-ani"}>text-ani</Link>
                <Link href={"/fyi"}>fyi</Link>
                <Link href={"/quill"}>Quill</Link>
                <Link href={"/foot-fix"}>foot-fix</Link>
                <Link href={"/stagger"}>stagger</Link>
                <Link href={"/polling"}>polling</Link>
                <Link href={"/shared-layout"}>Shared Layout Animation</Link>
              </div>
              {/* <PageTransitionWrapper>{children}</PageTransitionWrapper> */}
              {children}
              {/* </QueryClientProvider> */}
            </TableContextProvider>
          </TanstackProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
