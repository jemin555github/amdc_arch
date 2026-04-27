"use client";
import { services } from "@/data/siteData";
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from "@/components/ScrollAnimations";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-2.png" alt="Our Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">Comprehensive architectural and design solutions for every vision</p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {services.map((service, i) => (
            <FadeUp key={i}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 last:mb-0 ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
                style={i % 2 === 1 ? { direction: "rtl" } : {}}
              >
                {/* Visual */}
                <div style={{ direction: "ltr" }}>
                  <div
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, hsl(${35 + i * 8}, 30%, ${88 - i * 3}%), hsl(${38 + i * 8}, 25%, ${82 - i * 3}%))`,
                      border: "1px solid rgba(201,169,110,0.15)",
                    }}
                  >
                    <span className="text-8xl opacity-30">{service.icon}</span>
                  </div>
                </div>
                {/* Text */}
                <div style={{ direction: "ltr" }}>
                  <div className="section-subtitle"><span>Service {String(i + 1).padStart(2, "0")}</span></div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {service.title}
                  </h2>
                  <div className="divider-gold" />
                  <p className="text-medium-gray leading-relaxed mb-6">{service.description}</p>
                  <p className="text-medium-gray leading-relaxed mb-8">
                    Our expert team brings years of experience and a passion for excellence to every project. 
                    We work closely with clients to understand their unique vision and deliver results that exceed expectations.
                  </p>
                  <Link href="/contact" className="btn-primary">
                    <span>Get Started</span>
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden" style={{ background: "var(--charcoal)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)", filter: "blur(80px)" }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-16 text-center relative z-10">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Build Your <span className="text-gradient-gold">Dream</span>?
            </h2>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">
              Let&apos;s discuss your project and bring your architectural vision to life. Our team is ready to create something extraordinary.
            </p>
            <Link href="/contact" className="btn-primary text-lg">
              <span>Start a Conversation</span>
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
