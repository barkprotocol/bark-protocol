import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Ensure `cn` is defined for classNames utility

// Define button variants using CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-black text-white",
        primary: "bg-black-600 text-white hover:bg-black-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        secondary: "bg-sand text-black hover:bg-sand/80",
        ghost: "text-black hover:bg-black hover:text-white",
        link: "text-blue-600 underline hover:text-blue-700",
        dark: "bg-white text-black dark:bg-black dark:text-white", // Dark theme variant
        sand: "bg-sand text-black hover:bg-sand/80", // Sand color variant
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** If true, renders as a `Slot` component instead of a `button`. */
  asChild?: boolean;
  /** Additional class names to be applied to the button. */
  className?: string;
}

/**
 * A customizable button component with support for various variants and sizes.
 * 
 * @param {ButtonProps} props - The properties for the button component.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref to be passed to the button or slot component.
 * @returns {React.ReactElement} The rendered button component.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Component = asChild ? Slot : "button";
    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
