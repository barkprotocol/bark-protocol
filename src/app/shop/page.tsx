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
  green: "#10B981",
  sand: "#CBB5A7",
};

// Array of products available in the shop
const products = [
  {
    title: "Exclusive BARK NFT",
    href: "/shop/nft",
    description: "Own a unique BARK NFT with exclusive features and benefits.",
    price: "$150",
    badge: "New",
  },
  {
    title: "BARK Merchandise",
    href: "/shop/merch",
    description: "Get your hands on official BARK merchandise, including apparel and accessories.",
    price: "$30",
    badge: "Popular",
  },
  {
    title: "BARK Token",
    href: "/shop/token-pack",
    description: "Purchase a pack of BARK tokens to use within our ecosystem.",
    price: "$100",
    badge: "Essential",
  },
  {
    title: "Staking Boost",
    href: "/shop/staking-boost",
    description: "Enhance your staking rewards with our special boost package.",
    price: "$200",
    badge: "Exclusive",
  },
  {
    title: "Custom NFT Art",
    href: "/shop/custom-nft-art",
    description: "Commission custom NFT artwork from talented artists.",
    price: "$500",
    badge: "Limited",
  },
  {
    title: "BARK VIP Access",
    href: "/shop/vip-access",
    description: "Gain VIP access to exclusive BARK events and features.",
    price: "$300",
    badge: "VIP",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="shop-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Welcome to the BARK Shop
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Explore our exclusive range of products and NFTs. From unique BARK NFTs and merchandise to special token packs and custom art, find everything you need to enhance your BARK experience. Shop now and enjoy the benefits of being part of the BARK community.
          </p>
          <div className="flex gap-4">
            <Link href="/shop" className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
              Start Shopping
            </Link>
          </div>
        </section>
      </HeroSection>

      {/* Products Section */}
      <section
        id="products"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Our Products
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Discover Unique Offers
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Browse through our collection of exclusive products and special offers. Each item is crafted to provide you with the best experience and value.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, key) => (
            <Link key={key} href={item.href} className="group">
              <Card className="group-hover:border-sand transition-colors duration-300 border-2 rounded-lg shadow-md hover:shadow-lg dark:border-white dark:hover:border-sand h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {item.title}
                    {item.badge && (
                      <span className="ml-2 inline-block rounded-full bg-green px-2 py-1 text-xs font-medium text-white">
                        {item.badge}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-lightGrey dark:text-sand">{item.description}</p>
                  <p className="text-xl font-semibold text-black dark:text-white">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
