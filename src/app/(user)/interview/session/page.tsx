"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import QuestionPanel from "@/components/interview/QuestionPanel";
import WebcamPanel from "@/components/interview/WebcamPanel";

const dummyQuestions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Describe a difficult bug you fixed recently.",
  "How do you stay updated with new technologies?",
  "Why should we hire you?",
];

export default function InterviewSessionPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "Software Engineer";
  const level = searchParams.get("level") || "Fresher";
  const topics = searchParams.get("topics")?.split(",") || ["Behavioral"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < dummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted py-10 px-4">
      {/* Info Section */}
      <div className="max-w-6xl mx-auto mb-4 text-center text-muted-foreground text-sm">
        <p>
          Role: <span className="font-medium text-primary">{role}</span> |
          Level: <span className="font-medium text-primary">{level}</span> |
          Topics:{" "}
          <span className="font-medium text-primary">{topics.join(", ")}</span>
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <QuestionPanel
          questions={dummyQuestions}
          currentIndex={currentIndex}
          onNext={next}
          onPrev={prev}
        />
        <WebcamPanel />
      </div>
    </div>
  );
}
