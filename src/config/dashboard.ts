import { DashboardConfig } from "@/types";

// Define available icons to ensure consistency
const icons = {
  collection: "collection",
  mint: "mint",
  donate: "donate",
  vote: "vote",
  stake: "stake",
  membership: "membership",
  settings: "settings",
};

// Define the dashboard configuration
export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Home",
      href: "/",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "About",
      href: "/dashboard/about",
      icon: icons.collection,
    },
    {
      title: "Features",
      href: "/dashboard/features",
      icon: icons.mint,
    },
    {
      title: "Defi",
      href: "/dashboard/defi",
      icon: icons.donate,
    },
    {
      title: "Tokenomics",
      href: "/dashboard/tokenomics",
      icon: icons.vote,
    },
    {
      title: "Swap",
      href: "/dashboard/swap",
      icon: icons.stake,
    },
    {
      title: "Governance",
      href: "/dashboard/governance",
      icon: icons.membership,
    },
    {
      title: "Membership",
      href: "/dashboard/membership",
      icon: icons.membership,
    },
    {
      title: "FAQ",
      href: "/dashboard/faq",
      icon: icons.settings,
    },
  ],
};
