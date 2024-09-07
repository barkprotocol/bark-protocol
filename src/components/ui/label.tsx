"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define variants for the Label component
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        small: "text-xs",
        medium: "text-sm",
        large: "text-base",
      },
      color: {
        default: "text-gray-700", // Default color for labels
        primary: "text-sand-500", // Primary color variant
        secondary: "text-gray-500", // Secondary color variant
      },
    },
    defaultVariants: {
      size: "medium",
      color: "default",
    },
  }
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

/**
 * Label component using Radix UI's Label and variant styles.
 * 
 * @param {LabelProps} props - The props for the Label component.
 * @param {React.Ref} ref - The ref to forward to the Label component.
 * @returns {JSX.Element} The rendered Label component.
 */
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, size, color, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ size, color }), className)}
      {...props}
    />
  )
);

Label.displayName = "Label";

export { Label };
