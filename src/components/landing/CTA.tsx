"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 sm:px-20 rounded-xl mx-4 sm:mx-20 shadow-xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">
        Ready to Ace Your Next Interview?
      </h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        Join hundreds of learners using PrepMate AI to level up and land their
        dream job.
      </p>
      <Link href="/auth/register">
        <Button
          size="lg"
          className="text-base px-6 py-4 bg-white text-purple-600 hover:bg-gray-100"
        >
          Get Started for Free
        </Button>
      </Link>
    </section>
  );
}
