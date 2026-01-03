"use client";

import { motion } from "framer-motion";

export function ExperiencePage() {
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
            Experience
          </div>
          <h1 className="mt-3 font-display text-3xl tracking-[0.08em] text-palm-dark sm:text-4xl">
            A nature-first, coastal rhythm in Tissamaharama, Kataragama.
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-palm-dark/70">
            Deluxe Garden Cabana is crafted as a soft landing on Sri Lanka&apos;s
            southern coast. Days here flow between coconut shade, warm ocean,
            and the quiet rituals of island living.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <ExperienceBlock
            title="Nature & garden living"
            body="Cabanas sit lightly within mature coconut gardens, framed by native greenery, soft sand paths, and filtered morning light. Interiors echo the landscape: stone, wood, linen, and subtle, grounding tones."
          />
          <ExperienceBlock
            title="Tissamaharama coastal lifestyle"
            body="Just moments from the ocean, the days are shaped by tides and sky. Swim at sunrise, wander to nearby beaches, or simply watch the color of the day change from the quiet of your terrace."
          />
          <ExperienceBlock
            title="Privacy & silence"
            body="With a boutique number of cabanas and intentionally generous spacing, the resort maintains a natural hush. Service is present yet unobtrusive—anticipating needs without interrupting stillness."
          />
          <ExperienceBlock
            title="Honeymoon experiences"
            body="For honeymooners, Island Serenity cabanas offer discreet indulgence: slow in-cabana breakfasts, bath rituals, and curated moments that feel personal rather than performative."
          />
          <ExperienceBlock
            title="Family nature stays"
            body="Family cabanas are designed for togetherness without feeling crowded—shaded outdoor lounges, flexible bedding, and thoughtful details that keep the pace gentle for both adults and children."
          />
          <ExperienceBlock
            title="Wellness & slow travel"
            body="The resort encourages a slower way of being. Soft movement at sunrise, unhurried meals, digital-light days, and connections to local practitioners for yoga, bodywork, or breath-focused sessions."
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceBlock({ title, body }: { title: string; body: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-subtle backdrop-blur-sm"
    >
      <h2 className="font-display text-lg tracking-[0.08em] text-palm-dark">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-palm-dark/80">{body}</p>
    </motion.article>
  );
}


