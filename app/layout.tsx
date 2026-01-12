import "./globals.css";
import { ReactNode } from "react";
import { ClientLayout } from "@/components/client-layout";

export const metadata = {
  title: "Garden Retreat Cabana – Koko Hana Cabana Collection",
  description:
    "Ultra-private tropical luxury cabanas in Tissamaharama, Kataragama, Sri Lanka. A private escape within coconut gardens, crafted for silence, space, and slow living."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}


