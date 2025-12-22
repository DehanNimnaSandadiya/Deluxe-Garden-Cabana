export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-coconut/80">
      <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-palm-dark/60 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] tracking-[0.35em] uppercase">
              Koko Hana Cabana Collection
            </div>
            <div className="mt-2 font-display text-xl text-palm-dark">
              Deluxe Garden Cabana
            </div>
            <div className="mt-1 text-[11px]">
              Within coconut gardens of Matara, Sri Lanka
            </div>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="uppercase tracking-[0.25em] text-palm-dark/40">
              Reservations
            </div>
            <div>WhatsApp: +94 00 000 0000</div>
            <div>Email: stay@deluxegardencabana.com</div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/5 pt-4 text-[10px] text-palm-dark/40 sm:flex-row">
          <div>© {new Date().getFullYear()} Deluxe Garden Cabana.</div>
          <div className="space-x-4">
            <span>Privacy</span>
            <span>Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


