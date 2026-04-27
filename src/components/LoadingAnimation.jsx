"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "var(--cream)" }}
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-2xl">
              <span
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A
              </span>
            </div>

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-2xl"
              style={{
                border: "2px solid transparent",
                borderTopColor: "var(--gold)",
                borderRightColor: "rgba(201,169,110,0.3)",
              }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center"
          >
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              AMDC
            </h2>
            <p className="text-sm text-medium-gray tracking-[0.3em] uppercase">
              Architecture & Design
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div className="mt-10 w-48 h-[2px] bg-light-gray/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
