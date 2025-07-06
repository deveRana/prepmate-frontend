"use client";

import { Button } from "@/components/ui/button";
import { Mic, StopCircle, RotateCcw } from "lucide-react";

interface RecordingControlsProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function RecordingControls({
  isRecording,
  onStart,
  onStop,
  onReset,
}: RecordingControlsProps) {
  return (
    <div className="flex items-center gap-4 mt-4">
      {!isRecording ? (
        <Button onClick={onStart} variant="outline">
          <Mic className="mr-2 w-4 h-4" />
          Start Recording
        </Button>
      ) : (
        <Button onClick={onStop} variant="destructive">
          <StopCircle className="mr-2 w-4 h-4" />
          Stop Recording
        </Button>
      )}
      <Button onClick={onReset} variant="secondary" disabled={isRecording}>
        <RotateCcw className="mr-2 w-4 h-4" />
        Reset Answer
      </Button>
    </div>
  );
}
