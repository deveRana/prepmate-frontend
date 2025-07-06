"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Mic,
  StopCircle,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuestionPanelProps {
  questions: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function QuestionPanel({
  questions,
  currentIndex,
  onNext,
  onPrev,
}: QuestionPanelProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [recordedAnswers, setRecordedAnswers] = useState<string[]>([]);
  const recognitionRef = useRef<any>(null);
  const fullTranscriptRef = useRef("");

  // Load existing answer on question change
  useEffect(() => {
    fullTranscriptRef.current = recordedAnswers[currentIndex] || "";
    setLiveTranscript(recordedAnswers[currentIndex] || "");
  }, [currentIndex]);

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onresult = (event: any) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            fullTranscriptRef.current += transcript + " ";
          } else {
            interim += transcript;
          }
        }
        setLiveTranscript(fullTranscriptRef.current + interim);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const startRecording = () => {
    if (recognitionRef.current) {
      fullTranscriptRef.current = recordedAnswers[currentIndex] || "";
      setLiveTranscript(fullTranscriptRef.current);
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);

      const finalTranscript = fullTranscriptRef.current.trim();
      const updatedAnswers = [...recordedAnswers];
      updatedAnswers[currentIndex] = finalTranscript;
      setRecordedAnswers(updatedAnswers);
    }
  };

  const resetAnswer = () => {
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }

    fullTranscriptRef.current = "";
    setLiveTranscript("");

    const updatedAnswers = [...recordedAnswers];
    updatedAnswers[currentIndex] = "";
    setRecordedAnswers(updatedAnswers);
  };

  return (
    <Card className="h-[500px] flex flex-col justify-between shadow-xl">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <p className="text-base text-gray-700 mb-4">
            {questions[currentIndex]}
          </p>

          <div className="mb-4">
            <div className="bg-gray-100 rounded p-3 min-h-[80px] text-sm text-gray-800 whitespace-pre-wrap">
              {liveTranscript || "Your answer will appear here..."}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-2">
            {!isRecording ? (
              <Button onClick={startRecording} variant="outline">
                <Mic className="mr-2 w-4 h-4" />
                Start Recording
              </Button>
            ) : (
              <Button onClick={stopRecording} variant="destructive">
                <StopCircle className="mr-2 w-4 h-4" />
                Stop Recording
              </Button>
            )}

            <Button onClick={resetAnswer} variant="secondary">
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset Answer
            </Button>
          </div>

          {recordedAnswers[currentIndex] && !isRecording && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-600">
                Saved Answer:
              </h3>
              <p className="text-gray-700 text-sm bg-gray-50 p-2 rounded border">
                {recordedAnswers[currentIndex]}
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={onPrev}
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Previous
          </Button>
          <Button
            onClick={onNext}
            disabled={currentIndex === questions.length - 1}
          >
            Next
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
