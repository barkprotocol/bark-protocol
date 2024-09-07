import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="container flex flex-col items-center justify-center space-y-6 py-16 text-center md:py-24 bg-white dark:bg-black"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-black dark:text-white drop-shadow-lg"
      >
        Revolutionize Your Blockchain Experience with BARK
      </h1>
      <p className="max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 sm:text-xl sm:leading-8">
        Experience the full potential of Solana’s speed and security with BARK. Effortlessly manage your assets, engage in governance, and explore innovative solutions designed for the modern blockchain user.
      </p>
      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        <Link 
          href="/get-started" 
          className={cn(
            buttonVariants({ size: "lg", variant: "primary" }), 
            "bg-black text-white hover:bg-gray-700 dark:bg-sand dark:hover:bg-sand/80"
          )}
          aria-label="Get Started"
        >
          Get Started
        </Link>
        <Link 
          href="/learn-more" 
          className={cn(
            buttonVariants({ size: "lg", variant: "outline" }), 
            "border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
          aria-label="Discover Features"
        >
          Discover Features
        </Link>
      </div>
    </section>
  );
}
