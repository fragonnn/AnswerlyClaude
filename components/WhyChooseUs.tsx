const cards = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth={2.5} />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth={2.5} />
      </svg>
    ),
    title: "100% Satisfaction Guarantee",
    desc: "Your satisfaction is our top priority. We're committed to providing high-quality answers and expert guidance.",
    highlighted: false,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Access Anywhere, Anytime",
    desc: "Whether you're at home, at work, or on the go, our platform allows you to connect with experts whenever you need them.",
    highlighted: true,
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="9" y1="14" x2="13" y2="14" />
      </svg>
    ),
    title: "Fast and Reliable Responses",
    desc: "Get answers when you need them most. Our experts are available around the clock to provide fast and accurate responses.",
    highlighted: false,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-24 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-6 xl:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[2.2rem] xl:text-[2.5rem] font-extrabold text-[#1e2b4a] leading-tight mb-4">
            Why Choose Our Experts?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
            Our experts are carefully selected based on their experience,
            knowledge, and dedication to providing accurate and reliable
            answers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {cards.map(({ icon, title, desc, highlighted }, i) => (
            <div
              key={title}
              className={`group rounded-2xl p-6 md:p-8 flex flex-col gap-5 md:gap-6 transition-all duration-300 cursor-default w-full max-w-[317px] h-[213px] mx-auto lg:max-w-none lg:h-[241px] lg:mx-0 ${
                i === 2
                  ? "md:col-span-2 md:max-w-[calc(50%-8px)] lg:col-span-1 lg:max-w-none"
                  : "md:max-w-none md:mx-0"
              } ${
                highlighted
                  ? "bg-blue-600 border border-blue-600 shadow-xl shadow-blue-200"
                  : "bg-white border border-gray-100 shadow-sm hover:bg-blue-600 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200"
              }`}
            >
              {/* Icon box */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  highlighted
                    ? "bg-white/20 text-white"
                    : "bg-blue-50 text-blue-600 group-hover:bg-white/20 group-hover:text-white"
                }`}
              >
                {icon}
              </div>

              {/* Text */}
              <div>
                <p
                  className={`font-bold text-[1rem] leading-snug mb-2 transition-colors duration-300 ${
                    highlighted
                      ? "text-white"
                      : "text-[#1e2b4a] group-hover:text-white"
                  }`}
                >
                  {title}
                </p>
                <p
                  className={`text-[13px] leading-relaxed transition-colors duration-300 lg:max-w-[277px] ${
                    highlighted
                      ? "text-blue-100"
                      : "text-gray-600 group-hover:text-blue-100"
                  }`}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
