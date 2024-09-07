"use client";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProposalCard } from "@/components/ui/proposal-card";

// Mock data for proposals, replace with actual data fetching
const proposals = [
  {
    id: 1,
    title: "Proposal to Increase Staking Rewards",
    description: "This proposal suggests increasing the rewards for staking BARK tokens to incentivize more participation.",
    status: "Open", // Could be 'Open', 'Closed', or 'In Progress'
    createdAt: "2024-09-01",
  },
  {
    id: 2,
    title: "Update Governance Voting Mechanism",
    description: "This proposal aims to revise the current voting mechanism to ensure fairer and more transparent governance.",
    status: "In Progress",
    createdAt: "2024-08-15",
  },
  // Add more proposals as needed
];

const GovernancePage: FC = () => {
  return (
    <div className="container max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white mb-8">
        Governance
      </h1>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
        Participate in shaping the future of the Bark Protocol by voting on proposals, submitting your own suggestions, and engaging with the community.
      </p>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
          Current Proposals
        </h2>
        <div className="space-y-4">
          {proposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Button variant="primary">
          <a href="/submit-proposal">Submit a Proposal</a>
        </Button>
      </div>
    </div>
  );
};

export default GovernancePage;
