"use client";

import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Авторы", href: "#author" },
  { label: "Тариф", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur-sm">
      <Container className="flex min-h-20 items-center justify-between gap-6 py-4">
        <a href="#" className="font-serif text-xl leading-none tracking-tight text-text md:text-2xl">
          YOUR ENERGY <em className="italic">space</em>
          <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-text-muted">
            место твоей силы
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
