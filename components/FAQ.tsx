"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What Should I Do if I Need More Clarification",
    answer:
      "Most responses fit within a single answer response from 1 to 3 paragraphs and in most typical exchanges there is no follow up. Refining my Search? If you still have more questions or need additional clarification, you can follow up by contacting the same expert if the category the site offers them provides that.",
  },
  {
    question: "Can I ask more than one question?",
    answer:
      "Yes, you can ask as many questions as your plan allows. Each plan comes with a set number of expert responses, and you can upgrade at any time for additional access.",
  },
  {
    question: "How much does it cost to ask a question?",
    answer:
      "We offer flexible pricing plans starting from a free trial. Check our pricing section for detailed information on each plan and what's included.",
  },
  {
    question: "Is my information kept private?",
    answer:
      "Absolutely. We take your privacy seriously. All personal information and questions are kept strictly confidential and are never shared with third parties.",
  },
  {
    question: "Are the experts qualified?",
    answer:
      "Yes, all our experts are carefully vetted professionals with verified credentials and extensive experience in their respective fields.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pt-12 md:pt-16 lg:pt-24 pb-6 md:pb-8 lg:pb-10 px-4 scroll-mt-20">
      {/* Header */}
      <div className="text-center mx-auto mb-10 md:mb-14">
        <h2 className="max-w-[709px] w-full mx-auto text-[28px] sm:text-[36px] md:text-[50px] font-semibold text-[#181A1C] text-center leading-[100%] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="max-w-[647px] w-full mx-auto text-[#5B5D6B] text-[13px] md:text-[15px] font-normal leading-[120%] text-center">
          Got questions about how our service works? You&apos;re in the right place! We&apos;ve compiled answers to
          some of the most common inquiries to help you get started.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-[819px] mx-auto flex flex-col gap-3 md:gap-4">
        {faqs.map((faq, i) => (
          <div key={faq.question} className="bg-[#F5F5F5] rounded-[15px] px-5 md:px-6">
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
            >
              <span className="text-[#0f172a] font-semibold text-sm md:text-base pr-4">
                {faq.question}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="#6B7280"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-[300px] pb-5" : "max-h-0"
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
