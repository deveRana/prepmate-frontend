"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter(); // ✅ initialize router
  const [userName, setUserName] = useState("User");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUserName(parsed.name || "User");
      } catch {
        setUserName("User");
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white px-6 py-10 space-y-12">
      {/* Header Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Welcome, <span className="text-purple-600">{userName}</span> 👋
        </h1>
        <p className="text-gray-600 text-lg">
          Here's your personalized dashboard overview
        </p>
      </section>

      {/* Card Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stats Cards */}
        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500 mb-2">Scheduled Interviews</p>
            <p className="text-3xl font-semibold text-indigo-600">3</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500 mb-2">Mock Sessions</p>
            <p className="text-3xl font-semibold text-purple-600">2</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6">
            <p className="text-sm text-gray-500 mb-2">Profile Completion</p>
            <p className="text-3xl font-semibold text-green-600">80%</p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="md:col-span-2 bg-white shadow-md rounded-2xl">
          <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Start New Interview
              </h2>
              <p className="text-sm text-gray-600">
                Launch a new mock interview and test your readiness.
              </p>
            </div>
            <Button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6"
              onClick={() => router.push("/interview")} // ✅ redirect on click
            >
              Start Now
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md rounded-2xl">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Update Your Profile
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Complete your profile to improve AI recommendations.
            </p>
            <Button variant="outline">Go to Profile</Button>
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity Section */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="bg-white rounded-xl shadow-sm p-6 text-sm text-gray-600 border border-gray-200">
          No recent activity found. Start a new interview to see updates here.
        </div>
      </section>
    </main>
  );
}
