"use client";

import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Формат", href: "#program" },
  { label: "Автор", href: "#author" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Начать", href: "#pricing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-tight text-text">
          sculpt <em className="italic">your</em> body&mind
        </a>
        <nav className="hidden items-center gap-8 md:flex">
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
