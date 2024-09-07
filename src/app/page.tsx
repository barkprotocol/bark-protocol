"use client";

import Link from "next/link";
import HeroSection from "@/components/ui/hero-section";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileTextIcon,
  GiftIcon,
  CreditCardIcon,
  CoinsIcon,
  ImageIcon,
  ImagesIcon,
  HeartIcon,
  TrophyIcon,
  VoteIcon,
  UserIcon,
  ShoppingCartIcon,
  ChartBarIcon
} from "lucide-react";
import { FaTwitter, FaTelegram, FaDiscord, FaMedium, FaGithub } from "react-icons/fa"; // Social icons

// Define color variables for consistent styling
const colors = {
  grey: "#6B7280", // Modern grey
  lightGrey: "#9CA3AF", // Lighter gray for text
  white: "#FFFFFF", // Pure white
  black: "#000000", // Pure black
  orange: "#F97316", // Modern orange
  sand: "#CBB5A7", // Sand color
};

// Array of action cards with title, href, description, and icon
const actionCards = [
  {
    title: "Payments",
    href: "/payments",
    description: "Send and record messages directly on the Solana blockchain using SPL Memo.",
    icon: <CreditCardIcon className="w-8 h-8 text-sand" />,
    badge: "New",
  },
  {
    title: "Staking",
    href: "/stake",
    description: "Stake NFT or SPL tokens and earn rewards from trusted validators.",
    icon: <GiftIcon className="w-8 h-8 text-sand" />,
    badge: "Popular",
  },
  {
    title: "Transactions",
    href: "/transfer-token",
    description: "Transfer SPL tokens and NFTs between wallets securely.",
    icon: <CoinsIcon className="w-8 h-8 text-sand" />,
    badge: "Essential",
  },
  {
    title: "NFT",
    href: "/mint",
    description: "Create and mint unique NFTs on Solana.",
    icon: <ImageIcon className="w-8 h-8 text-sand" />,
    badge: "New",
  },
  {
    title: "Brand Shop",
    href: "/shop",
    description: "Discover exclusive BARK brand and streetwear, available for purchase with USDC, SOL, and BARK payments.",
    icon: <ShoppingCartIcon className="w-8 h-8 text-sand" />,
    badge: "Essential",
  },
  {
    title: "Donate",
    href: "/donate",
    description: "Support meaningful causes via Solana donations.",
    icon: <HeartIcon className="w-8 h-8 text-sand" />,
    badge: "Support",
  },
  {
    title: "Rewards",
    href: "/claim",
    description: "Easily claim your rewards.",
    icon: <TrophyIcon className="w-8 h-8 text-sand" />,
    badge: "New",
  },
  {
    title: "Governance",
    href: "/vote",
    description: "Participate in governance by voting on proposals in the BARK Protocol.",
    icon: <VoteIcon className="w-8 h-8 text-sand" />,
    badge: "Governance",
  },
  {
    title: "Trading",
    href: "/swap",
    description: "Engage in trading and swapping of SPL tokens seamlessly, enhancing your trading experience with advanced features.",
    icon: <ChartBarIcon className="w-8 h-8 text-sand" />,
    badge: "Advanced",
  },
  {
    title: "Membership",
    href: "/membership",
    description: "Access BARK Club membership and treasury benefits.",
    icon: <UserIcon className="w-8 h-8 text-sand" />,
    badge: "Essential",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
          About
        </h3>
        <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
          We harness the power of Solana’s blockchain to offer innovative solutions for managing digital assets, marketplace, staking NFTs, and more.
        </p>
        <div className="flex gap-4">
          <Link href="/shop" className={cn(buttonVariants({ size: "lg", variant: "default" }))}>
            Shop
          </Link>
          <Link href="https://swap.barkprotocol.net" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
            Trading
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Features
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h5 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white">
            Discover Our Premier Features
          </h5>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8 mt-4">
            Dive into a range of innovative solutions tailored to elevate your experience on Solana. From intuitive payment systems and NFTs to rewarding staking opportunities and impactful governance, explore how our platform enhances every aspect of your blockchain journey.
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

        {/* Social Links */}
        <div className="text-center md:max-w-3xl mx-auto mt-12">
          <h5 className="text-2xl font-semibold text-lightGrey dark:text-sand">
            Follow Us
          </h5>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="link" asChild>
              <Link href="https://x.com/bark_protocol" target="_blank" className="text-sand">
                <FaTwitter className="w-6 h-6" />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="https://telegram.com/t.me/bark-protocol" target="_blank" className="text-sand">
                <FaTelegram className="w-6 h-6" />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="https://discord.com/invite/bark-protocol" target="_blank" className="text-sand">
                <FaDiscord className="w-6 h-6" />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="https://medium.com/@bark_protocol" target="_blank" className="text-sand">
                <FaMedium className="w-6 h-6" />
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="https://github.com/bark-protocol" target="_blank" className="text-sand">
                <FaGithub className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
