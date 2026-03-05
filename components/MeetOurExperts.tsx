"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

const experts = [
  {
    id: 1,
    name: "Dr. Sarah Ahmed",
    specialty: "Family Physician",
    desc: "Dr. Sarah Ahmed is a board-certified family physician with over 12 years of experience. She specializes in providing compassionate care and practical advice for all your health needs.",
    rating: 4.9,
    reviews: 1200,
    image: "/dr%20sarah%20ahmed.png",
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    specialty: "Cardiologist",
    desc: "Dr. Wilson is a board-certified cardiologist with over 15 years of experience. He provides expert cardiac care and helps patients maintain optimal heart health.",
    rating: 4.8,
    reviews: 980,
    image: "/man%20doctor.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Dermatologist",
    desc: "Dr. Carter is a highly regarded dermatologist with expertise in both medical and cosmetic dermatology, helping patients achieve healthy and vibrant skin.",
    rating: 4.9,
    reviews: 1450,
    image: "/girl%20doctor.png",
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Orthopedist",
    desc: "Dr. Brown is a skilled orthopedic surgeon specializing in sports medicine and joint replacement, helping patients regain mobility and live pain-free.",
    rating: 4.7,
    reviews: 870,
    image: "/doctor.jpg",
  },
  {
    id: 5,
    name: "Dr. Lena Foster",
    specialty: "Pediatrician",
    desc: "Dr. Foster is a compassionate pediatrician dedicated to the health and well-being of children from birth through adolescence, with over 10 years of clinical experience.",
    rating: 4.8,
    reviews: 1100,
    image: "/girl1%20doctor.jpg",
  },
];

// Looped array: [clone-of-last, ...real cards, clone-of-first]
const looped = [experts[experts.length - 1], ...experts, experts[0]];
const GAP = 24;

