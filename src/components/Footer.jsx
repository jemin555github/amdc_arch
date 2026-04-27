"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaArrowUp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Architectural Design",
  "Interior Design",
  "Landscape Planning",
  "3D Visualization",
  "Renovation",
  "Construction Consulting",
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "var(--charcoal)", color: "rgba(255,255,255,0.7)" }}>
      {/* Gold accent line */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>A</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                AMDC
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/60">
              Crafting timeless architectural masterpieces that blend innovation with elegance. Your vision, our expertise.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(201, 169, 110, 0.12)",
                    border: "1px solid rgba(201, 169, 110, 0.2)",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "var(--gold)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(201, 169, 110, 0.12)";
                    e.currentTarget.style.color = "";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors duration-300 hover:pl-2"
                    style={{ transition: "all 0.3s" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Contact Us
            </h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm">
                <HiOutlineLocationMarker className="text-gold mt-0.5 flex-shrink-0" size={18} />
                <span>123 Architecture Ave, Design District, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HiOutlinePhone className="text-gold flex-shrink-0" size={18} />
                <span>+1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <HiOutlineMail className="text-gold flex-shrink-0" size={18} />
                <span>hello@amdc-arch.com</span>
              </div>
            </div>

            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Newsletter
            </h4>
            <form
              suppressHydrationWarning
              onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
              className="flex rounded-full overflow-hidden"
              style={{ border: "1px solid rgba(201,169,110,0.25)" }}
            >
              <input
                suppressHydrationWarning
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
              <button suppressHydrationWarning type="submit" className="px-5 py-3 bg-gold text-white text-sm font-semibold hover:bg-gold-dark transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs text-white/40">
            © 2026 AMDC Architecture. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        suppressHydrationWarning
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center shadow-lg z-50 hover:shadow-xl transition-shadow"
      >
        <FaArrowUp size={16} />
      </motion.button>
    </footer>
  );
}
