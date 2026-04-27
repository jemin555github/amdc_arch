"use client";
import Image from "next/image";
import { SlideIn, FadeUp } from "@/components/ScrollAnimations";

export default function InfoSection() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--cream)" }}>
      {/* Background decorative element */}
      <div
        className="absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <SlideIn direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/info-section.png"
                  alt="Architectural model and blueprints"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Decorative frame */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl -z-10"
                style={{ border: "2px solid var(--gold)", opacity: 0.3 }}
              />
              {/* Stats card overlay */}
              <div
                className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl z-10"
                style={{
                  background: "rgba(250, 247, 242, 0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(201, 169, 110, 0.2)",
                  boxShadow: "0 12px 40px rgba(44, 44, 44, 0.1)",
                }}
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold text-gradient-gold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      20+
                    </div>
                    <div className="text-xs text-medium-gray mt-1">Years</div>
                  </div>
                  <div className="w-[1px] h-10 bg-light-gray" />
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold text-gradient-gold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      150+
                    </div>
                    <div className="text-xs text-medium-gray mt-1">Projects</div>
                  </div>
                  <div className="w-[1px] h-10 bg-light-gray" />
                  <div className="text-center">
                    <div
                      className="text-3xl font-bold text-gradient-gold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      35+
                    </div>
                    <div className="text-xs text-medium-gray mt-1">Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Text Content */}
          <SlideIn direction="right" delay={0.2}>
            <div>
              <div className="section-subtitle">
                <span>About AMDC</span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Crafting structures that{" "}
                <span className="text-gradient-gold italic">inspire</span> and{" "}
                <span className="text-gradient-gold italic">endure</span>
              </h2>
              <div className="divider-gold" />
              <p className="text-medium-gray leading-relaxed mb-6">
                For over two decades, AMDC has been at the forefront of architectural innovation. 
                We believe that great architecture goes beyond aesthetics — it shapes how people live, 
                work, and connect with their environment.
              </p>
              <p className="text-medium-gray leading-relaxed mb-8">
                Our multidisciplinary team of architects, designers, and engineers collaborate to create 
                spaces that are not only visually stunning but also sustainable, functional, and deeply 
                personal to each client.
              </p>

              {/* Feature list */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Award-Winning Design",
                  "Sustainable Practices",
                  "Global Portfolio",
                  "Client-Centered",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "var(--gold)" }}
                    />
                    <span className="text-sm text-charcoal font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
