"use client";

import Link from 'next/link';
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Register required components for Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Define color variables for consistent styling
const colors = {
  grey: "#6B7280",
  lightGrey: "#9CA3AF",
  white: "#FFFFFF",
  black: "#000000",
  blue: "#3B82F6",
  green: "#10B981",
  sand: "#CBB5A7",
  orange: "#F59E0B",
};

// Pie chart data
const data = {
  labels: ['Community', 'Development Team', 'Strategic Partners', 'Reserve', 'Others'],
  datasets: [{
    data: [35, 25, 15, 15, 10],
    backgroundColor: [
      colors.blue,
      colors.green,
      colors.grey,
      colors.sand,
      colors.orange,
    ],
    borderColor: colors.white,
    borderWidth: 1,
  }],
};

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function TokenomicsPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    // Simulate form submission
    console.log("Form submitted:", data);
    // TODO: Handle actual form submission here
  };

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
          <p className="max-w-2xl text-lg leading-relaxed text-grey dark:text-sand sm:text-xl sm:leading-8">
            Learn about the BARK token's structure, its role within our ecosystem, and how it contributes to the overall growth and sustainability of the BARK Protocol. Explore the distribution strategy, utility, and platform details of BARK.
          </p>
          <div className="flex gap-4">
            <Link href="/stake/start">
              <a className={cn(buttonVariants({ size: "lg", variant: "primary" }))}>
                Learn More
              </a>
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
          {/* Token details sections */}
          <div className="text-lg leading-relaxed text-grey dark:text-sand">
            <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
              Token Symbol: BARK
            </h4>
            <p className="text-lightGrey dark:text-sand">
              The symbol used for our token is <strong>BARK</strong>.
            </p>
          </div>
          {/* Other details */}
        </div>

        {/* Pie Chart Section */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
            Token Distribution
          </h3>
          <div className="max-w-md mx-auto">
            <Pie data={data} options={{ responsive: true, plugins: { tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }} />
          </div>
        </div>

        {/* Allocations Section */}
        <section id="allocations" className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
              Token Allocations
            </h3>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-grey dark:text-sand">
              The BARK token is allocated across various categories to support the ecosystem and ensure a balanced growth strategy. Here’s a breakdown of the key allocations:
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed text-grey dark:text-sand space-y-6">
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">Community (35%)</h4>
              <p className="text-lightGrey dark:text-sand">
                Allocated for community engagement, rewards, and incentives to foster growth and participation within the BARK ecosystem.
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">Development Team (25%)</h4>
              <p className="text-lightGrey dark:text-sand">
                Reserved for the core development team to fund ongoing development, maintenance, and improvements to the BARK Protocol.
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">Strategic Partners (15%)</h4>
              <p className="text-lightGrey dark:text-sand">
                Set aside for strategic partnerships and collaborations that contribute to the expansion and success of the protocol.
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">Reserve (15%)</h4>
              <p className="text-lightGrey dark:text-sand">
                Maintained as a reserve to handle unforeseen circumstances and ensure the stability of the BARK ecosystem.
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">Others (10%)</h4>
              <p className="text-lightGrey dark:text-sand">
                Allocated for miscellaneous expenses, future development, and other needs that arise within the ecosystem.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* Info Form Section */}
      <section
        id="info-form"
        className="container space-y-12 py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
            Inquire About Tokenomics
          </h3>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-grey dark:text-sand mb-6">
            Have questions about the BARK tokenomics? Fill out the form below to get in touch with us.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-black dark:text-white">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-2 border border-grey dark:border-sand rounded dark:bg-black dark:text-white"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-black dark:text-white">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
                className="w-full p-2 border border-grey dark:border-sand rounded dark:bg-black dark:text-white"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-black dark:text-white">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-2 border border-grey dark:border-sand rounded dark:bg-black dark:text-white"
                rows={4}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </div>
            <div className="text-center">
              <Button type="submit" disabled={isSubmitting || isSubmitSuccessful} variant="primary">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
