"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/hero-1.png",
    title: "Designing Timeless Spaces",
    subtitle: "Where vision meets architectural mastery",
  },
  {
    image: "/images/hero-2.png",
    title: "Modern Architecture &\nInterior Excellence",
    subtitle: "Crafting luxury living experiences since 2005",
  },
  {
    image: "/images/hero-3.png",
    title: "Redefining Urban Living",
    subtitle: "Innovative designs that inspire generations",
  },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={1200}
        className="h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                {/* Gold accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center px-6 z-10">
                <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <span className="inline-block text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      AMDC Architecture
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      whiteSpace: "pre-line",
                      textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                    }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Link href="/projects" className="btn-primary">
                      <span>Explore Projects</span>
                    </Link>
                    <Link href="/contact" className="btn-secondary !text-white !border-white/40 hover:!bg-white hover:!text-charcoal">
                      Contact Us
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