function getCardWidth(vw: number): number {
  if (vw < 640) return Math.round(vw * 0.78);
  if (vw < 1024) return Math.floor((vw - 2 * GAP) / 2);
  return 760;
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function MeetOurExperts() {
  const subscribe = useCallback((cb: () => void) => {
    let timeout: ReturnType<typeof setTimeout>;
    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(cb, 150);
    };
    window.addEventListener("resize", handler);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handler);
    };
  }, []);
  const vw = useSyncExternalStore(subscribe, () => window.innerWidth, () => 0);
  // index into looped[]; 1 = real first card
  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isJumping = useRef(false); // true during instant clone→real repositioning

  const cardW = getCardWidth(vw);
  const baseX = vw / 2 - cardW / 2 - index * (cardW + GAP);
  const translateX = baseX + dragOffset;

  // After sliding to a clone, instantly jump to the real card
  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      // Only respond to the track's own transform — ignore bubbled child transitions
      if (e.target !== trackRef.current || e.propertyName !== "transform") return;

      if (index === 0) {
        isJumping.current = true;
        setAnimated(false);
        setIndex(experts.length);
      } else if (index === looped.length - 1) {
        isJumping.current = true;
        setAnimated(false);
        setIndex(1);
      }
    },
    [index],
  );

  // Re-enable animation one frame after the instant jump
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true);
          isJumping.current = false;
        }),
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  // Prevent page scroll only during horizontal swipe (not vertical)
  const touchStartY = useRef(0);
  const isHorizontalSwipe = useRef(false);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      isHorizontalSwipe.current = false;
    };
    const onMove = (e: TouchEvent) => {
      const dx = Math.abs(e.touches[0].clientX - dragStartX.current);
      const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (!isHorizontalSwipe.current && dx > dy && dx > 10) {
        isHorizontalSwipe.current = true;
      }
      if (isHorizontalSwipe.current) e.preventDefault();
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
    };
  }, []);

  const goNext = useCallback(() => {
    if (isJumping.current) return;
    setAnimated(true);
    setIndex((i) => Math.min(i + 1, looped.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    if (isJumping.current) return;
    setAnimated(true);
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  // ── Mouse drag ──────────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragCurrentX.current = e.clientX;
    e.preventDefault();
  };

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      dragCurrentX.current = e.clientX;
      setDragOffset(e.clientX - dragStartX.current);
    },
    [isDragging],
  );

  const finishDrag = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = dragCurrentX.current - dragStartX.current;
    if (delta < -50) goNext();
    else if (delta > 50) goPrev();
    setDragOffset(0);
  }, [isDragging, goNext, goPrev]);

  // ── Touch drag ──────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragCurrentX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    dragCurrentX.current = e.touches[0].clientX;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };

  const onTouchEnd = useCallback(() => {
    const delta = dragCurrentX.current - dragStartX.current;
    if (delta < -50) goNext();
    else if (delta > 50) goPrev();
    setDragOffset(0);
  }, [goNext, goPrev]);

  const navButtons = (
    <div className="flex gap-3">
      <button
        onClick={goPrev}
        aria-label="Previous expert"
        className="w-[51px] h-[51px] p-[3px]
flex items-center justify-center
rounded-[10px]
bg-white
transition-all duration-200

hover:bg-gray-100
hover:scale-105

active:bg-gray-100
active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M22.5 12.5L2.5 12.5M2.5 12.5L8.52417 18.5M2.5 12.5L8.52417 6.5"
            stroke="#242E49"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={goNext}
        aria-label="Next expert"
        className="w-[51px] h-[51px] p-[3px]
flex items-center justify-center
rounded-[10px]
bg-[#0F67FD]
border border-white/25
text-gray-800
transition-all duration-200

hover:bg-blue-700
hover:scale-105

active:bg-blue-700
active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M2.5 12.5L22.5 12.5M22.5 12.5L16.4758 18.5M22.5 12.5L16.4758 6.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <section id="categories" aria-label="Meet Our Experts" className="bg-[#0f172a] py-12 md:py-16 lg:py-24 overflow-hidden scroll-mt-20">
      {/* Header row */}
      <div className="max-w-[1200px] mx-auto px-8 xl:px-12 mb-10">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-[1.7rem] sm:text-[2rem] xl:text-[2.4rem] font-extrabold text-white leading-tight mb-3">
              Meet Our Experts
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
              Our experts are carefully selected based on their experience,
              knowledge, and dedication to providing accurate and reliable
              answers.
            </p>
          </div>
          <div className="hidden md:flex items-center mt-1">{navButtons}</div>
        </div>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className="flex select-none"
        style={{
          gap: GAP,
          transform: `translateX(${translateX}px)`,
          transition: animated && !isDragging ? "transform 0.5s ease" : "none",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={finishDrag}
        onMouseLeave={finishDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTransitionEnd={handleTransitionEnd}
      >
        {looped.map((expert, i) => (
          <div
            key={`${expert.id}-${i}`}
            className="shrink-0 relative flex flex-col lg:flex-row"
            style={{
              width: cardW,
              height: vw >= 1024 ? 392 : undefined,
              borderRadius: 30,
              background: "#D0E4FE",
              padding: vw < 640 ? "15px 16px" : "30px",
              gap: vw < 640 ? 16 : 24,
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              overflow: "hidden",
            }}
          >
            {/* More info button — right side of card, mobile/tablet only */}
            <button
              onClick={() =>
                setExpandedIdx(expandedIdx === i ? null : i)
              }
              aria-label={expandedIdx === i ? "Close details" : "More info"}
              className="lg:hidden absolute right-4 top-4 z-30 w-8 h-8 rounded-full backdrop-blur-sm flex items-center justify-center transition-all duration-300"
              style={{
                background: expandedIdx === i ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.5)",
                border: expandedIdx === i ? "1px solid rgba(59,130,246,0.4)" : "1px solid rgba(255,255,255,0.6)",
              }}
            >
              {expandedIdx === i ? (
                <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-4M12 8h.01" />
                </svg>
              )}
            </button>

            {/* Glassmorphism overlay — mobile/tablet only */}
            <div
              className="lg:hidden absolute inset-0 z-20 flex flex-col justify-end p-6 transition-all duration-400 ease-out"
              style={{
                opacity: expandedIdx === i ? 1 : 0,
                pointerEvents: expandedIdx === i ? "auto" : "none",
                background: "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.78) 60%, rgba(15,23,42,0.3) 100%)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                borderRadius: 30,
              }}
              onClick={() => setExpandedIdx(null)}
            >
              <span className="inline-block self-start text-[11px] font-semibold tracking-wide uppercase text-blue-300 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full mb-3">
                {expert.specialty}
              </span>
              <h3 className="text-[20px] font-bold text-white leading-snug mb-2">
                {expert.name}
              </h3>
              <p className="text-[13px] text-gray-300 leading-relaxed mb-4">
                {expert.desc}
              </p>
              <div className="flex items-center gap-2">
                <Stars rating={expert.rating} />
                <span className="text-[11px] text-gray-400">
                  {expert.rating}/5 from {expert.reviews.toLocaleString("en-US")} reviews
                </span>
              </div>
            </div>

            {/* Expert image — left on desktop, bottom on mobile */}
            <div
              className="relative rounded-[15px] overflow-hidden order-last lg:order-first w-full lg:w-[346px] shrink-0"
              style={{
                height: vw < 1024 ? 262 : "100%",
                background: "#D9D9D9",
              }}
            >
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                sizes="(max-width: 639px) 78vw, (max-width: 1023px) 50vw, 346px"
                className="object-cover pointer-events-none"
                draggable={false}
              />
            </div>

            {/* Text content — right on desktop, top on mobile */}
            <div className="flex-1 flex flex-col gap-[10px] justify-center min-w-0">
              <div>
                <h3 className="text-[22px] font-bold text-[#1e2b4a] leading-snug mb-3">
                  {expert.name}
                </h3>

                {/* Specialty + Description — desktop always visible */}
                <div className="hidden lg:block">
                  <span className="inline-block text-[11px] font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                    {expert.specialty}
                  </span>
                  <p className="text-[12.5px] text-gray-500 leading-relaxed">
                    {expert.desc}
                  </p>
                </div>
              </div>

              {/* Stars + Review count */}
              <div className="flex items-center gap-2 lg:mt-4">
                <Stars rating={expert.rating} />
                <span className="text-[11px] text-gray-600">
                  ({expert.rating}/5 from{" "}
                  {expert.reviews.toLocaleString("en-US")} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nav arrows — mobile only */}
      <div className="flex md:hidden justify-center mt-8">{navButtons}</div>
    </section>
  );
}
