import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ToastProvider } from "@/components/providers/ToastProvider";
import { ApplyModalProvider } from "@/components/providers/apply-modal-provider";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SiteSidebar } from "@/components/layout/site-sidebar";

export const metadata: Metadata = {
  title: "Badar Study Abroad",
  description: "Premium study abroad counselling, scholarships, admissions strategy, and visa support for ambitious students."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ApplyModalProvider>
          <Navbar />
          <main className="container">{children}</main>
          {/* <main className="container grid gap-8 py-6 sm:grid-cols-[7fr_3fr] sm:items-start">
            <div className="min-w-0">{children}</div>
            <SiteSidebar />
          </main> */}
          <Footer />
          <ToastProvider />
        </ApplyModalProvider>
      </body>
    </html>
  );
}
