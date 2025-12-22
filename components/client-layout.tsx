"use client";

import { ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LenisProvider } from "@/components/lenis-provider";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("bg-coconut", "text-palm-dark");
  }, []);

  return (
    <LenisProvider>
      <div className="min-h-screen flex flex-col">
        <MainNav />
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </LenisProvider>
  );
}

