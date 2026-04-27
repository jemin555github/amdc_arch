"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { team, timeline } from "@/data/siteData";
import { HiOutlineLightBulb, HiOutlineEye, HiOutlineShieldCheck, HiOutlineGlobe } from "react-icons/hi";

const whyChooseUs = [
  { icon: HiOutlineLightBulb, title: "Innovative Design", description: "Pushing boundaries with cutting-edge architectural solutions" },
  { icon: HiOutlineEye, title: "Attention to Detail", description: "Meticulous craftsmanship in every element of our designs" },
  { icon: HiOutlineShieldCheck, title: "Trusted Expertise", description: "20+ years of delivering award-winning architectural projects" },
  { icon: HiOutlineGlobe, title: "Global Reach", description: "Projects spanning 15+ countries across 4 continents" },
];

export default function AboutPage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-team.png" alt="AMDC Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Story
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">Two decades of crafting architectural excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image src="/images/info-section.png" alt="AMDC Studio" fill className="object-cover" />
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.2}>
              <div className="section-subtitle"><span>Our Journey</span></div>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Founded on passion,{" "}
                <span className="text-gradient-gold italic">built on excellence</span>
              </h2>
              <div className="divider-gold" />
              <p className="text-medium-gray leading-relaxed mb-4">
                AMDC was born from a simple belief: architecture should elevate the human experience. 
                Founded in 2005 by Alexander Mitchell, our firm has grown from a two-person studio to 
                a global practice with over 80 professionals across three continents.
              </p>
              <p className="text-medium-gray leading-relaxed mb-4">
                We approach each project as a unique opportunity to create something extraordinary. 
                Our designs are rooted in rigorous research, sustainable practices, and a deep 
                understanding of how spaces shape human behavior and wellbeing.
              </p>
              <p className="text-medium-gray leading-relaxed">
                From luxury residences and commercial towers to intimate interior transformations, 
                every AMDC project tells a story of innovation, craftsmanship, and attention to the 
                needs of those who will inhabit the space.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="glass-card rounded-2xl p-10 h-full">
                <div className="section-subtitle"><span>Mission</span></div>
                <h3 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Design with Purpose
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  To create architectural works that transcend trends, honor context, and enhance 
                  the quality of life for all who experience them. We pursue design excellence 
                  while advancing sustainable building practices for future generations.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="glass-card rounded-2xl p-10 h-full">
                <div className="section-subtitle"><span>Vision</span></div>
                <h3 className="text-2xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Shape the Future
                </h3>
                <p className="text-medium-gray leading-relaxed">
                  To be the global benchmark for architectural innovation — a firm known for designs 
                  that inspire awe, prioritize sustainability, and push the boundaries of what&apos;s 
                  possible in the built environment.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <FadeUp className="text-center mb-16">
            <div className="section-subtitle justify-center"><span>Why Us</span></div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose <span className="text-gradient-gold">AMDC</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {whyChooseUs.map(({ icon: Icon, title, description }, i) => (
              <StaggerItem key={i}>
                <div className="text-center group cursor-pointer">
                  <div
                    className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))",
                      border: "1px solid rgba(201,169,110,0.15)",
                    }}
                  >
                    <Icon className="text-gold text-3xl" />
                  </div>
                  <h4 className="text-lg font-bold text-charcoal mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {title}
                  </h4>
                  <p className="text-medium-gray text-sm">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <FadeUp className="text-center mb-16">
            <div className="section-subtitle justify-center"><span>Our Team</span></div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Meet the <span className="text-gradient-gold">Visionaries</span>
            </h2>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <div className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/4] shadow-lg">
                    {/* Avatar gradient placeholder */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, hsl(${35 + i * 10}, 40%, ${70 - i * 5}%), hsl(${40 + i * 10}, 35%, ${60 - i * 5}%))`,
                      }}
                    >
                      <span className="text-6xl text-white/30 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-charcoal group-hover:text-gold transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {member.name}
                  </h4>
                  <p className="text-gold text-sm font-medium">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sticky Scroll Timeline */}
      <section className="py-24 relative" style={{ background: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <FadeUp className="text-center mb-16">
            <div className="section-subtitle justify-center"><span>Our Journey</span></div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Company <span className="text-gradient-gold">Timeline</span>
            </h2>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-16 relative">
            {/* Sticky Image Section (Left) */}
            <div className="lg:w-1/2 lg:sticky lg:top-32 h-[50vh] min-h-[400px] mb-12 lg:mb-0 rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeTimelineIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={timeline[activeTimelineIndex].image} 
                    alt={timeline[activeTimelineIndex].title} 
                    fill 
                    className="object-cover" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                  
                  {/* Floating Year Badge */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="text-5xl font-bold tracking-tight text-white/90 drop-shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {timeline[activeTimelineIndex].year}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Scrolling Content Section (Right) */}
            <div className="lg:w-1/2 pb-[20vh]">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  onViewportEnter={() => setActiveTimelineIndex(i)}
                  transition={{ duration: 0.5 }}
                  className="mb-[30vh] last:mb-0 relative pl-8"
                >
                  {/* Indicator Line */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[2px] transition-colors duration-500 rounded-full"
                    style={{ 
                      background: activeTimelineIndex === i ? "var(--gold)" : "rgba(201, 169, 110, 0.2)",
                      boxShadow: activeTimelineIndex === i ? "0 0 10px rgba(201,169,110,0.5)" : "none"
                    }}
                  />
                  
                  <div className={`transition-all duration-500 ${activeTimelineIndex === i ? "opacity-100 translate-x-2" : "opacity-40"}`}>
                    <span className="text-gold font-bold text-xl mb-2 block" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.year}
                    </span>
                    <h4 className="text-charcoal font-bold text-3xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-medium-gray text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
