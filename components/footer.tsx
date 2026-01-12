"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL_MAILTO,
  GOOGLE_MAPS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  BRAND_TAGLINE
} from "@/data/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coconut/80">
      <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-palm-dark/60 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase">
              Koko Hana Cabana Collection
            </div>
            <div className="mt-2 font-display text-xl text-palm-dark">
              Garden Retreat Cabana
            </div>
            <div className="mt-1 text-[11px] text-palm-dark/50 italic">
              {BRAND_TAGLINE}
            </div>
            <div className="mt-1 text-[11px]">
              Within coconut gardens of Tissamaharama, Kataragama, Sri Lanka
            </div>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="uppercase tracking-[0.25em] text-palm-dark/40">
              Contact
            </div>
            <div>
              <a
                href={CONTACT_PHONE_TEL}
                className="hover:text-palm-dark transition-colors"
              >
                {CONTACT_PHONE}
              </a>
            </div>
            <div>
              <a
                href={CONTACT_EMAIL_MAILTO}
                className="hover:text-palm-dark transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="pt-1">
              <div className="text-[10px] text-palm-dark/50 mb-1">Address:</div>
              <div className="text-[10px] leading-relaxed">{CONTACT_ADDRESS}</div>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-[10px] text-sunset-muted hover:text-palm-dark underline-offset-2 hover:underline transition-colors"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
          <div className="space-y-2 text-[11px]">
            <div className="uppercase tracking-[0.25em] text-palm-dark/40">
              Follow Us
            </div>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-palm-dark/70 hover:text-palm-dark transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-palm-dark/70 hover:text-palm-dark transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/5 pt-4 text-[10px] text-palm-dark/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Garden Retreat Cabana.</div>
          <div className="space-x-4">
            <span>Privacy</span>
            <span>Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


