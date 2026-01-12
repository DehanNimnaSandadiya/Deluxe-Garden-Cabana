"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  CONTACT_EMAIL_MAILTO,
  GOOGLE_MAPS_URL
} from "@/data/constants";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-coconut pt-28">
      <div className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-palm-dark/50">
            Contact & Booking
          </div>
          <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            Begin your stay at Garden Retreat Cabana.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
            Share your ideal dates, number of guests, and preferred cabana
            type. Our reservations team will respond personally with options and
            details.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 rounded-3xl border border-white/60 bg-white/80 p-6 text-sm text-palm-dark shadow-subtle backdrop-blur-sm"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                  placeholder="you@example.com"
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Preferred check-in">
                <input
                  type="date"
                  className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                />
              </Field>
              <Field label="Preferred check-out">
                <input
                  type="date"
                  className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Guests">
                <input
                  type="number"
                  min={1}
                  className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                  placeholder="2"
                />
              </Field>
              <Field label="Preferred cabana type">
                <select className="w-full border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark">
                  <option>Garden Retreat</option>
                  <option>Tropical View</option>
                  <option>Honeymoon Coconut</option>
                  <option>Family Nature</option>
                  <option>Premium Garden</option>
                  <option>Open to recommendation</option>
                </select>
              </Field>
            </div>
            <Field label="Message or special requests">
              <textarea
                rows={4}
                className="w-full resize-none border-b border-sand-light/70 bg-transparent px-0 py-2 text-xs outline-none focus:border-palm-dark"
                placeholder="Share more about your ideal stay, occasion, or any special requests."
              />
            </Field>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="rounded-full bg-palm-dark px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-sand-light shadow-subtle transition hover:bg-black"
              >
                Submit enquiry
              </button>
              <a
                href={`https://wa.me/${CONTACT_PHONE.replace(/\s/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] uppercase tracking-[0.3em] text-palm-dark/80 underline-offset-4 hover:underline"
              >
                Or WhatsApp our team
              </a>
            </div>
            {submitted && (
              <p className="text-[11px] text-palm-dark/60">
                Thank you. This demo form does not send data, but in production
                your message would be received by the reservations team.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-xs text-palm-dark/80"
          >
            <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-subtle backdrop-blur-sm">
              <div className="uppercase tracking-[0.3em] text-palm-dark/50">
                Contact Information
              </div>
              <div className="mt-3 space-y-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-palm-dark/50">
                    Phone
                  </div>
                  <a
                    href={CONTACT_PHONE_TEL}
                    className="mt-1 block text-sm hover:text-palm-dark transition-colors"
                  >
                    {CONTACT_PHONE}
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-palm-dark/50">
                    Email
                  </div>
                  <a
                    href={CONTACT_EMAIL_MAILTO}
                    className="mt-1 block text-sm hover:text-palm-dark transition-colors break-all"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-palm-dark/50">
                    Address
                  </div>
                  <div className="mt-1 text-sm leading-relaxed">
                    {CONTACT_ADDRESS}
                  </div>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[11px] text-sunset-muted hover:text-palm-dark underline-offset-2 hover:underline transition-colors"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-subtle">
              <iframe
                title="Tissamaharama, Kataragama, Sri Lanka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63314.013810598094!2d80.4687711!3d5.95492035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae139210c7a0a1b%3A0x5f3b2cda4b2c1f0d!2sTissamaharama!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-[11px] uppercase tracking-[0.25em] text-palm-dark/60">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}


