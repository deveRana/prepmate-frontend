"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SubmitDialog from "./SubmitDialog";

interface NavigationControlsProps {
  currentIndex: number;
  totalQuestions: number;
  isRecording: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export default function NavigationControls({
  currentIndex,
  totalQuestions,
  isRecording,
  onPrev,
  onNext,
}: NavigationControlsProps) {
  return (
    <div className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={currentIndex === 0 || isRecording}
      >
        <ArrowLeft className="mr-2 w-4 h-4" />
        Previous
      </Button>

      {currentIndex === totalQuestions - 1 ? (
        <SubmitDialog isRecording={isRecording} />
      ) : (
        <Button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1 || isRecording}
        >
          Next
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
