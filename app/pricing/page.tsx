import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Pricing — Answerly",
  description:
    "Choose the right plan for instant expert guidance. Start free and upgrade as you grow.",
};

export default function PricingPage() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <PricingHero />
        <Pricing showHeader={false} />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </PageTransition>
  );
}
