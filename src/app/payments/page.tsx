"use client";

import { useState } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileTextIcon,
  PayIcon,
  CoinsIcon,
  GiftIcon,
  ImageIcon,
  ImagesIcon,
} from "lucide-react";
import HeroSection from "@/components/ui/hero-section";

// Define color variables for consistent styling
const colors = {
  grey: "#6B7280",
  lightGrey: "#9CA3AF",
  white: "#FFFFFF",
  black: "#000000",
  orange: "#F97316",
  sand: "#CBB5A7",
};

// Array of payment-related action cards with title, href, description, and icon
const actionCards = [
  {
    title: "Send SPL Tokens",
    href: "/payments/send-tokens",
    description: "Send SPL tokens quickly and securely to any wallet address.",
    icon: <PayIcon className="w-8 h-8" />,
    badge: "New",
  },
  {
    title: "Track Transactions",
    href: "/payments/track",
    description: "Track the status of your transactions on the Solana blockchain.",
    icon: <FileTextIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Payment History",
    href: "/payments/history",
    description: "View and manage your payment history in one place.",
    icon: <CoinsIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Set Up Recurring Payments",
    href: "/payments/recurring",
    description: "Automate your payments with recurring payment setups.",
    icon: <GiftIcon className="w-8 h-8" />,
    badge: "New",
  },
  {
    title: "Payment Notifications",
    href: "/payments/notifications",
    description: "Receive notifications for all your payment activities.",
    icon: <ImageIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Integrate Payment API",
    href: "/payments/integrate-api",
    description: "Integrate our payment API into your application for seamless transactions.",
    icon: <ImagesIcon className="w-8 h-8" />,
    badge: "Popular",
  },
];

export default function PaymentsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="payments-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Simplify Your Payments
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Discover the ease of managing payments with our cutting-edge Solana-based solutions. From sending SPL tokens to tracking transactions, our platform offers a seamless and secure experience. Set up recurring payments, stay informed with real-time notifications, and integrate our API for effortless payment management. Whether you're an individual or a business, we provide the tools you need to handle transactions efficiently and with confidence.
          </p>
          <div className="flex gap-4">
            <Link href="/payments" className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
              Explore Payments
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
            Payments Features
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Explore Our Key Payment Features
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Discover how our payment solutions can streamline your transactions and enhance your financial management on Solana.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((item, key) => (
            <Link key={key} href={item.href} className="group">
              <Card className="group-hover:border-sand transition-colors duration-300 border-2 rounded-lg shadow-md hover:shadow-lg dark:border-white dark:hover:border-sand h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                    {item.icon}
                    <span className="block font-semibold group-hover:text-sand">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="ml-2 inline-block rounded-full bg-orange px-2 py-1 text-xs font-medium text-white">
                        {item.badge}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lightGrey dark:text-sand">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
