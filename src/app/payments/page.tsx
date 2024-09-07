"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CreditCardIcon,
  DollarSignIcon,
  ShoppingCartIcon,
  PlugIcon,
} from "lucide-react";
import HeroSection from "@/components/ui/hero-section";
import QRCode from 'qrcode.react';
import { initiatePayment } from '@/utils/solanaPay';

// Define color variables for consistent styling
const colors = {
  grey: "#6B7280",
  lightGrey: "#9CA3AF",
  white: "#FFFFFF",
  black: "#000000",
  green: "#10B981",
  blue: "#3B82F6",
  sand: "#D4B88C", // Updated sand color
  orange: "#FF6F00", // Updated orange color
};

const actionCards = [
  {
    title: "Integrate MedusaJS",
    href: "/payments/medusajs",
    description: "Integrate the headless commerce platform MedusaJS into your project for flexible payment solutions.",
    icon: <CreditCardIcon className="w-8 h-8" />,
    badge: "New",
  },
  {
    title: "Setup WooCommerce",
    href: "/payments/woocommerce",
    description: "Set up WooCommerce on your WordPress site to manage payments and products with ease.",
    icon: <DollarSignIcon className="w-8 h-8" />,
    badge: "Essential",
  },
  {
    title: "Configure Shopify",
    href: "/payments/shopify",
    description: "Configure Shopify to handle your e-commerce payments and grow your online store.",
    icon: <ShoppingCartIcon className="w-8 h-8" />,
    badge: "Popular",
  },
  {
    title: "Payment Gateways Overview",
    href: "/payments/gateways",
    description: "Learn about various payment gateways and how to integrate them into your application.",
    icon: <PlugIcon className="w-8 h-8" />,
    badge: "Essential",
  },
];

const PaymentsPage: React.FC = () => {
  const [paymentURL, setPaymentURL] = useState<string | null>(null);
  const [productId, setProductId] = useState<string>('');
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCreatePayment = async () => {
    setLoading(true);
    const result = await initiatePayment(productId, totalPrice);
    setLoading(false);

    if (result.success) {
      setPaymentURL(result.qrCodeURL || null);
      setStatus(result.message || 'Payment initiated successfully.');
    } else {
      setStatus(result.message || 'Failed to initiate payment.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="payments-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            Seamless Payment Integrations
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            Enhance your e-commerce experience with our comprehensive payment solutions. Explore how you can integrate MedusaJS, WooCommerce, and Shopify into your projects to streamline transactions and manage payments efficiently.
          </p>
          <div className="flex gap-4">
            <Link href="/payments/integrate">
              <a className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
                Get Started
              </a>
            </Link>
          </div>
        </section>
      </HeroSection>

      {/* Payment Request Section */}
      <section
        id="payment-request"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center mb-8">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Create Payment Request
          </h3>
        </div>

        {/* Payment Input */}
        <div className="text-center mb-8">
          <div className="mb-4">
            <label htmlFor="productId" className="block text-sm font-medium mb-2">Product ID</label>
            <input
              type="text"
              id="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="totalPrice" className="block text-sm font-medium mb-2">Total Price (SOL)</label>
            <input
              type="number"
              id="totalPrice"
              value={totalPrice}
              onChange={(e) => setTotalPrice(Number(e.target.value))}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
              min="0.01"
              step="0.01"
            />
          </div>
          <button
            onClick={handleCreatePayment}
            className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors mb-4"
            disabled={loading}
          >
            {loading ? 'Creating Payment...' : 'Create Payment Request'}
          </button>
          {paymentURL && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Scan QR Code to Complete Payment</h2>
              <QRCode value={paymentURL} />
            </div>
          )}
          {status && (
            <p className="text-xl mt-4">{status}</p>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white">
            Payment Features
          </h3>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-3xl mx-auto">
          <h4 className="text-3xl sm:text-4xl font-semibold text-sand">
            Explore Our Payment Solutions
          </h4>
          <p className="text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Discover the benefits of integrating various payment solutions into your projects. Our platform supports a range of options to ensure smooth transactions and efficient payment management.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((item, key) => (
            <Link key={key} href={item.href}>
              <a className="group">
                <Card className={`group-hover:border-sand transition-colors duration-300 border-2 rounded-lg shadow-md hover:shadow-lg dark:border-white dark:hover:border-sand h-full`}>
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
};

export default PaymentsPage;
