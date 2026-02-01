"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "It felt like the resort had been designed around our breathing. Nothing rushed, nothing loud, just an incredibly gentle experience.",
    guest: "Nimal Perera",
    origin: "Colombo, Sri Lanka"
  },
  {
    quote:
      "The most peaceful days of our honeymoon. The garden light, the silence, the way the staff anticipated needs quietly—it felt truly rare.",
    guest: "Chathurika & Ruwan Silva",
    origin: "Kandy, Sri Lanka"
  },
  {
    quote:
      "Our family stayed in the Coconut Grove cabana and found that rare balance of space for everyone, yet time together. Calm, considered, beautiful.",
    guest: "The Gunasekara Family",
    origin: "Galle, Sri Lanka"
  },
  {
    quote:
      "Ayubowan! The Island Serenity cabana was perfect for our anniversary. The coconut gardens and warm hospitality made us feel at home.",
    guest: "Sithara Fernando",
    origin: "Negombo, Sri Lanka"
  },
  {
    quote:
      "We travel often but Koko Hana stands out. The Palm Whisper cabana views, the attention to detail—mata hariyata hari. We will return.",
    guest: "Kamal & Sandya Jayawardena",
    origin: "Sri Lanka"
  },
  {
    quote:
      "A haven of peace. The Garden Breeze cabana lived up to its name—gentle winds, lush green, and the most restful sleep we have had.",
    guest: "Dilshan Wickramasinghe",
    origin: "Matara, Sri Lanka"
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


