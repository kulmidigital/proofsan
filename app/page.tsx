import { BenefitsSection } from "@/components/home/benefits-section";
import { BenefitsWorkingWithUs } from "@/components/home/benefits-working-with-us";
import { HeroSection } from "@/components/home/hero-section";
import { ProductsSection } from "@/components/home/products-section";
import { ServicesSection } from "@/components/home/services-section";
import { Footer } from "@/components/layout/footer";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Waterproofing Solutions | Proofsan",
  description:
    "Discover Proofsan's complete range of high-performance waterproofing systems. We provide lasting protection for residential, commercial, and industrial structures.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsWorkingWithUs />
      <ProductsSection />
      <ServicesSection />
      <BenefitsSection />
      <Footer />
    </div>
  );
}
