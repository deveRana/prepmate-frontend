"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, StopCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import QuestionHeader from "@components/interview/quesion-panel/QuestionHeader";
import NavigationControls from "@components/interview/quesion-panel/NavigationControls";
import SubmitDialog from "@components/interview/quesion-panel/SubmitDialog";

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
  const [liveTranscript, setLiveTranscript] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [recordedAnswers, setRecordedAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );

  const recognitionRef = useRef<any>(null);
  const fullTranscriptRef = useRef<string[]>(
    new Array(questions.length).fill("")
  );

  const router = useRouter();

  useEffect(() => {
    // Sync current question with stored answer
    fullTranscriptRef.current[currentIndex] =
      recordedAnswers[currentIndex] || "";
    setLiveTranscript((prev) => {
      const updated = [...prev];
      updated[currentIndex] = recordedAnswers[currentIndex] || "";
      return updated;
    });
  }, [currentIndex]);

  const startRecording = () => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      fullTranscriptRef.current[currentIndex] = "";
      setLiveTranscript((prev) => {
        const updated = [...prev];
        updated[currentIndex] = "";
        return updated;
      });

      recognition.onresult = (event: any) => {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            fullTranscriptRef.current[currentIndex] += transcript + " ";
          } else {
            interim += transcript;
          }
        }

        setLiveTranscript((prev) => {
          const updated = [...prev];
          updated[currentIndex] =
            fullTranscriptRef.current[currentIndex] + interim;
          return updated;
        });
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event);
        setIsRecording(false);
      };

      recognition.onend = () => {
        console.log("Recognition ended");
      };

      recognitionRef.current = recognition;

      try {
        recognition.start();
        setIsRecording(true);
      } catch (err) {
        console.error("SpeechRecognition start error:", err);
      }
    } else {
      alert("⚠️ Speech recognition is supported only in Google Chrome.");
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      } catch (err) {
        console.error("SpeechRecognition stop error:", err);
      }

      setIsRecording(false);

      setRecordedAnswers((prev) => {
        const updated = [...prev];
        updated[currentIndex] = liveTranscript[currentIndex].trim();
        return updated;
      });
    }
  };

  const resetAnswer = () => {
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
      setIsRecording(false);
    }

    fullTranscriptRef.current[currentIndex] = "";

    setLiveTranscript((prev) => {
      const updated = [...prev];
      updated[currentIndex] = "";
      return updated;
    });

    setRecordedAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = "";
      return updated;
    });
  };

  return (
    <Card className="h-[500px] w-full backdrop-blur-sm bg-white/70 border border-gray-200 shadow-2xl rounded-3xl transition-all duration-300">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Header */}
          <QuestionHeader
            currentIndex={currentIndex}
            totalQuestions={questions.length}
            questionText={questions[currentIndex]}
          />

          {/* Live Transcript */}
          <div className="mb-4 mt-4">
            <div className="bg-gradient-to-r from-gray-100 to-white rounded-xl p-4 min-h-[80px] text-sm text-gray-800 shadow-inner whitespace-pre-wrap border border-gray-200">
              {liveTranscript[currentIndex] ||
                "Your answer will appear here..."}
            </div>
          </div>

          {/* Recording Controls */}
          <div className="flex items-center gap-4 mb-2">
            {!isRecording ? (
              <Button
                onClick={startRecording}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                <Mic className="mr-2 w-4 h-4" />
                Start Recording
              </Button>
            ) : (
              <Button
                onClick={stopRecording}
                variant="destructive"
                className="shadow-md hover:shadow-xl hover:scale-105 transition-all"
              >
                <StopCircle className="mr-2 w-4 h-4" />
                Stop Recording
              </Button>
            )}

            <Button
              onClick={resetAnswer}
              variant="secondary"
              className="shadow-md hover:shadow-lg transition-all"
              disabled={isRecording}
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Reset Answer
            </Button>
          </div>

          {isRecording && (
            <p className="text-xs text-red-500 mt-1">
              ⚠️ Recording in progress — navigation disabled.
            </p>
          )}

          {/* Saved Answer */}
          {recordedAnswers[currentIndex]?.trim() && !isRecording && (
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-1 text-gray-600">
                Saved Answer:
              </h3>
              <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-xl border border-gray-200 shadow-sm">
                {recordedAnswers[currentIndex]}
              </p>
            </div>
          )}
        </div>

        {/* Navigation / Submit */}
        <div className="pt-4">
          {currentIndex === questions.length - 1 ? (
            <SubmitDialog isRecording={isRecording} />
          ) : (
            <NavigationControls
              currentIndex={currentIndex}
              totalQuestions={questions.length}
              isRecording={isRecording}
              onPrev={onPrev}
              onNext={onNext}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
