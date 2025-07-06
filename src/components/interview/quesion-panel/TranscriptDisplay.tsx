"use client";

interface TranscriptDisplayProps {
  liveTranscript: string;
  recordedAnswer: string;
  isRecording: boolean;
}

export default function TranscriptDisplay({
  liveTranscript,
  recordedAnswer,
  isRecording,
}: TranscriptDisplayProps) {
  return (
    <>
      <div className="mb-4">
        <div className="bg-gray-100 rounded p-3 min-h-[80px] text-sm text-gray-800 whitespace-pre-wrap">
          {liveTranscript || "Your answer will appear here..."}
        </div>
      </div>

      {isRecording && (
        <p className="text-xs text-red-500 mt-1">
          ⚠️ Recording in progress — navigation disabled.
        </p>
      )}

      {recordedAnswer && !isRecording && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-1 text-gray-600">
            Saved Answer:
          </h3>
          <p className="text-gray-700 text-sm bg-gray-50 p-2 rounded border">
            {recordedAnswer}
          </p>
        </div>
      )}
    </>
  );
}
