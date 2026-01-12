"use client";

import { motion } from "framer-motion";

export function AboutPage() {
  return (
    <section className="bg-coconut pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
            About
          </div>
          <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            A boutique, foreign–only sanctuary in the coconut gardens of Tissamaharama, Kataragama.
          </h1>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr,0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-sm leading-relaxed text-palm-dark/75"
          >
            <p>
              Garden Retreat Cabana was born from a simple idea: to create a
              deeply calm, beautifully considered space where foreign travelers
              could experience the Tissamaharama and Kataragama region of Sri Lanka&apos;s southern coast with privacy,
              subtlety, and respect for the land.
            </p>
            <p>
              Rather than building upwards, we chose to build softly into an
              existing coconut grove—keeping mature trees, following natural
              lines of breeze and shade, and limiting the number of cabanas to
              preserve a feeling of spaciousness.
            </p>
            <p>
              The design language is intentionally minimal: clean lines, natural
              textures, tonal colors, and tactile materials. Every choice—from
              textiles to lighting—is made to quiet the mind, open the senses,
              and invite a slower pace of being.
            </p>
            <p>
              As part of the Koko Hana Cabana Collection, Garden Retreat Cabana
              upholds a standard of understated luxury: attentive yet discreet
              service, thoughtful amenities, and an atmosphere that feels more
              like a private residence than a traditional resort.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 rounded-3xl border border-white/60 bg-white/80 p-6 text-xs text-palm-dark/80 shadow-subtle backdrop-blur-sm"
          >
            <div>
              <div className="uppercase tracking-[0.3em] text-palm-dark/50">
                Philosophy
              </div>
              <p className="mt-2">
                Eco-luxury, calm, privacy, and a deep respect for the
                surrounding community and environment.
              </p>
            </div>
            <div>
              <div className="uppercase tracking-[0.3em] text-palm-dark/50">
                For foreign travelers
              </div>
              <p className="mt-2">
                The resort is curated exclusively for international guests,
                ensuring a consistent expectation of service, privacy, and
                shared pace.
              </p>
            </div>
            <div>
              <div className="uppercase tracking-[0.3em] text-palm-dark/50">
                Sustainability
              </div>
              <p className="mt-2">
                Low-rise architecture, natural ventilation, thoughtful water
                use, and a commitment to working with local suppliers and
                craftspeople wherever possible.
              </p>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-subtle backdrop-blur-sm">
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              Our Vision
            </div>
            <p className="mt-4 text-sm leading-relaxed text-palm-dark/80">
              To become a beloved Sri Lankan beverage brand that delivers authentic island flavors while creating moments of refreshment, joy, and connection.
            </p>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-subtle backdrop-blur-sm">
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              Our Mission
            </div>
            <p className="mt-4 text-sm leading-relaxed text-palm-dark/80">
              To craft high-quality, refreshing drinks inspired by Sri Lanka's tropical heritage, using carefully selected ingredients and delivering a consistent, memorable experience with every sip.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


