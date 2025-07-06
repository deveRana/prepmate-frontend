"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-purple-50 via-indigo-50 to-white flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-20 py-20">
      {/* Text */}
      <div className="flex flex-col gap-6 max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Crack Interviews with Confidence
          <span className="text-purple-600"> 🚀</span>
        </h1>
        <p className="text-gray-700 text-lg">
          Your personalized AI-powered mock interview platform — practice,
          improve, and ace your next job.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <Link href="/login">
            <Button className="px-6 py-4 text-base bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 shadow-md">
              Get Started
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              className="px-6 py-4 text-base border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="mb-10 md:mb-0">
        <Image
          src="/assets/illustration.svg"
          alt="Interview prep illustration"
          width={500}
          height={500}
          className="w-sm md:w-xl "
        />
      </div>
    </section>
  );
}
