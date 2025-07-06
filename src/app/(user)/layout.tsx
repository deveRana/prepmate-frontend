import { ReactNode } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import DashboardNavbar from "@/components/user-layout/DashboardNavbar"; // ✅
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "PrepMate AI - Dashboard",
  description: "Give mock interviews and track progress",
};

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <DashboardNavbar />
          <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
