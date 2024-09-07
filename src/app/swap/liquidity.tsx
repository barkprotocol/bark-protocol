"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarIcon, ExchangeIcon, RefreshCcwIcon, DollarSignIcon, AppStoreIcon } from "lucide-react";
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

export default function LiquidityPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [liquidityPools, setLiquidityPools] = useState<any[]>([]);

  useEffect(() => {
    const fetchLiquidityPools = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/liquidity-pools');
        if (!response.ok) {
          throw new Error('Failed to fetch liquidity pools.');
        }
        const data = await response.json();
        setLiquidityPools(data.pools);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching liquidity pools:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLiquidityPools();
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
            Liquidity Pools
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Provide liquidity to earn rewards and enhance swap options. Manage your liquidity pools and monitor your contributions here.
          </p>
        </section>
      </HeroSection>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Liquidity Pools
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Manage and Monitor Your Liquidity Pools
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Access information about your liquidity pools, view rewards, and adjust your liquidity contributions to optimize your earnings.
          </p>
        </div>

        {/* Loading and Error Handling */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">Loading liquidity pools...</p>
          </div>
        )}
        {error && (
          <div className="text-center py-8">
            <p className="text-lg text-red-500 dark:text-red-400">Error: {error}</p>
          </div>
        )}
        {liquidityPools.length === 0 && !loading && !error && (
          <div className="text-center py-8">
            <p className="text-lg text-gray-500 dark:text-gray-400">No liquidity pools available.</p>
          </div>
        )}
        
        {/* Display liquidity pools */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {liquidityPools.map((pool, key) => (
            <Card key={key} className="border-2 rounded-lg shadow-md dark:border-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <ChartBarIcon className="mr-2 h-5 w-5 text-green" />
                  {pool.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-lightGrey dark:text-sand">{pool.description}</p>
                <div className="mt-4">
                  <Link href={`/swap/liquidity/${pool.id}`}>
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
