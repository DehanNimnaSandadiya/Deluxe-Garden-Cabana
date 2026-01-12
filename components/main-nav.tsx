"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_TAGLINE } from "@/data/constants";

const links = [
  { href: "/", label: "Home" },
  { href: "/cabanas", label: "Cabanas" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-coconut/70 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="Garden Retreat Cabana Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-palm-dark/60">
              Koko Hana Cabana Collection
            </div>
            <div className="font-display text-xl tracking-wide text-palm-dark group-hover:text-sunset-muted transition-colors">
              Garden Retreat Cabana
            </div>
            <div className="text-[11px] text-palm-dark/50 italic">
              {BRAND_TAGLINE}
            </div>
            <div className="text-[11px] text-palm-dark/40">
              Tissamaharama, Kataragama, Sri Lanka
            </div>
          </div>
        </Link>
        <div className="hidden gap-6 text-xs tracking-[0.25em] uppercase text-palm-dark/60 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-colors hover:text-palm-dark ${
                pathname === link.href ? "text-palm-dark" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-sunset-muted/70 transition-transform ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-full border border-sunset-muted/40 bg-white/70 px-5 py-2 text-[11px] tracking-[0.3em] uppercase text-palm-dark shadow-sm shadow-sand-light/60 transition hover:border-sunset-muted hover:bg-white md:inline-flex"
        >
          Book Your Stay
        </Link>
      </nav>
    </header>
  );
}


