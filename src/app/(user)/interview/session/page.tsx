import { Suspense } from "react";
import InterviewSessionPage from "./InterviewSessionPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading interview session...</div>}>
      <InterviewSessionPage />
    </Suspense>
  );
}
