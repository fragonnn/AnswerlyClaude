"use client";

import { useState } from "react";
import ExpertBubble from "./ExpertBubble";

const MAX_CHARS = 1000;

const categories = [
  "Lawyers",
  "Doctors",
  "Mechanics",
  "Electronics Techs",
] as const;

const moreCategories = [
  "Nutritionists",
  "Travel Advisors",
  "Financial Advisors",
  "Fitness Coaches",
  "Plumbers",
  "Teachers",
  "Accountants",
  "Veterinarians",
] as const;

const experts = [
  {
    id: "tech",
    category: "Electronics Techs", // ← maps bubble click to category pill
    messages: [
      "I'm a tech specialist. How can I assist you with your technical issues today",
    ],
    avatarStyle: { background: "linear-gradient(135deg, #f97316, #ef4444)" },
    avatar: "/bubbles%20img/Ellipse%2034.png",
    flip: false,
    // top-left — tablet+
    className: "absolute top-[18%] left-[4%]",
    show: "hidden md:flex",
  },
  {
    id: "nutritionist",
    category: "Nutritionists",
    messages: ["I'm a nutritionist", "How can I help you In nutrition"],
    avatarStyle: { background: "linear-gradient(135deg, #22c55e, #16a34a)" },
    avatar: "/bubbles%20img/Ellipse%2033.png",
    flip: true,
    // top-right — all screens (scaled down on mobile)
    className:
      "absolute top-[90px] right-[2%] md:top-[14%] md:right-[4%] scale-[0.65] md:scale-100 origin-top-right",
    show: "flex",
  },
  {
    id: "doctor",
    category: "Doctors",
    messages: ["I'm a doctor", "How can help you today"],
    avatarStyle: { background: "linear-gradient(135deg, #60a5fa, #3b82f6)" },
    avatar: "/bubbles%20img/Ellipse%2031.png",
    flip: false,
    // middle-left — desktop only
    className: "absolute top-[44%] left-[2%]",
    show: "hidden xl:flex",
  },
  {
    id: "travel",
    category: "Travel Advisors",
    messages: ["I'm a travel advisor. How can I assist you with your travel."],
    avatarStyle: { background: "linear-gradient(135deg, #fb923c, #dc2626)" },
    avatar: "/bubbles%20img/Ellipse%2060.png",
    flip: true,
    // middle-right — desktop only
    className: "absolute top-[44%] right-[2%]",
    show: "hidden xl:flex",
  },
  {
    id: "financial",
    category: "Financial Advisors",
    messages: [
      "I'm a financial advisor.",
      "Do you need assistance with investments",
    ],
    avatarStyle: { background: "linear-gradient(135deg, #94a3b8, #475569)" },
    avatar: "/bubbles%20img/Ellipse%2032.png",
    flip: false,
    // bottom-left — desktop only
    className: "absolute bottom-[12%] left-[6%]",
    show: "hidden xl:flex",
  },
  {
    id: "fitness",
    category: "Fitness Coaches",
    messages: [
      "I'm a fitness coach",
      "How can I help you reach your fitness goals?",
    ],
    avatarStyle: { background: "linear-gradient(135deg, #3b82f6, #7c3aed)" },
    avatar: "/bubbles%20img/Ellipse%2035.png",
    flip: true,
    // bottom-right — desktop only
    className: "absolute bottom-[12%] right-[6%]",
    show: "hidden xl:flex",
  },
];

