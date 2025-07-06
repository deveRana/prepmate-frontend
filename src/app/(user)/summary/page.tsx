"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InterviewSummaryPage() {
  const router = useRouter();

  const handleFinish = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5e9ff] via-[#edf2ff] to-white px-6 py-12">
      <section className="max-w-3xl mx-auto space-y-10 animate-fade-in">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
            Your Interview Recap
          </h1>
          <p className="text-gray-600 text-lg">
            Nice work! Here&apos; how it went. 🎯
          </p>
        </div>

        {/* Summary Card */}
        <Card className="backdrop-blur-sm bg-white/70 border border-gray-200 shadow-xl rounded-3xl">
          <CardContent className="p-8 space-y-8">
            {/* Emoji rating */}
            <div className="flex items-center justify-center gap-6 text-4xl">
              <span>🎤</span>
              <span>💡</span>
              <span>🔥</span>
              <span>🚀</span>
            </div>

            {/* Interview Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gradient-to-r from-purple-200 to-purple-100 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Questions Answered</p>
                <h2 className="text-2xl font-bold text-purple-800">5</h2>
              </div>
              <div className="bg-gradient-to-r from-indigo-200 to-indigo-100 p-4 rounded-xl shadow-sm">
                <p className="text-sm text-gray-600">Total Speaking Time</p>
                <h2 className="text-2xl font-bold text-indigo-800">3m 42s</h2>
              </div>
            </div>

            {/* Performance Note */}
            <div className="bg-indigo-50 text-indigo-800 p-5 rounded-xl text-center text-md leading-relaxed">
              🌟 <strong>You were confident and clear.</strong>
              <br />
              Next time, try adding more structured examples using{" "}
              <em>STAR format</em>.
            </div>

            {/* Action Button */}
            <div className="pt-4 text-center">
              <Button
                onClick={handleFinish}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Go to Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
