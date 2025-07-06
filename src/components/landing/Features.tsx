"use client";

import {
  Brain,
  Zap,
  BarChart,
  FileText,
  Target,
  Lightbulb,
} from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="px-6 sm:px-20 py-24 flex flex-col gap-16 bg-white"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Powerful Features Built for Success
        </h2>
        <p className="text-gray-600 text-lg">
          Simulate real interviews, get AI feedback, and track your improvement
          like a pro.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Mock Interviews",
            description:
              "Realistic AI-driven mock interviews tailored to your role and level.",
            icon: <Brain className="w-8 h-8 text-purple-600" />,
          },
          {
            title: "AI Feedback",
            description:
              "Instant insights on your answers, tone, and clarity using AI.",
            icon: <Zap className="w-8 h-8 text-purple-600" />,
          },
          {
            title: "Performance Tracking",
            description:
              "Track your improvement with analytics and visual breakdowns.",
            icon: <BarChart className="w-8 h-8 text-purple-600" />,
          },
          {
            title: "Custom Question Sets",
            description:
              "Practice with questions based on your resume or job description.",
            icon: <FileText className="w-8 h-8 text-purple-600" />,
          },
          {
            title: "Multi-Round Simulation",
            description:
              "Simulate technical, HR, and managerial interviews easily.",
            icon: <Target className="w-8 h-8 text-purple-600" />,
          },
          {
            title: "Interview Tips",
            description:
              "Expert-curated strategies and best practices for cracking interviews.",
            icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-lg transition-all"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
