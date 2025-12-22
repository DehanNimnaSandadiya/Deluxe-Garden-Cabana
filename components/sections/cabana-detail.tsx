"use client";

import { Cabana } from "@/data/cabanas";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  cabana: Cabana;
}

export function CabanaDetail({ cabana }: Props) {
  return (
    <section className="bg-coconut pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-24">
        <Link
          href="/cabanas"
          className="text-[11px] uppercase tracking-[0.3em] text-palm-dark/60"
        >
          ← All cabanas
        </Link>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              {cabana.category}
            </div>
            <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
              {cabana.name}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
              A calm, contemporary cabana within the Koko Hana Cabana
              Collection, designed with soft textures, natural light, and a
              quiet tropical palette to slow the rhythm of your stay.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-palm-dark/80">
              <span>{cabana.bed} bed</span>
              <span>• {cabana.rooms} room</span>
              <span>• {cabana.size}</span>
              <span>• Up to {cabana.capacity} guests</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-palm-dark px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-sand-light shadow-subtle transition hover:bg-black"
              >
                Book Now
              </Link>
              <a
                href="https://wa.me/94000000000"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-palm-dark/40 bg-transparent px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-palm-dark transition hover:border-palm-dark hover:bg-white/60"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-black/10 shadow-subtle">
              <div
                className="h-72 bg-cover bg-center sm:h-80"
                style={{ backgroundImage: `url(${cabana.heroImage})` }}
              />
            </div>
            <div className="grid gap-3 text-xs text-palm-dark/70 sm:grid-cols-3">
              {cabana.gallery.map((src) => (
                <div
                  key={src}
                  className="h-28 overflow-hidden rounded-2xl border border-white/40 bg-black/10"
                  style={{ backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="space-y-3">
            <h2 className="font-display text-lg tracking-[0.08em] text-palm-dark">
              Luxury details
            </h2>
            <ul className="space-y-2 text-sm text-palm-dark/80">
              {cabana.amenities.map((a) => (
                <li key={a}>• {a}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-lg tracking-[0.08em] text-palm-dark">
              Perfect for
            </h2>
            <ul className="space-y-2 text-sm text-palm-dark/80">
              {cabana.perfectFor.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="font-display text-lg tracking-[0.08em] text-palm-dark">
              The experience
            </h2>
            <p className="text-sm leading-relaxed text-palm-dark/80">
              Mornings unfold to the sound of palm leaves and distant ocean.
              The cabana remains intentionally simple—cool, quiet, and free from
              distraction—so that you can rest, reconnect, or simply exist in
              stillness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


