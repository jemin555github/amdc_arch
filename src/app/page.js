"use client";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import InfoSection from "@/components/home/InfoSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";

// Dynamic import for Three.js to avoid SSR issues
const HomeThreeDSection = dynamic(
  () => import("@/components/home/ThreeDSection").then((mod) => mod.HomeThreeDSection),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen flex items-center justify-center" style={{ background: "var(--beige)" }}>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-gold to-gold-dark animate-pulse" />
          <p className="text-medium-gray text-sm">Loading 3D Experience...</p>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeThreeDSection />
      <ServicesSection />
      <InfoSection />
      <ProjectsPreview />
      <TestimonialsSection />
    </>
  );
}
