"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed z-50 transition-all duration-700 ease-out left-1/2 -translate-x-1/2 ${scrolled
          ? "top-4 w-[90%] max-w-[900px] rounded-full shadow-2xl"
          /** [EDIT HERE] Change rounded-full, top spacing, max-width for initial unscrolled state */
          : "top-4 w-[95%] max-w-[1200px] rounded-full shadow-lg"
          }`}
        style={{
          /** [EDIT HERE] Adjust rgba opacity (e.g. 0.85 vs 0.4) for the glassy background */
          background: scrolled ? "rgba(250, 247, 242, 0.50)" : "rgba(250, 247, 242, 0.4)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: scrolled ? "1px solid rgba(201, 169, 110, 0.18)" : "1px solid rgba(201, 169, 110, 0.1)",
          boxShadow: scrolled ? "0 8px 40px rgba(44, 44, 44, 0.08)" : "0 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "px-6 py-3" : "px-8 md:px-16 py-5"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* [EDIT HERE] Resize logo icon width/height for both states */}
            <div className={`rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}>
              <span className={`text-white font-bold ${scrolled ? "text-sm" : "text-base"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                A
              </span>
            </div>
            {/* [EDIT HERE] Adjust logo textual font size (text-xl vs text-2xl) */}
            <span
              className={`font-bold text-charcoal tracking-tight transition-all duration-300 ${scrolled ? "text-xl" : "text-2xl"}`}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AMDC
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              /* [EDIT HERE] Adjust menu link font sizes (text-sm vs text-base) */
              <Link
                key={link.name}
                href={link.href}
                className={`relative z-10 px-5 py-2 font-medium tracking-wide transition-all duration-300 rounded-full ${scrolled ? "text-sm" : "text-base"
                  } ${pathname === link.href
                    ? "text-charcoal font-bold"
                    : "text-charcoal/70 hover:text-charcoal"
                  }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{
                      background: "rgba(255, 255, 255, 0.6)",
                      border: "1px solid rgba(201, 169, 110, 0.4)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 btn-primary text-sm !py-2.5 !px-6"
          >
            <span>Get in Touch</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-charcoal p-2 transition-colors duration-300"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex"
          >
            <div
              className="absolute inset-0 bg-charcoal/40"
              onClick={() => setMobileOpen(false)}
            />
            <div
              className="ml-auto w-[300px] h-full p-8 pt-24 flex flex-col gap-4 relative"
              style={{
                background: "rgba(250, 247, 242, 0.95)",
                backdropFilter: "blur(30px)",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-semibold py-3 tracking-wide transition-colors duration-300 ${pathname === link.href
                      ? "text-gold"
                      : "text-charcoal/70 hover:text-charcoal"
                      }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-auto">
                <Link href="/contact" className="btn-primary w-full text-center">
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
