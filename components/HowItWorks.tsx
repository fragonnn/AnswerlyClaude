export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white overflow-hidden scroll-mt-20">
      {/* ─── Mobile (<md): curve image + positioned steps ─── */}
      <div className="md:hidden px-5 pt-10 pb-28">
        <h2 className="text-[1.7rem] font-bold text-gray-900 leading-tight mb-4">
          Simple Steps to Get
          <br />
          Expert Answers
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[280px]">
          Follow our simple, three-step process to get accurate, professional
          advice in minutes. Whether you have a quick question or need detailed
          guidance.
        </p>
        <a
          href="/pricing"
          className="inline-flex items-center justify-center w-[175px] h-[57px] bg-[#0F67FD] text-white text-sm font-semibold rounded-[15px] hover:bg-blue-700 transition-colors shadow-sm mb-10"
        >
          Join Beta
        </a>

        {/* Curve with positioned steps */}
        <div className="relative w-full max-w-[340px] mx-auto overflow-visible">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/curve%20mobile.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto block"
            draggable={false}
          />

          {/* ── STEP 1 · curve start ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(57.3% - 7px)", top: "calc(1.3% - 10px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{ fontSize: 190, opacity: 1, left: "45%", top: "6%" }}
            aria-hidden="true"
          >
            1
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "calc(4% - 50px)", top: "19%" }}
          >
            <p className="font-bold text-[22px] text-[#242E49] leading-snug mb-1">
              Ask Your Question
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Submit your question and provide a few details to help us connect
              you to the right expert.
            </p>
          </div>

          {/* ── STEP 2 · middle inflection ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(31.8% - 7px)", top: "calc(44.5% - 7px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{ fontSize: 190, opacity: 1, right: "-10%", top: "44%" }}
            aria-hidden="true"
          >
            2
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ right: "10%", top: "58%" }}
          >
            <p className="font-bold text-[22px] text-[#242E49] leading-snug mb-1">
              Get Matched
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[243px]">
              Within minutes, you&apos;ll be connected to an expert specialising
              in your query.
            </p>
          </div>

          {/* ── STEP 3 · curve end ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(74.6% - 5px)", top: "calc(86.2% - 7px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{ fontSize: 190, opacity: 1, left: "52%", bottom: "-10%" }}
            aria-hidden="true"
          >
            3
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "6%", bottom: "-10%" }}
          >
            <p className="font-bold text-[21px] text-[#242E49] leading-snug mb-1">
              Receive Your Answer
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Your expert will provide a detailed answer, and you can ask
              follow-up questions as needed.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Tablet (md to <lg): SVG curve + positioned steps ─── */}
      <div className="hidden md:block lg:hidden px-8 pt-14 pb-24">
        <div className="flex-col items-center text-left">
          <h2 className="text-[1.9rem] font-bold text-gray-900 leading-tight mb-4">
            Simple Steps to Get
            <br />
            Expert Answers
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
            Follow our simple, three-step process to get accurate, professional
            advice in minutes. Whether you have a quick question or need
            detailed guidance.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center w-[175px] h-[57px] bg-[#0F67FD] text-white text-sm font-semibold rounded-[15px] hover:bg-blue-700 transition-colors shadow-sm mb-10"
          >
            Join Beta
          </a>
        </div>

        {/* SVG Curve with positioned steps */}
        <div className="relative max-w-[500px] mx-auto overflow-visible">
          <svg
            className="w-full h-auto block"
            viewBox="0 0 361 859"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M152.7 2.2002C242.2 10.2002 355.2 28.2002 342.2 200.2C329.956 362.2 17.2 350.2 17.2 528.7C17.2 739.7 303.2 664.2 334.2 826.7"
              stroke="#0F67FD"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* ── STEP 1 · curve start ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white drop-shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(57.3% - 7px)", top: "calc(1.3% - 10px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none "
            style={{ fontSize: 190, opacity: 0.7, left: "31%", top: "9%" }}
            aria-hidden="true"
          >
            1
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "calc(4% - 50px)", top: "19%" }}
          >
            <p className="font-bold text-[22px] text-[#242E49] leading-snug mb-1">
              Ask Your Question
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Submit your question and provide a few details to help us connect
              you to the right expert.
            </p>
          </div>

          {/* ── STEP 2 · middle inflection ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(4.8% - 7px)", top: "calc(60.5% - 7px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{ fontSize: 190, opacity: 0.7, right: "-9%", top: "48%" }}
            aria-hidden="true"
          >
            2
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ right: "10%", top: "58%" }}
          >
            <p className="font-bold text-[22px] text-[#242E49] leading-snug mb-1">
              Get Matched
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Within minutes, you&apos;ll be connected to an expert specialising
              in your query.
            </p>
          </div>

          {/* ── STEP 3 · curve end ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(74.6% - 5px)", top: "calc(86.2% - 7px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{ fontSize: 190, opacity: 0.7, left: "18%", bottom: "4%" }}
            aria-hidden="true"
          >
            3
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "-16%", bottom: "2%" }}
          >
            <p className="font-bold text-[21px] text-[#242E49] leading-snug mb-1">
              Receive Your Answer
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Your expert will provide a detailed answer, and you can ask
              follow-up questions as needed.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Desktop (≥lg) ─── */}
      <div className="hidden lg:block max-w-[1200px] mx-auto px-8 xl:px-12 pt-24 pb-40">
        {/* Left content — 420px, left-aligned, above the curve */}
        <div className="w-[420px] mb-6">
          <h2 className="text-[2rem] xl:text-[2.2rem] font-bold text-gray-900 leading-tight mb-6">
            Simple Steps to Get
            <br />
            Expert Answers
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Follow our simple, three-step process to get accurate, professional
            advice in minutes. Whether you have a quick question or need
            detailed guidance.
          </p>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center w-[175px] h-[57px] bg-[#0F67FD] text-white text-sm font-semibold rounded-[15px] hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
          >
            Join Beta
          </a>
        </div>

        {/* Curve image + steps — full container width, overflow visible for step-1 text */}
        <div className="relative w-full overflow-visible">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/curve.png"
            alt=""
            aria-hidden="true"
            className="w-full h-auto block"
            draggable={false}
          />

          {/* ── STEP 1 · left start of curve (~1.5%, ~58%) ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(18.5% - 7px)", top: "calc(79% + 16px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{
              fontSize: 190,
              opacity: 0.3,
              left: "calc(23.5% + 16px)",
              top: "calc(91% - 20px)",
            }}
            aria-hidden="true"
          >
            1
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "calc(6% + 21px)", top: "calc(102% + 16px)" }}
          >
            <p className="text-[22px] font-bold text-gray-900 leading-tight mb-4">
              Ask Your Question
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Submit your question and provide a few details to help us connect
              you to the right expert.
            </p>
          </div>

          {/* ── STEP 2 · middle hump of curve (~52.2%, ~52%) ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(58.3% - 65px)", top: "calc(45.65% + 16px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{
              fontSize: 190,
              opacity: 0.3,
              left: "calc(68.2% + 12px)",
              top: "calc(59% - 20px)",
            }}
            aria-hidden="true"
          >
            2
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{ left: "calc(57.3% - 65px)", top: "calc(78.65% + 16px)" }}
          >
            <p className="text-[22px] font-bold text-gray-900 leading-tight mb-4">
              Get Matched
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Within minutes, you&apos;ll be connected to an expert specialising
              in your query.
            </p>
          </div>

          {/* ── STEP 3 · top-right of curve (~98.3%, ~0.65%) ── */}
          <div
            className="absolute z-20 w-5 h-5 rounded-full bg-[#242e49] ring-[14px] ring-white shadow-[0_4px_15px_rgba(36,46,73,0.15)]"
            style={{ left: "calc(96.3% - 65px)", top: "calc(3.65% + 0px)" }}
          />
          <div
            className="absolute z-10 font-black leading-none text-gray-400 select-none pointer-events-none"
            style={{
              fontSize: 190,
              opacity: 0.3,
              right: "calc(-5% - 125px)",
              top: "calc(-15.65% + 13px)",
            }}
            aria-hidden="true"
          >
            3
          </div>
          <div
            className="absolute z-20 w-[220px]"
            style={{
              right: "calc(2% - 137px)",
              top: "calc(14.65% + 16px)",
            }}
          >
            <p className="text-[22px] font-bold text-gray-900 leading-tight mb-4">
              Receive Your Answer
            </p>
            <p className="text-[#242E49] font-roboto text-[15px] font-normal leading-[135%] w-[274px]">
              Your expert will provide a detailed answer, and you can ask
              follow-up questions as needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
