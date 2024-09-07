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

export default function FeesPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fees, setFees] = useState<any[]>([]);

  useEffect(() => {
    const fetchFees = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/fees');
        if (!response.ok) {
          throw new Error('Failed to fetch fees.');
        }
        const data = await response.json();
        setFees(data.fees);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching fees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFees();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="fees-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Fees and Rates
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Understand the fees and rates associated with token swaps. Get detailed information on transaction costs and trading fees.
          </p>
        </section>
      </HeroSection>

      {/* Fees Section */}
      <section
        id="fees"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Swap Fees and Rates
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Detailed Fee Information
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Learn about the various fees involved in token swaps, including trading fees, network fees, and any additional costs.
          </p>
        </div>

        {/* Loading and Error Handling */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">Loading fees information...</p>
          </div>
        )}
        {error && (
          <div className="text-center py-8">
            <p className="text-lg text-red-500 dark:text-red-400">Error: {error}</p>
          </div>
        )}
        {fees.length === 0 && !loading && !error && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">No fee information available.</p>
          </div>
        )}
        
        {/* Display fees information */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fees.map((fee, key) => (
            <Card key={key} className="border-2 rounded-lg shadow-md dark:border-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{fee.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-lightGrey dark:text-sand">Rate: {fee.rate}</p>
                <p className="text-sm text-lightGrey dark:text-sand">Description: {fee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
