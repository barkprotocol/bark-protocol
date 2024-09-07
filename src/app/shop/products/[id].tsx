"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBagIcon } from "lucide-react";
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

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch product data from API or backend service
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data))
        .catch(error => console.error("Error fetching product data:", error));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <section
          id="product-hero"
          className="container flex flex-col items-center space-y-6 py-16 text-center dark:bg-black dark:text-white md:py-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white">
            {product.name}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-grey sm:text-xl sm:leading-8">
            {product.description}
          </p>
          <p className="text-2xl font-semibold text-black dark:text-white">
            {product.price}
          </p>
          <Button
            className={cn(buttonVariants({ size: "lg", variant: "primary" }))}
          >
            Add to Cart
          </Button>
        </section>
      </HeroSection>

      {/* Product Details Section */}
      <section
        id="product-details"
        className="container py-8 dark:bg-black dark:text-white md:py-12 lg:py-24"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border-2 rounded-lg shadow-md dark:border-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-semibold">
                <ShoppingBagIcon className="w-8 h-8" />
                <span className="block font-semibold text-black dark:text-white">
                  {product.name}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lightGrey dark:text-sand">{product.description}</p>
              <p className="text-lg font-semibold text-black dark:text-white">
                {product.price}
              </p>
              <Button
                className={cn(buttonVariants({ size: "lg", variant: "primary" }))}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
          {/* Add more product details or related content here */}
        </div>
      </section>
    </>
  );
}
