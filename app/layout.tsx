import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { ApplyModalProvider } from "@/components/providers/apply-modal-provider";
import { Footer } from "@/components/layout/footer";
import Navbar  from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Binance",
  description: ""
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ApplyModalProvider>
          <Navbar />
          <main className="">{children}</main>
          {/* <main className="container grid gap-8 py-6 sm:grid-cols-[7fr_3fr] sm:items-start">
            <div className="min-w-0">{children}</div>
           
          </main> */}
          {/* <Footer /> */}
          <ToastProvider />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
