"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CTA() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section className="px-4 py-12 md:py-16 lg:py-24">
      <div
        className="max-w-[1240px] h-auto lg:h-[463px] mx-auto rounded-[25px] relative overflow-hidden flex flex-col-reverse lg:flex-row items-center"
        style={{
          background:
            "radial-gradient(30.86% 48% at 25% 50%, #0060d1 0%, rgb(208, 228, 254) 100%)",
        }}
      >
        {/* Phone mockup image */}
        <div className="relative shrink-0 w-full lg:w-auto lg:relative lg:bottom-0 lg:left-[60px] lg:mt-20 flex items-end justify-center">
          <Image
            src="/cta-img1.png"
            alt="Expert chat on mobile"
            width={505}
            height={505}
            sizes="(max-width: 1024px) 300px, 460px"
            className="relative z-10 object-contain w-[300px] lg:w-[460px] h-auto"
          />
        </div>

        {/* Text content — centered in right half */}
        <div className="w-full lg:w-1/2 lg:ml-auto px-6 md:px-8 py-8 md:py-10 lg:py-0 lg:pr-12 text-center lg:text-left flex flex-col justify-center lg:h-[463px]">
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#181A1C] leading-[120%] mb-4">
            Ready to Get Expert
            <br />
            Answers?
          </h2>
          <p className="text-[#3B3D4A] text-sm leading-relaxed mb-8 max-w-[400px] mx-auto lg:mx-0">
            Don&apos;t wait any longer—your solution is just a question away!
            Whether you need quick advice or in-depth guidance, our experts are
            here to help.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <a href={isHome ? "#hero" : "/#hero"} className="px-6 py-3 bg-white text-[#181A1C] text-sm font-semibold rounded-xl hover:bg-gray-100 active:scale-95 transition-all duration-150 text-center">
              Ask Your Question Now
            </a>
            <a href="/pricing" className="px-6 py-3 bg-[#0F67FD] text-white text-sm font-semibold rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-150 text-center">
              Start Your Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
