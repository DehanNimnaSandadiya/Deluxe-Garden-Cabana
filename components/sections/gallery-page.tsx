"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Cabanas", "Gardens", "Experiences", "Honeymoon", "Family"] as const;
type Category = (typeof categories)[number];

interface ImageItem {
  src: string;
  category: Category;
}

const images: ImageItem[] = [
  {
    src: "/images/image1.jpeg",
    category: "Cabanas"
  },
  {
    src: "/images/image2.jpeg",
    category: "Gardens"
  },
  {
    src: "/images/image3.png",
    category: "Experiences"
  },
  {
    src: "/images/image.jpg",
    category: "Honeymoon"
  },
  {
    src: "/images/image4.jpg",
    category: "Family"
  },
  {
    src: "/images/image5.jpg",
    category: "Cabanas"
  },
  {
    src: "/images/image6.jpg",
    category: "Gardens"
  },
  {
    src: "/images/image7.jpg",
    category: "Experiences"
  },
  {
    src: "/images/image8.jpg",
    category: "Honeymoon"
  },
  {
    src: "/images/image3-alt.jpg",
    category: "Family"
  }
];

export function GalleryPage() {
  const [active, setActive] = useState<Category | "All">("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <section className="bg-coconut pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">Gallery</div>
          <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            Glimpses of cabanas, gardens, and the Tissamaharama coastline.
          </h1>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em]">
          <button
            onClick={() => setActive("All")}
            className={`rounded-full border px-4 py-2 transition ${
              active === "All"
                ? "border-palm-dark bg-palm-dark text-sand-light"
                : "border-palm-dark/20 bg-white/60 text-palm-dark/70 hover:border-palm-dark/60"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 transition ${
                active === cat
                  ? "border-palm-dark bg-palm-dark text-sand-light"
                  : "border-palm-dark/20 bg-white/60 text-palm-dark/70 hover:border-palm-dark/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 md:columns-3">
          {filtered.map((img) => (
            <motion.button
              key={img.src + img.category}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5 }}
              onClick={() => setLightbox(img.src)}
              className="mb-4 block w-full overflow-hidden rounded-3xl border border-white/60 bg-black/10 shadow-subtle"
            >
              <div
                className="h-52 w-full bg-cover bg-center transition duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${img.src})` }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-white/40 bg-black/40"
            >
              <div
                className="h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${lightbox})` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
