"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cabanas } from "@/data/cabanas";

export function FeaturedCabanas() {
  const featured = cabanas.slice(0, 3);

  return (
    <section className="border-y border-white/10 bg-coconut">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              Cabanas
            </div>
            <h2 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
              Ultra-private cabanas, hidden between coconut and garden.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
              Each Koko Hana cabana is intentionally limited in number and
              placed with care — more space between neighbors, more sky between
              palms, more quiet between moments.
            </p>
          </div>
          <Link
            href="/cabanas"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.35em] text-palm-dark/70"
          >
            Explore all cabanas
            <span className="ml-3 h-px w-8 bg-palm-dark/40" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featured.map((cabana, index) => (
            <Link key={cabana.slug} href={`/cabanas/${cabana.slug}`} className="block">
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/70 shadow-subtle backdrop-blur-sm transition hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="h-52 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${cabana.heroImage})` }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/0" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-palm-dark/50">
                    {cabana.category}
                  </div>
                  <h3 className="mt-2 font-display text-lg tracking-[0.08em] text-palm-dark">
                    {cabana.name}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-palm-dark/70">
                    <span>{cabana.bed}</span>
                    <span>• {cabana.rooms} Room</span>
                    <span>• {cabana.size}</span>
                    <span>• Up to {cabana.capacity} guests</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-[11px] text-palm-dark/70">
                    <span className="uppercase tracking-[0.35em]">
                      View details
                    </span>
                    <span className="h-px w-8 bg-palm-dark/40" />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


