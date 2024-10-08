"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items = [], children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  const handleMenuToggle = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-6 md:gap-10">
      {/* Logo and Site Name for Desktop */}
      <Link
        href="/"
        className="hidden items-center space-x-2 text-lg md:flex hover:text-foreground/80"
        aria-label={`Go to ${siteConfig.name}`}
      >
        <Image
          src={
            siteConfig.logoUrl ||
            "https://ucarecdn.com/0c2a1b21-f836-4343-9d35-19386c7f7f4d/barkprotocoldark.svg"
          }
          alt={`${siteConfig.name} Logo`}
          width={125}
          height={125}
          className="rounded-full"
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {/* Desktop Navigation */}
      {items.length > 0 && (
        <nav className="hidden gap-2 md:flex">
          {items.map((item) => (
            <Button
              key={item.href}
              variant="link"
              asChild
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors",
                  item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
                aria-disabled={item.disabled}
                aria-current={item.href.startsWith(`/${segment}`) ? "page" : undefined}
              >
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>
      )}

      {/* Mobile Menu Toggle */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={handleMenuToggle}
        aria-label={showMobileMenu ? "Close menu" : "Open menu"}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="sr-only">Menu</span>
      </button>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && items.length > 0 && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
