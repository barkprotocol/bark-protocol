"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HelpCircleIcon,
  SearchIcon,
  InfoIcon,
  ShieldQuestionIcon,
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

// Array of FAQ-related action cards with title, href, description, and icon
const actionCards = [
  {
    title: "General Questions",
    href: "/faq/general",
    description: "Find answers to common questions about our platform, its features, and more.",
    icon: <HelpCircleIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Technical Support",
    href: "/faq/technical",
    description: "Get help with technical issues, troubleshooting, and platform integrations.",
    icon: <SearchIcon className="w-8 h-8" />,
    badge: "Support",
  },
  {
    title: "Account Management",
    href: "/faq/account",
    description: "Learn how to manage your account, including account settings and security.",
    icon: <InfoIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Security & Privacy",
    href: "/faq/security",
    description: "Understand our security measures and privacy policies to protect your data.",
    icon: <ShieldQuestionIcon className="w-8 h-8" />,
    badge: "Important",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="faq-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Have questions? We have answers. Browse our FAQs to find information on common queries, technical support, account management, and more.
          </p>
          <div className="flex gap-4">
            <Link href="/faq">
              <a className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
                View All FAQs
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
            FAQ Categories
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Explore Our FAQ Categories
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Find the information you need quickly by exploring our categorized FAQ sections.
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
