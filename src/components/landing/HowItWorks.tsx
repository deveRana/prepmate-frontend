"use client";

import { Target, BarChart } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="py-20 bg-gradient-to-b from-white to-purple-50 px-6 sm:px-12 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How PrepMate Works
          </h2>
          <p className="text-gray-600 mb-4">
            Simply log in, select your domain (e.g., Frontend, DevOps, DSA), and begin your AI-powered interview session.
          </p>
          <p className="text-gray-600">
            At the end, get actionable feedback and improve step-by-step.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <Target className="text-purple-600 mb-2" size={28} />
            <h3 className="font-semibold text-gray-800 mb-1">Goal-Based Prep</h3>
            <p className="text-sm text-gray-600">Tailored to your career target and difficulty level.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <BarChart className="text-purple-600 mb-2" size={28} />
            <h3 className="font-semibold text-gray-800 mb-1">Track Growth</h3>
            <p className="text-sm text-gray-600">Visual dashboard to monitor your strengths and weak areas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
