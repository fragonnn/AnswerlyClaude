const checkIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="#EBF1FF" />
    <path
      d="M6.5 10.5L8.5 12.5L13.5 7.5"
      stroke="#2563eb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const checkIconWhite = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.15)" />
    <path
      d="M6.5 10.5L8.5 12.5L13.5 7.5"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const plans = [
  {
    name: "Personal",
    description:
      "Perfect for those seeking quick, straightforward answers from experts to get started.",
    price: "$0",
    label: "Free for the first trial account",
    features: [
      "Valid for 14 Days",
      "2 Expert Responses Included",
      "Limited Integration with Expert",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Best Deal",
    description:
      "Ideal for users who want a balance of expert advice and deeper, more frequent insights.",
    price: "$76",
    label: "Trusted by over 3,000 users",
    features: [
      "Valid for 30 Days",
      "10 Expert Responses Included",
      "Unlimited Access to Categories",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description:
      "Tailored for larger teams and enterprises needing comprehensive, on-demand answers.",
    price: "$746",
    label: "Unlock unlimited access",
    features: [
      "Valid for 1 Year",
      "Unlimited Expert Responses",
      "Unlimited Integration",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-24 px-4 bg-[#D0E4FE] scroll-mt-20">
      {/* Header */}
      {showHeader && (
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
            Choose Pricing Plan
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Our pricing is designed to be simple and transparent. Whether you need
            a quick answer or ongoing expert support, we offer flexible options to
            suit your needs
          </p>
        </div>
      )}

      {/* Cards */}
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div key={plan.name} className="w-full">
            {/* MOST POPULAR badge */}
            {plan.popular && (
              <div className="bg-[#0F67FD] text-white text-xs font-semibold tracking-widest uppercase text-center h-[51px] flex items-center justify-center rounded-t-[25px]">
                MOST POPULAR
              </div>
            )}

            {/* Card */}
            <div
              className={`p-6 md:p-8 flex flex-col lg:h-[532px] transition-all duration-300 ${
                plan.popular
                  ? "bg-[#242E49] text-white rounded-b-[25px] shadow-xl"
                  : "bg-white rounded-[25px] border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  plan.popular ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-end gap-3 mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={`text-xs pb-2 ${
                    plan.popular ? "text-gray-300" : "text-gray-400"
                  }`}
                >
                  {plan.label}
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-col gap-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    {plan.popular ? checkIconWhite : checkIcon}
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-gray-200" : "text-gray-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {/* TODO: Wire to checkout/signup flow when payment integration is ready */}
              <div className="flex-1" />
              <a href="/pricing" className="w-full bg-blue-600 text-white text-sm font-semibold py-3.5 rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-150 text-center block">
                {plan.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
