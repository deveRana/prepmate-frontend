"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const topicSuggestions: Record<string, Record<string, string[]>> = {
  Frontend: {
    "0-1 years": ["HTML/CSS", "JavaScript", "React Basics", "Behavioral"],
    "1-2 years": ["React", "State Management", "System Design", "Behavioral"],
    "2-4 years": [
      "Advanced React",
      "Performance",
      "System Design",
      "Behavioral",
    ],
    "5+ years": ["Architecture", "Leadership", "System Design", "Behavioral"],
  },
  Backend: {
    "0-1 years": ["APIs", "DB Basics", "Node.js", "Behavioral"],
    "1-2 years": ["DB Optimization", "Caching", "System Design"],
    "2-4 years": ["Scalability", "Queues", "Design Patterns"],
    "5+ years": ["Architecture", "Leadership", "System Design"],
  },
  DevOps: {
    "0-1 years": ["CI/CD Basics", "Linux", "Containers"],
    "1-2 years": ["Docker", "K8s Basics", "Monitoring"],
    "2-4 years": ["Kubernetes", "Infra as Code", "Security"],
    "5+ years": ["Cloud Architecture", "DevSecOps", "Scaling"],
  },
  "Data Engineer": {
    "0-1 years": ["SQL", "Python", "ETL Basics"],
    "1-2 years": ["Data Pipelines", "Airflow", "Cloud"],
    "2-4 years": ["Big Data", "Spark", "System Design"],
    "5+ years": ["Architecture", "Streaming Systems", "Leadership"],
  },
};

export default function InterviewPage() {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (role && level) {
      const suggested = topicSuggestions[role]?.[level] || [];
      setTopics(suggested);
    } else {
      setTopics([]);
    }
  }, [role, level]);

  const toggleTopic = (topic: string) => {
    setTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const startInterview = () => {
    const query = new URLSearchParams({
      role,
      level,
      topics: topics.join(","),
    }).toString();
    router.push(`/interview/session?${query}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white px-6 py-10">
      <section className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Ready for your next mock interview? 🎤
          </h1>
          <p className="text-gray-600">
            Select your preferences and start practicing with confidence.
          </p>
        </div>

        {/* Interview Config Form */}
        <Card className="shadow-md rounded-xl">
          <CardContent className="p-6 space-y-6">
            {/* Role */}
            <div>
              <Label className="block mb-2 text-sm font-medium text-gray-700">
                Select Role
              </Label>
              <Select onValueChange={setRole}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Frontend">Frontend</SelectItem>
                  <SelectItem value="Backend">Backend</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Data Engineer">Data Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Experience */}
            <div>
              <Label className="block mb-2 text-sm font-medium text-gray-700">
                Experience
              </Label>
              <Select onValueChange={setLevel}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1 years">0-1 years</SelectItem>
                  <SelectItem value="1-2 years">1-2 years</SelectItem>
                  <SelectItem value="2-4 years">2-4 years</SelectItem>
                  <SelectItem value="5+ years">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Topics */}
            <div>
              <Label className="block mb-2 text-sm font-medium text-gray-700">
                Choose Topics
              </Label>
              {role && level ? (
                <div className="grid grid-cols-2 gap-3">
                  {(topicSuggestions[role]?.[level] || []).map((topic) => (
                    <label
                      key={topic}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <Checkbox
                        checked={topics.includes(topic)}
                        onCheckedChange={() => toggleTopic(topic)}
                      />
                      {topic}
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  Select role and experience to see topics.
                </p>
              )}
            </div>

            {/* Start Interview Button */}
            <div className="pt-4 text-center">
              <Button
                className="px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                onClick={startInterview}
                disabled={!role || !level || topics.length === 0}
              >
                Start Interview
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
