"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WebcamPanel() {
  const [webcamStarted, setWebcamStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (webcamStarted && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Webcam access denied", err);
        });
    }
  }, [webcamStarted]);

  return (
    <Card className="h-[500px] w-full backdrop-blur-sm bg-white/70 border border-gray-200 shadow-2xl rounded-3xl transition-all duration-300">
      <CardContent className="w-full h-full flex flex-col items-center justify-center gap-6 p-6">
        {!webcamStarted ? (
          <Button
            onClick={() => setWebcamStarted(true)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Webcam
          </Button>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="rounded-2xl w-full h-full object-cover bg-black scale-x-[-1] border border-white/30 shadow-inner"
          />
        )}
      </CardContent>
    </Card>
  );
}
