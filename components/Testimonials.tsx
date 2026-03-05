import Image from "next/image";

// CSS columns flow top→bottom per column:
// Col 1: Jerome (large) → Savannah (small)
// Col 2: Kathryn (small) → Brooklyn (large)
// Col 3: Floyd (small) → Marvin (large)
//
// show: "" = always, "hidden md:block" = tablet+, "hidden lg:block" = desktop only
const testimonials = [
  {
    text: "The service exceeded my expectations. I was able to connect with a medical expert in just a few minutes, and the guidance they provided was incredibly detailed and helpful. It felt like a one-on-one consultation.",
    name: "Jerome Bell",
    role: "Medical Assistant",
    avatar: "/jerome bell.png",
    large: true,
    show: "",
  },
  {
    text: "As a mother, I constantly worry about my child's health, especially when unexpected symptoms appear.",
    name: "Savannah Nguyen",
    role: "Nursing Assistant",
    avatar: "/Savannah Nguyen.png",
    large: false,
    show: "hidden md:block",
  },
  {
    text: "The entire process was incredibly smooth. I connected with a doctor who specialized in my specific concern.",
    name: "Kathryn Murphy",
    role: "President of Sales",
    avatar: "/kathryn murphy.png",
    large: false,
    show: "hidden md:block",
  },
  {
    text: "I can't express how grateful I am for this service. I had a medical concern late at night and didn't want to wait until morning to see my regular doctor. I connected with an expert who listened to my symptoms and provided a detailed response within minutes.",
    name: "Brooklyn Simmons",
    role: "Dog Trainer",
    avatar: "/Brooklyn Simmons.png",
    large: true,
    show: "hidden md:block",
  },
  {
    text: "From start to finish, the experience was seamless. I had a question about a recurring health issue.",
    name: "Floyd Miles",
    role: "Web Designer",
    avatar: "/floyd miles.png",
    large: false,
    show: "hidden lg:block",
  },
  {
    text: "I had some concerns about the side effects of a new medication I was taking, and my local pharmacy couldn't give me the answers I needed. I reached out through this service and received a thorough explanation from a qualified doctor.",
    name: "Marvin McKinney",
    role: "Marketing Coordinator",
    avatar: "/Marvin McKinney.png",
    large: true,
    show: "hidden lg:block",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-16 lg:py-24 px-4 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 lg:mb-14">
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[50px] font-semibold text-[#242E49] leading-none mb-3 md:mb-4">
          Testimonials
        </h2>
        <p className="text-[14px] md:text-[15px] lg:text-[17px] font-normal text-[#242E49] leading-[135%] max-w-[442px] mx-auto">
          &quot;Don&apos;t just take our word for it &mdash; hear from real
          users who have received expert answers to their most pressing
          questions&quot;
        </p>
      </div>

      {/* Cards wrapper with floating icons */}
      <div className="relative max-w-[1200px] mx-auto overflow-visible">
        {/* Floating icons */}
        <div className="absolute -left-12 top-[35%] -translate-y-1/2 pointer-events-none z-10 hidden md:flex items-center justify-center w-[94px] h-[94px] rotate-[-16.179deg]">
          <Image src="/floating-icon left.png" alt="" width={94} height={94} />
        </div>
        <div className="absolute -right-12 bottom-[20%] pointer-events-none z-10 hidden lg:flex items-center justify-center w-[94px] h-[94px] rotate-[15deg]">
          <Image src="/floating-icon right.png" alt="" width={94} height={94} />
        </div>

        {/* Cards — CSS columns for masonry layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`mb-4 break-inside-avoid ${t.show}`}
            >
              <div
                className={`relative rounded-[25px] border border-[rgba(221,221,221,0.5)] bg-[#F5F5F5] shadow-sm hover:bg-white hover:shadow-lg hover:-translate-y-1 p-5 md:p-6 transition-all duration-300 flex flex-col justify-between h-[390px] w-[317px] mx-auto md:w-auto md:mx-0 ${
                  t.large ? "md:h-[378px] lg:h-[460px]" : "md:h-[220px] lg:h-[238px]"
                }`}
              >
                <p className="text-[#30353A] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-[130%] max-w-[319px]">{t.text}</p>

                <div className="flex-1" />

                <div className="md:hidden absolute -left-12 top-[55%] -translate-y-1/2 rotate-[-16.179deg] pointer-events-none z-10">
                  <Image src="/floating-icon left.png" alt="" width={94} height={94} />
                </div>

                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[#727272] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-none">
                      {t.name}
                    </p>
                    <p className="text-[#181A1C] text-[14px] lg:text-[15px] font-medium leading-none mt-1.5">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
