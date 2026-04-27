"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/siteData";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import { HiArrowRight } from "react-icons/hi";

export default function ProjectsPreview() {
  const previewProjects = projects.slice(0, 4);

  return (
    <section className="section-padding" style={{ background: "var(--beige)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Section header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-subtitle">
              <span>Portfolio</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recent <span className="text-gradient-gold">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-gold font-semibold text-sm tracking-wide hover:gap-4 transition-all duration-300"
          >
            View All Projects
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </FadeUp>

        {/* Projects Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.15}
        >
          {previewProjects.map((project, i) => (
            <StaggerItem key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                  style={{
                    aspectRatio: i === 0 || i === 3 ? "16/10" : "16/12",
                    boxShadow: "0 8px 30px rgba(44, 44, 44, 0.08)",
                  }}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-semibold text-white tracking-wide"
                    style={{
                      background: "rgba(201, 169, 110, 0.85)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Content - slides up on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3
                      className="text-white text-xl md:text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-gold text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>View Project</span>
                      <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
