import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-semibold dark:text-white"
      >
        {question}
        {isOpen ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQPage: FC = () => {
  const faqs = [
    {
      question: "What is Bark Protocol?",
      answer: "Bark Protocol is a platform designed for managing digital assets on the Solana blockchain, offering tools for NFT creation, payments, staking, and governance."
    },
    {
      question: "How do I connect my wallet?",
      answer: "To connect your wallet, click the 'Connect Wallet' button located in the header and follow the instructions for your preferred wallet provider."
    },
    {
      question: "What is the BARK token?",
      answer: "The BARK token is the native utility token of the Bark Protocol, used for various functions within the ecosystem such as governance, staking, and transaction fees."
    },
    {
      question: "How can I create an NFT?",
      answer: "To create an NFT, navigate to the 'Mint NFT' page, follow the instructions to upload your NFT metadata and image, and complete the minting process."
    },
    {
      question: "How can I participate in governance?",
      answer: "You can participate in governance by visiting the 'Governance' section, where you can vote on proposals and contribute to the decision-making process for the protocol."
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-black dark:text-white mb-8">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="primary">
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </div>
  );
};

export default FAQPage;
