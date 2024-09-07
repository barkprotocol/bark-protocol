"use client";

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
  blue: "#3B82F6",
  green: "#10B981",
  sand: "#CBB5A7",
};

export default function TokenomicsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="tokenomics-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            BARK Tokenomics
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Learn about the BARK token's structure, its role within our ecosystem, and how it contributes to the overall growth and sustainability of the BARK Protocol. Explore the distribution strategy, utility, and platform details of BARK.
          </p>
          <div className="flex gap-4">
            <Link href="/stake/start" className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
              Learn More
            </Link>
          </div>
        </section>
      </HeroSection>

      {/* Tokenomics Details Section */}
      <section
        id="tokenomics-details"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            BARK Token Details
          </h3>
        </div>

        {/* Token Details */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Token Symbol: BARK
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The symbol used for our token is <strong>BARK</strong>.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Decimals: 9
            </h4>
            <p className="text-lightGrey dark:text-sand">
              BARK tokens are divisible up to 9 decimal places, allowing for precise transactions and interactions.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Ticker: BARK
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The ticker symbol used in trading and tracking BARK tokens is also <strong>BARK</strong>.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Program: Solana
            </h4>
            <p className="text-lightGrey dark:text-sand">
              BARK is built on the Solana blockchain, leveraging its high-performance capabilities for efficient and scalable transactions.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Platform: Solana
            </h4>
            <p className="text-lightGrey dark:text-sand">
              BARK operates on the Solana platform, utilizing its advanced technology to provide fast and cost-effective transactions.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Utility
            </h4>
            <p className="text-lightGrey dark:text-sand">
              BARK tokens are used for staking, governance, and accessing premium features within the BARK Protocol. They play a key role in incentivizing participation and supporting the platform's growth.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Distribution
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The distribution of BARK tokens is designed to ensure fair allocation across various stakeholders, including the community, development team, and strategic partners. Specific details about the token distribution strategy can be found in our detailed whitepaper.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Token Address
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The address for the BARK token on the Solana blockchain is <strong>2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg</strong>.
            </p>
          </div>
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Program
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The BARK token is managed under the program with address <strong>2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg</strong> on Solana.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
