"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Silence framed by coconut gardens",
    body: "Paths of soft sand lead through mature coconut palms to just a handful of cabanas, each positioned for privacy, dappled light, and distant ocean breeze."
  },
  {
    title: "Designed to slow time",
    body: "Minimal interiors, cooling stone, and natural linens invite unhurried mornings, quiet reading hours, and slow afternoons between ocean and garden."
  },
  {
    title: "Foreign–only, intentionally intimate",
    body: "Curated for high-net-worth foreign travelers, Garden Retreat Cabana maintains a rare sense of discretion and considered, unintrusive service."
  }
];

export function StoryScroll() {
  return (
    <section className="bg-coconut">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              A Tropical Minimal Retreat
            </div>
            <h2 className="mt-4 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
              A boutique cocoon on Sri Lanka&apos;s serene southern coast.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-palm-dark/70">
              Inspired by the quiet luxury of Aman and the soul of Sri Lankan
              coastal life, Garden Retreat Cabana is an ultra-private hideaway
              where nature leads every moment. Here, garden, breeze, and ocean
              rhythm take precedence over noise, screens, and schedules.
            </p>
          </motion.div>
          <div className="space-y-10">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.05
                }}
                className="border-l border-sand-light/60 pl-6"
              >
                <h3 className="font-display text-lg tracking-[0.08em] text-palm-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


