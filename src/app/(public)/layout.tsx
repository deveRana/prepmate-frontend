// app/(public)/layout.tsx

import { ReactNode } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "PrepMate AI",
  description: "Your AI Interview Partner",
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
        {/* <Navbar /> */}
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
