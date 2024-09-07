import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Proposal {
  id: number;
  title: string;
  description: string;
  status: "Open" | "Closed" | "In Progress";
  createdAt: string;
}

interface ProposalCardProps {
  proposal: Proposal;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ proposal }) => {
  const formattedDate = new Date(proposal.createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
        {proposal.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {proposal.description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>Created on: {formattedDate}</span>
        <span
          className={cn(
            "px-2 py-1 rounded-full text-white",
            proposal.status === "Open" && "bg-green-500",
            proposal.status === "Closed" && "bg-red-500",
            proposal.status === "In Progress" && "bg-yellow-500"
          )}
        >
          {proposal.status}
        </span>
      </div>
      <div className="mt-4 text-center">
        <Button variant="secondary">
          <a href={`/proposals/${proposal.id}`} aria-label={`View details of ${proposal.title}`}>
            View Details
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProposalCard;
