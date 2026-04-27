"use client";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { projects } from "@/data/siteData";
import { FadeUp, SlideIn } from "@/components/ScrollAnimations";
import { HiArrowLeft, HiArrowRight, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineColorSwatch } from "react-icons/hi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectModel3D = dynamic(
  () => import("@/components/home/ThreeDSection").then((mod) => mod.ProjectModel3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full rounded-2xl flex items-center justify-center" style={{ height: "400px", background: "linear-gradient(135deg, #F5F0EB 0%, #E8E4DF 100%)" }}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark animate-pulse" />
      </div>
    ),
  }
);

export default function ProjectDetailPage({ params }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--cream)" }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Project Not Found
          </h1>
          <Link href="/projects" className="btn-primary"><span>Back to Projects</span></Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <>
      {/* Image Slider */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          speed={800}
          className="h-full w-full"
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image src={img} alt={`${project.title} - view ${i + 1}`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Back button */}
        <Link
          href="/projects"
          className="absolute top-24 left-6 md:left-16 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
          style={{ backdropFilter: "blur(10px)", background: "rgba(0,0,0,0.3)", padding: "8px 16px", borderRadius: "50px" }}
        >
          <HiArrowLeft /> Back to Projects
        </Link>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 md:p-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ background: "rgba(201,169,110,0.85)" }}>
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  About This Project
                </h2>
                <div className="divider-gold" />
                <p className="text-medium-gray leading-relaxed mb-6">{project.details}</p>
                <p className="text-medium-gray leading-relaxed">{project.description}</p>
              </FadeUp>

              {/* Video placeholder */}
              <FadeUp delay={0.2} className="mt-12">
                <h3 className="text-xl font-bold text-charcoal mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Video Walkthrough
                </h3>
                <div
                  className="relative rounded-2xl overflow-hidden aspect-video flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--charcoal), #3a3a3a)",
                    border: "1px solid rgba(201,169,110,0.15)",
                  }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-3 cursor-pointer hover:bg-gold/30 transition-colors">
                      <div className="w-0 h-0 border-l-[18px] border-l-gold border-y-[11px] border-y-transparent ml-1.5" />
                    </div>
                    <p className="text-white/50 text-sm">Project Walkthrough</p>
                  </div>
                </div>
              </FadeUp>

            </div>

            {/* Sidebar */}
            <div>
              <FadeUp delay={0.1}>
                <div className="glass-card rounded-2xl p-8 sticky top-28">
                  <h3 className="text-lg font-bold text-charcoal mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Project Info
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <HiOutlineLocationMarker className="text-gold mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">Location</div>
                        <div className="text-charcoal font-medium text-sm">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HiOutlineCalendar className="text-gold mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">Year</div>
                        <div className="text-charcoal font-medium text-sm">{project.year}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <HiOutlineColorSwatch className="text-gold mt-0.5 flex-shrink-0" size={20} />
                      <div>
                        <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">Style</div>
                        <div className="text-charcoal font-medium text-sm">{project.style}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      <span>Discuss Similar Project</span>
                    </Link>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Model Viewer Full-Width Section */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="w-full">
          <FadeUp className="text-center mb-10 px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-charcoal mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Interactive <span className="text-gradient-gold">3D Model</span>
            </h2>
            <p className="text-medium-gray mt-4 max-w-2xl mx-auto">
              Explore the architectural details of {project.title} from every angle in high-fidelity 3D.
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="w-full h-[80vh] bg-gradient-to-b from-[#f9f7f4] to-[#ede8e3] relative group shadow-inner">
              <ProjectModel3D category={project.category} modelUrl={project.modelUrl} height="100%" />
              
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <p className="px-6 py-3 rounded-full bg-charcoal/5 backdrop-blur-md border border-charcoal/10 text-charcoal/60 text-xs tracking-widest uppercase font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  🖱️ Drag to rotate • Scroll to zoom
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding" style={{ background: "var(--beige)" }}>
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <FadeUp className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Related <span className="text-gradient-gold">Projects</span>
              </h2>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <FadeUp key={p.id}>
                  <Link href={`/projects/${p.id}`}>
                    <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <div className="relative aspect-[4/3]">
                        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <h4 className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h4>
                          <p className="text-white/50 text-xs">{p.location}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
