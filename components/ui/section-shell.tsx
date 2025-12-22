import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionShellProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "left" | "center";
}

export function SectionShell({
  eyebrow,
  title,
  subtitle,
  children,
  align = "left"
}: SectionShellProps) {
  const isCenter = align === "center";
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-coconut via-coconut to-sand-light/20">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={isCenter ? "text-center" : "max-w-2xl"}
        >
          {eyebrow && (
            <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-3 font-display text-3xl tracking-[0.07em] text-palm-dark sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
              {subtitle}
            </p>
          )}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}


