"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/siteData";
import { FadeUp } from "@/components/ScrollAnimations";
import { HiArrowRight, HiOutlineLocationMarker } from "react-icons/hi";

const categories = ["All", "Residential", "Commercial", "Interior", "Landscape"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/project-2.png" alt="Our Projects" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Projects
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">Explore our curated collection of architectural masterpieces</p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Filters */}
          <FadeUp className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-400 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-gold to-gold-dark text-white shadow-lg"
                    : "text-charcoal/60 hover:text-charcoal"
                }`}
                style={
                  activeCategory !== cat
                    ? {
                        background: "rgba(255,253,249,0.6)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(201,169,110,0.15)",
                      }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </FadeUp>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                        {/* Category badge */}
                        <div
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ background: "rgba(201,169,110,0.85)", backdropFilter: "blur(10px)" }}
                        >
                          {project.category}
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3
                            className="text-white text-xl font-bold mb-1"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-1 text-white/50 text-xs mb-2">
                            <HiOutlineLocationMarker size={12} />
                            <span>{project.location}</span>
                          </div>
                          <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-100 mb-2">
                            {project.description}
                          </p>
                          <div className="flex items-center gap-2 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200">
                            <span>View Details</span>
                            <HiArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
