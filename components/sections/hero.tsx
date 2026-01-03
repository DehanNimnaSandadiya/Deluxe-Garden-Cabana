"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-palm-dark text-white">
      <div className="pointer-events-none absolute inset-0">
        {/* TODO: Replace with provided brand background image - place at /public/images/brand-bg.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage: "url('/images/brand-bg.jpg'), linear-gradient(135deg, #065f46 0%, #047857 50%, #92400e 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-palm-dark/95" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <div className="mt-24 px-6 pt-10 sm:mt-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end"
          >
            <div className="max-w-xl">
              <div className="text-[11px] uppercase tracking-[0.35em] text-sand-light">
                Tissamaharama, Kataragama, Sri Lanka
              </div>
              <h1 className="mt-5 font-display text-4xl tracking-[0.08em] sm:text-5xl lg:text-6xl">
                Luxury Hidden Within Coconut Gardens
              </h1>
              <p className="mt-5 text-sm leading-relaxed text-sand-light/90 sm:text-base">
                A private tropical escape designed for silence, space, and slow
                living. Ultra-private cabanas for discerning foreign travelers,
                honeymooners, and families seeking rare stillness by the
                southern coast.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/cabanas"
                  className="rounded-full bg-sand-light px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-palm-dark shadow-subtle transition hover:bg-sand-default"
                >
                  Explore Cabanas
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/30 bg-white/5 px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-sand-light/90 transition hover:border-white hover:bg-white/10"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
            <div className="flex-1 space-y-4 text-xs text-sand-light/80">
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                <div>
                  <div className="uppercase tracking-[0.25em] text-sand-light/60">
                    Collection
                  </div>
                  <div className="mt-1 text-[11px]">
                    Koko Hana Cabana Collection
                  </div>
                </div>
                <div>
                  <div className="uppercase tracking-[0.25em] text-sand-light/60">
                    Experience
                  </div>
                  <div className="mt-1 text-[11px]">
                    Nature-first, silent, and slow coastal living.
                  </div>
                </div>
                <div>
                  <div className="uppercase tracking-[0.25em] text-sand-light/60">
                    For
                  </div>
                  <div className="mt-1 text-[11px]">
                    Foreign travelers, honeymooners, and luxury families only.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mb-10 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.35em] text-sand-light/70"
        >
          <span className="h-px w-10 bg-sand-light/50" />
          Scroll to slow down
          <span className="h-px w-10 bg-sand-light/50" />
        </motion.div>
      </div>
    </section>
  );
}


