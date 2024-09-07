"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  StarIcon,
  LockIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
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

// Array of staking-related action cards with title, href, description, and icon
const actionCards = [
  {
    title: "Start Staking",
    href: "/stake/start",
    description: "Begin staking your NFTs to earn rewards and participate in governance.",
    icon: <StarIcon className="w-8 h-8" />,
    badge: "New",
  },
  {
    title: "Manage Staking",
    href: "/stake/manage",
    description: "View and manage your current staking positions and rewards.",
    icon: <LockIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Staking Rewards",
    href: "/stake/rewards",
    description: "Track and claim your staking rewards and bonuses.",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Staking History",
    href: "/stake/history",
    description: "Review your past staking activities and reward distributions.",
    icon: <TrendingUpIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Community Staking Pools",
    href: "/stake/pools",
    description: "Join community staking pools to maximize your rewards and participate in larger initiatives.",
    icon: <UsersIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Staking FAQ",
    href: "/stake/faq",
    description: "Find answers to frequently asked questions about staking.",
    icon: <ClockIcon className="w-8 h-8" />,
    badge: "Support",
  },
];

export default function StakePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="stake-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Maximize Your Rewards with Staking
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Staking is a powerful way to earn rewards and contribute to the ecosystem. Explore our staking options, manage your positions, and track your rewards with ease. Our platform offers various features to help you get the most out of your staking activities, whether you're a seasoned staker or just starting.
          </p>
          <div className="flex gap-4">
            <Link href="/stake/start">
              <a className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
                Start Staking
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
            Staking Features
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Explore Our Staking Features
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Discover the benefits and functionalities of our staking system, designed to enhance your engagement and reward opportunities within the BARK Protocol.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((item, key) => (
            <Link key={key} href={item.href}>
              <a className="group">
                <Card className="group-hover:border-sand transition-colors duration-300 border-2 rounded-lg shadow-md hover:shadow-lg dark:border-white dark:hover:border-sand h-full">
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
                    <p className="text-lightGrey dark:text-sand">{item.description}</p>
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
