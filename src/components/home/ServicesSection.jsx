"use client";
import { services } from "@/data/siteData";
import { FadeUp, StaggerContainer, StaggerItem, TiltCard } from "@/components/ScrollAnimations";

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ background: "var(--warm-white)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section Header */}
        <FadeUp className="text-center mb-16">
          <div className="section-subtitle justify-center">
            <span>What We Offer</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-charcoal mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-medium-gray max-w-2xl mx-auto">
            From concept to completion, we deliver comprehensive architectural and design services that transform spaces and elevate living.
          </p>
        </FadeUp>

        {/* Services Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <TiltCard>
                <div
                  className="glass-card rounded-2xl p-8 h-full cursor-pointer group transition-all duration-500 hover:shadow-xl"
                  style={{
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(201, 169, 110, 0.15)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(201, 169, 110, 0.1), rgba(201, 169, 110, 0.05))",
                      border: "1px solid rgba(201, 169, 110, 0.15)",
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-medium-gray text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover accent line */}
                  <div
                    className="mt-6 h-[2px] w-0 group-hover:w-12 transition-all duration-500 rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }}
                  />
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
