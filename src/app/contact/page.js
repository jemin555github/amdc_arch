"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FadeUp, SlideIn } from "@/components/ScrollAnimations";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import Image from "next/image";

const contactInfo = [
  { icon: HiOutlineLocationMarker, label: "Visit Us", value: "123 Architecture Ave, Design District, NY 10001" },
  { icon: HiOutlinePhone, label: "Call Us", value: "+1 (555) 234-5678" },
  { icon: HiOutlineMail, label: "Email Us", value: "hello@amdc-arch.com" },
  { icon: HiOutlineClock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const socials = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaPinterestP, href: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-3.png" alt="Contact Us" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block" style={{ fontFamily: "'Inter', sans-serif" }}>
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h1>
            <p className="text-white/60 max-w-xl mx-auto">Let&apos;s discuss your next architectural masterpiece</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SlideIn direction="left">
                <div className="section-subtitle"><span>Contact Information</span></div>
                <h2 className="text-3xl font-bold text-charcoal mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Let&apos;s Start a <span className="text-gradient-gold">Conversation</span>
                </h2>
                <p className="text-medium-gray leading-relaxed mb-10">
                  Whether you have a project in mind or simply want to explore possibilities, we&apos;d love to hear from you. Our team is ready to turn your vision into reality.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: "linear-gradient(135deg, rgba(201,169,110,0.1), rgba(201,169,110,0.05))",
                          border: "1px solid rgba(201,169,110,0.15)",
                        }}
                      >
                        <Icon className="text-gold" size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">{label}</div>
                        <div className="text-charcoal font-medium text-sm">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Follow Us
                  </h4>
                  <div className="flex gap-3">
                    {socials.map(({ icon: Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        className="w-11 h-11 rounded-full flex items-center justify-center text-charcoal/50 hover:text-white transition-all duration-300 hover:scale-110"
                        style={{
                          background: "rgba(201,169,110,0.08)",
                          border: "1px solid rgba(201,169,110,0.15)",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = "var(--gold)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = "rgba(201,169,110,0.08)";
                        }}
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </SlideIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SlideIn direction="right" delay={0.2}>
                <div className="glass-card rounded-3xl p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-charcoal mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Send Us a Message
                  </h3>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-xl text-sm font-medium text-center"
                      style={{ background: "rgba(201,169,110,0.1)", border: "1px solid rgba(201,169,110,0.3)", color: "var(--gold-dark)" }}
                    >
                      ✓ Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="input-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Your Name</label>
                      </div>
                      <div className="input-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          required
                        />
                        <label>Email Address</label>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="input-group">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                        />
                        <label>Phone Number</label>
                      </div>
                      <div className="input-group">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-white/50 text-charcoal outline-none transition-all duration-300"
                          style={{ border: "1.5px solid var(--light-gray)", fontFamily: "'Inter', sans-serif" }}
                          onFocus={(e) => { e.target.style.borderColor = "var(--gold)"; e.target.style.boxShadow = "0 0 0 3px rgba(201,169,110,0.12)"; }}
                          onBlur={(e) => { e.target.style.borderColor = "var(--light-gray)"; e.target.style.boxShadow = "none"; }}
                        >
                          <option value="">Select Service</option>
                          <option value="architectural">Architectural Design</option>
                          <option value="interior">Interior Design</option>
                          <option value="landscape">Landscape Planning</option>
                          <option value="visualization">3D Visualization</option>
                          <option value="renovation">Renovation</option>
                          <option value="consulting">Construction Consulting</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-group">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        rows={5}
                        required
                      />
                      <label>Your Message</label>
                    </div>
                    <button type="submit" className="btn-primary w-full md:w-auto">
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ background: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Find <span className="text-gradient-gold">Us</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: "1px solid rgba(201,169,110,0.15)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1679506491476!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, filter: "sepia(15%) saturate(85%) brightness(105%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AMDC Office Location"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
