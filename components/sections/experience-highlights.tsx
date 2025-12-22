"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Nature & garden living",
    text: "Wake to palm-filtered light, move barefoot on cool stone, and spend long afternoons between garden shade and ocean air."
  },
  {
    title: "Matara coastal lifestyle",
    text: "Unhurried mornings, quiet beaches, and access to the energy of Matara and Mirissa when desired—never imposed."
  },
  {
    title: "Privacy & silence",
    text: "Few cabanas, generous spacing, and a service philosophy built on discretion and soft-spoken presence."
  },
  {
    title: "Honeymoon & family stays",
    text: "Honeymoon coconut cabanas and nature-focused family layouts designed for shared time without crowding."
  }
];

export function ExperienceHighlights() {
  return (
    <section className="bg-gradient-to-b from-coconut to-sand-light/40">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              Experience
            </div>
            <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
              A calm, coastal rhythm curated for foreign travelers.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
              From arrival to departure, the experience is designed to feel
              unhurried yet assured—seamless service, gentle rituals, and a
              quiet respect for your privacy.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-subtle backdrop-blur-sm"
            >
              <h3 className="font-display text-lg tracking-[0.08em] text-palm-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


