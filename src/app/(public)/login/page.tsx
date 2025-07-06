"use client";

import { Button } from "@/components/ui/button";
import { loginWithGoogle } from "@/lib/auth";
import { LogIn } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = () => {
    loginWithGoogle(); // dummy for now
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side – Illustration or Branding */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-100 via-indigo-100 to-white px-10 py-20">
        <Image
          src="/assets/illustration.svg"
          alt="Interview prep illustration"
          width={500}
          height={500}
          className="w-sm md:w-xl "
        />
        <h2 className="text-2xl font-bold text-purple-700 mt-6 text-center">
          Crack Interviews with Confidence 🚀
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-sm">
          Practice mock interviews with AI and level up your career today.
        </p>
      </div>

      {/* Right Side – Login Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white dark:bg-gray-900 px-6 sm:px-12 py-20">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl px-8 py-10 space-y-6 text-center border border-gray-100 dark:border-gray-800">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Welcome to PrepMate AI
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base">
            Sign in with Google to begin your personalized interview prep
            journey.
          </p>

          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 px-6 py-5 text-base font-medium border border-purple-600 text-purple-600 hover:bg-purple-50 transition rounded-xl"
          >
            <LogIn className="w-5 h-5" />
            Continue with Google
          </Button>

          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our{" "}
            <span className="underline cursor-pointer">Terms</span> and{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </main>
  );
}
