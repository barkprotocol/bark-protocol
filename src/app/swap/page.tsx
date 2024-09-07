"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartBarIcon,
  ExchangeIcon,
  RefreshCcwIcon,
  DollarSignIcon,
  AppStoreIcon,
} from "lucide-react";
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

// Array of swap-related action cards with title, href, description, and icon
const actionCards = [
  {
    title: "Token Swap",
    href: "/swap/token",
    description: "Swap your tokens easily with our seamless token swap feature.",
    icon: <ChartBarIcon className="w-8 h-8" />,
    badge: "New",
  },
  {
    title: "Liquidity Pools",
    href: "/swap/liquidity",
    description: "Provide liquidity to earn rewards and enhance swap options.",
    icon: <ExchangeIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Swap History",
    href: "/swap/history",
    description: "View your past swap transactions and details.",
    icon: <RefreshCcwIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Fees and Rates",
    href: "/swap/fees",
    description: "Understand the fees and rates associated with token swaps.",
    icon: <DollarSignIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Swap Application",
    href: "/swap/application",
    description: "Access the full-featured Swap Application to manage your swaps effectively.",
    icon: <AppStoreIcon className="w-8 h-8" />,
    badge: "New",
  },
];

export default function SwapPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="swap-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Effortless Token Swaps
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Our token swap feature allows you to easily exchange tokens with competitive rates and minimal fees. Explore our various swap options and liquidity pools to get the most out of your tokens.
          </p>
          <div className="flex gap-4">
            <Link href="/swap/token">
              <a className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
                Start Swapping
              </a>
            </Link>
          </div>
        </section>
      </HeroSection>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Swap Features
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Explore Our Token Swap Features
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Discover the advantages of our token swap system. From token exchanges to liquidity pools, we offer a range of features to enhance your trading experience.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((item, key) => (
            <Link key={key} href={item.href}>
              <a
                aria-label={item.title}
                className="group"
              >
                <Card className="group-hover:border-sand transition-all duration-300 border-2 rounded-lg shadow-md hover:shadow-lg dark:border-white dark:hover:border-sand h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                      {item.icon}
                      <span className="block font-semibold group-hover:text-sand">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="ml-2 inline-block rounded-full bg-green px-2 py-1 text-xs font-medium text-white">
                          {item.badge}
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-lightGrey dark:text-sand">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
