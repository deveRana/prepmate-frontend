"use client";

interface QuestionHeaderProps {
  currentIndex: number;
  totalQuestions: number;
  questionText: string;
}

export default function QuestionHeader({
  currentIndex,
  totalQuestions,
  questionText,
}: QuestionHeaderProps) {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        Question {currentIndex + 1} of {totalQuestions}
      </h2>
      <p className="text-base text-gray-700 mb-4">{questionText}</p>
    </>
  );
}
