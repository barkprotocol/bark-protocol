"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/ui/hero-section";

// Define color variables for consistent styling
const colors = {
  grey: "#6B7280",
  lightGrey: "#9CA3AF",
  white: "#FFFFFF",
  black: "#000000",
  green: "#10B981",
  blue: "#3B82F6",
  sand: "#CBB5A7",
};

export default function HistoryPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [swapHistory, setSwapHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchSwapHistory = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/swap-history');
        if (!response.ok) {
          throw new Error('Failed to fetch swap history.');
        }
        const data = await response.json();
        setSwapHistory(data.history);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching swap history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSwapHistory();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="swap-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Swap History
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            View your past swap transactions and details. Keep track of your swap activities and review historical data.
          </p>
        </section>
      </HeroSection>

      {/* History Section */}
      <section
        id="history"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Your Swap Transactions
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Track Your Swap History
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Access and review your previous swap transactions. Stay informed about your swap activities and performance.
          </p>
        </div>

        {/* Loading and Error Handling */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">Loading swap history...</p>
          </div>
        )}
        {error && (
          <div className="text-center py-8">
            <p className="text-lg text-red-500 dark:text-red-400">Error: {error}</p>
          </div>
        )}
        {swapHistory.length === 0 && !loading && !error && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">No swap history available.</p>
          </div>
        )}
        
        {/* Display swap history */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {swapHistory.map((transaction, key) => (
            <Card key={key} className="border-2 rounded-lg shadow-md dark:border-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{transaction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-lightGrey dark:text-sand">Date: {transaction.date}</p>
                <p className="text-sm text-lightGrey dark:text-sand">Amount: {transaction.amount}</p>
                <div className="mt-4">
                  <Link href={`/swap/history/${transaction.id}`}>
                    <a className={cn(buttonVariants({ size: "sm", variant: "outline" }))}>
                      View Details
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
