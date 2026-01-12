"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cabanas, CabanaCategory } from "@/data/cabanas";

const groups: { title: CabanaCategory; items: string[] }[] = [
  {
    title: "Garden Retreat Cabana",
    items: [
      "Koko Hana – Coconut Bloom Cabana | King | 1 | 20–25 m² | 2",
      "Koko Hana – Garden Breeze Cabana | King | 1 | 20–25 m² | 2"
    ]
  },
  {
    title: "Tropical View Cabana",
    items: [
      "Koko Hana – Palm Whisper Cabana | King | 1 | 20–25 m² | 2",
      "Koko Hana – Tropical Nest Cabana | King | 1 | 20–25 m² | 2"
    ]
  },
  {
    title: "Honeymoon Coconut Cabana",
    items: [
      "Koko Hana – Island Serenity Cabana | King | 1 | 30–35 m² | 2"
    ]
  },
  {
    title: "Family Nature Cabana",
    items: [
      "Koko Hana – Coconut Grove Cabana | Twin / King | 1 | 30–35 m² | 3–4"
    ]
  },
  {
    title: "Premium Garden Cabana",
    items: [
      "Koko Hana – Golden Palm Cabana | King | 1 | 25–30 m² | 2"
    ]
  }
];

export function CabanaList() {
  return (
    <section className="bg-coconut pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
            Cabanas
          </div>
          <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            A limited collection of garden, tropical, honeymoon, and family
            cabanas.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
            Each cabana in the Koko Hana Cabana Collection is individually
            positioned within the coconut gardens and designed with the same
            quiet, minimal language of luxury.
          </p>
        </motion.div>

        <div className="mt-10 space-y-10">
          {groups.map((group, groupIndex) => (
            <motion.section
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.05 }}
              className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-subtle backdrop-blur-sm"
            >
              <h2 className="font-display text-xl tracking-[0.08em] text-palm-dark">
                {group.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm text-palm-dark/80">
                {group.items.map((item) => {
                  const name = item.split("|")[0].trim();
                  const cabana = cabanas.find((c) => c.name === name);
                  return (
                    <div
                      key={item}
                      className="flex flex-wrap items-center justify-between gap-3 border-t border-sand-light/50 pt-3 first:border-t-0 first:pt-0"
                    >
                      <div className="flex-1">
                        <div className="font-medium">{item}</div>
                      </div>
                      {cabana && (
                        <Link
                          href={`/cabanas/${cabana.slug}`}
                          className="text-[11px] uppercase tracking-[0.3em] text-palm-dark/70 underline-offset-4 hover:underline"
                        >
                          View details
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}


