import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aditi Sharma Digital Marketing Specialist",
  description:
    "Aditi Sharma Digital Marketing Specialist and Digital Marketing Expert helping businesses grow through SEO, content, paid advertising, and email marketing.",
  keywords: [
    "Aditi Sharma",
    "Aditi Sharma Digital Marketing Specialist",
    "Aditi Sharma Digital Marketing Expert",
  ],
  verification: {
    google: "Up82_Q8Tt7YP6A_fvghbbLUG0Kgk4kxNHRNub4SKDKM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
