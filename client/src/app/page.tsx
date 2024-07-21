"use client";
import Footer from "@/components/own/Footer";
import BenefitsSection from "@/components/own/landing/BenefitsSection";
import FeatureSection from "@/components/own/landing/FeatureSection";
import Hero from "@/components/own/landing/Hero";
import NewsLetter from "@/components/own/landing/NewsLetter";
import TestimonalSection from "@/components/own/landing/TestimonalSection";
import Navbar from "@/components/own/Navbar";
import ScrollAnimation from "@/components/own/ScrollAnimation";

export const backendUrl = process.env.BACKEND_BASE_URL;

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <FeatureSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <BenefitsSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TestimonalSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <div className="relative">
          <div className="flex items-center justify-center">
            <NewsLetter />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
