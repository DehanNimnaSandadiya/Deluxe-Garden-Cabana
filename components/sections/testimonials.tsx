"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "It felt like the resort had been designed around our breathing. Nothing rushed, nothing loud, just an incredibly gentle experience.",
    guest: "A. Meyer",
    origin: "Zurich, Switzerland"
  },
  {
    quote:
      "The most peaceful days of our honeymoon. The garden light, the silence, the way the staff anticipated needs quietly—it felt truly rare.",
    guest: "L. & J. Carter",
    origin: "London, United Kingdom"
  },
  {
    quote:
      "Our family stayed in the coconut grove cabana and found that rare balance of space for everyone, yet time together. Calm, considered, beautiful.",
    guest: "The Nakamura Family",
    origin: "Tokyo, Japan"
  }
];

export function Testimonials() {
  return (
    <section className="bg-coconut">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="text-center">
          <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
            Guest Impressions
          </div>
          <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            Quiet stories from the coconut gardens.
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.guest}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-white/80 p-6 shadow-subtle backdrop-blur-sm"
            >
              <blockquote className="text-sm leading-relaxed text-palm-dark/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-palm-dark/70">
                <div className="font-medium">{t.guest}</div>
                <div className="text-palm-dark/50">{t.origin}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


