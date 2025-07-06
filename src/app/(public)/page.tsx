"use client";

import HeroSection from "@/components/landing/HeroSection";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/public-layout/Footer";
import Navbar from "@/components/public-layout/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col font-sans">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}
