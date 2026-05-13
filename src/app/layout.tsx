import type { Metadata } from "next";
import { Manrope, Tenor_Sans } from "next/font/google";
import "./globals.css";

const display = Tenor_Sans({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR ENERGY space — место твоей силы",
  description:
    "Онлайн-клуб мягкой поддержки энергии: 30 дней, 16 новых тренировок, дыхательные практики, йога, осанка, эксперты и поддерживающий чат.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
