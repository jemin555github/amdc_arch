"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "@/data/siteData";
import { FadeUp } from "@/components/ScrollAnimations";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section header */}
        <FadeUp className="text-center mb-16">
          <div className="section-subtitle justify-center">
            <span>Testimonials</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-charcoal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our <span className="text-gradient-gold">Clients</span> Say
          </h2>
        </FadeUp>

        {/* Testimonials Carousel */}
        <FadeUp delay={0.2}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div
                  className="glass-card rounded-2xl p-8 h-full flex flex-col group hover:shadow-xl transition-all duration-500"
                  style={{ minHeight: "300px" }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-gold/20 text-3xl mb-4" />

                  {/* Quote */}
                  <p className="text-charcoal/70 text-sm leading-relaxed flex-1 italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <FaStar key={j} className="text-gold text-sm" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    {/* Avatar placeholder */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                      style={{ background: "linear-gradient(135deg, var(--gold), var(--gold-dark))" }}
                    >
                      {testimonial.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-charcoal font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-medium-gray text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUp>
      </div>
    </section>
  );
}