export default function HeroSection() {
  const [inputValue, setInputValue] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState<string | null>(null);

  /** Toggle expert selection — clicking the same expert deselects it */
  function toggleCategory(cat: string) {
    setActiveCategory((prev) => (prev === cat ? null : cat));
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (e.target.value.length <= MAX_CHARS) {
      setInputValue(e.target.value);
      if (error) setError(null);
    }
  }

  async function handleSubmit() {
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setReply(null);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: inputValue.trim(),
          expert: activeCategory,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setReply(data.reply);
      setInputValue("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <section id="hero" className="hero-gradient relative min-h-screen overflow-hidden flex flex-col items-center">
      {/* Desktop bubbles — absolute positioned (xl+) */}
      {experts.map((expert, i) => (
        <div
          key={expert.id}
          className={`hidden xl:flex animate-float ${expert.className}`}
          style={{ animationDelay: `${i * 0.5}s` }}
        >
          <ExpertBubble
            messages={expert.messages}
            avatarStyle={expert.avatarStyle}
            avatar={expert.avatar}
            flip={expert.flip}
            onClick={() => toggleCategory(expert.category)}
          />
        </div>
      ))}

      {/* Mobile bubble — top 1, right-aligned */}
      <div className="flex md:hidden justify-end px-4 mt-28 mb-4 w-full">
        <ExpertBubble
          messages={experts[1].messages}
          avatarStyle={experts[1].avatarStyle}
          avatar={experts[1].avatar}
          flip={experts[1].flip}
          onClick={() => toggleCategory(experts[1].category)}
        />
      </div>

      {/* Tablet bubbles — top 2, spread left/right */}
      <div className="hidden md:flex xl:hidden justify-between items-start mt-32 mb-4 px-6 w-full">
        <ExpertBubble
          messages={experts[0].messages}
          avatarStyle={experts[0].avatarStyle}
          avatar={experts[0].avatar}
          flip={experts[0].flip}
          onClick={() => toggleCategory(experts[0].category)}
        />
        <ExpertBubble
          messages={experts[1].messages}
          avatarStyle={experts[1].avatarStyle}
          avatar={experts[1].avatar}
          flip={experts[1].flip}
          onClick={() => toggleCategory(experts[1].category)}
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-8 md:pt-8 xl:pt-[222px] pb-16 md:pb-20 w-full max-w-3xl xl:max-w-[946px] mx-auto">
        {/* Headline */}
        <h1 className="text-[1.75rem] md:text-[56px] font-semibold text-[#242E49] leading-[100%] text-center md:w-[746px] mb-4 md:mb-5">
          Solve Your Problems with
          <br />
          Instant Expert Guidance!
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-md leading-relaxed mb-6 md:mb-8">
          Get instant, accurate answers from top professionals
          <br className="hidden sm:block" />
          in various fields, available 24/7.
        </p>

        {/* Expert Category Row */}
        <div className="relative mb-7">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* Icon + Label */}
            <div className="flex items-center gap-1.5 text-[#242E49]/90 text-sm font-medium">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <span>choose an expert :</span>
            </div>

            {/* Category Pills */}
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                  i === 0
                    ? ""
                    : i < 3
                      ? "hidden md:inline-flex"
                      : "hidden lg:inline-flex"
                } ${
                  activeCategory === cat
                    ? "bg-white text-blue-600 border-white shadow-sm"
                    : "text-[#242E49] border-white/40 hover:brightness-125"
                }`}
                style={
                  activeCategory !== cat
                    ? { background: "rgba(15, 103, 253, 0.28)" }
                    : undefined
                }
              >
                {cat}
              </button>
            ))}

            {/* Selected "more" category indicator — visible when dropdown is closed */}
            {!showMore &&
              activeCategory &&
              (moreCategories as readonly string[]).includes(activeCategory) && (
                <button
                  onClick={() => toggleCategory(activeCategory)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-white text-blue-600 border border-white shadow-sm transition-all duration-150 hover:bg-blue-50"
                >
                  {activeCategory}
                  <svg
                    className="w-3 h-3 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}

            {/* More / Close button */}
            <button
              onClick={() => setShowMore(!showMore)}
              aria-label={showMore ? "Show fewer categories" : "More categories"}
              className={`w-8 h-8 rounded-full text-white flex items-center justify-center transition-colors ${
                showMore
                  ? "bg-white/20 hover:bg-white/30"
                  : "bg-gray-800/70 hover:bg-gray-700/80"
              }`}
            >
              {showMore ? (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              )}
            </button>
          </div>

          {/* Expanded categories — floating white card */}
          <div
            className="absolute left-1/2 top-[calc(100%+12px)] z-30 w-[calc(100%+32px)] max-w-[480px] transition-all duration-300 ease-out"
            style={{
              opacity: showMore ? 1 : 0,
              transform: showMore
                ? "translateX(-50%) translateY(0) scale(1)"
                : "translateX(-50%) translateY(-6px) scale(0.97)",
              pointerEvents: showMore ? "auto" : "none",
            }}
          >
            {/* Arrow */}
            <div
              className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
              style={{
                background: "rgba(255,255,255,0.95)",
                boxShadow: "-1px -1px 2px rgba(0,0,0,0.04)",
              }}
            />
            {/* Card */}
            <div
              className="relative rounded-[20px] px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0,0,0,0.05), 0 20px 40px -8px rgba(15,103,253,0.15), 0 0 0 1px rgba(255,255,255,0.6)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[#242E49]/50">
                  Browse all experts
                </span>
                <button
                  onClick={() => setShowMore(false)}
                  aria-label="Close categories"
                  className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-3 h-3 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* More category pills */}
              <div className="flex flex-wrap gap-2">
                {moreCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      toggleCategory(cat);
                      setShowMore(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                      activeCategory === cat
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Textarea Input Card */}
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-5">
          <textarea
            id="question"
            name="question"
            aria-label="Ask your question"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="What would you like me to help you with DYI..."
            rows={4}
            className="w-full text-sm text-gray-700 placeholder-gray-400 leading-relaxed bg-transparent border-none resize-none focus:outline-none"
          />
          <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-100 mt-1">
            <span className="text-xs text-gray-500 select-none">
              {inputValue.length}/{MAX_CHARS}
            </span>
            <button
              onClick={handleSubmit}
              aria-label="Send message"
              className="w-9 h-9 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl flex items-center justify-center transition-all duration-150 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim() || isLoading}
            >
              {isLoading ? (
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 translate-x-px"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22 11 13 2 9l20-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        {/* Reply card */}
        {reply && (
          <div className="w-full max-w-2xl mt-4 bg-white rounded-2xl shadow-lg p-5 text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Expert Reply
              </span>
              <button
                onClick={() => setReply(null)}
                aria-label="Dismiss reply"
                className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-3 h-3 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {reply}
            </p>
          </div>
        )}

        {/* Mobile bubble — bottom 1, under textarea, left-aligned */}
        <div className="flex md:hidden justify-start mt-8 w-full">
          <ExpertBubble
            messages={experts[2].messages}
            avatarStyle={experts[2].avatarStyle}
            avatar={experts[2].avatar}
            flip={experts[2].flip}
            onClick={() => toggleCategory(experts[2].category)}
          />
        </div>

        {/* Tablet bubbles — bottom 2, under textarea, spread left/right */}
        <div className="hidden md:flex xl:hidden justify-between items-start mt-8 px-2 w-full">
          <ExpertBubble
            messages={experts[2].messages}
            avatarStyle={experts[2].avatarStyle}
            avatar={experts[2].avatar}
            flip={experts[2].flip}
            onClick={() => toggleCategory(experts[2].category)}
          />
          <ExpertBubble
            messages={experts[5].messages}
            avatarStyle={experts[5].avatarStyle}
            avatar={experts[5].avatar}
            flip={experts[5].flip}
            onClick={() => toggleCategory(experts[5].category)}
          />
        </div>
      </div>
    </section>
  );
}
