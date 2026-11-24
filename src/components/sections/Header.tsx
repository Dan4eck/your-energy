"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "О клубе", href: "#about" },
  { label: "Программа", href: "#program" },
  { label: "Авторы", href: "#author" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Вопросы", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/92 backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-4 py-4">
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="shrink-0 whitespace-nowrap font-serif text-[1.125rem] leading-none tracking-tight text-text sm:text-xl md:text-2xl"
        >
          YOUR ENERGY <em className="italic">space</em>
          <span className="mt-1 block font-sans text-[9px] uppercase tracking-[0.26em] text-text-muted sm:text-[10px] sm:tracking-[0.28em]">
            место твоей силы
          </span>
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 md:flex">
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

        <div className="flex shrink-0 items-center gap-2.5 md:hidden">
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-olive px-3.5 py-2 text-xs font-medium text-white transition-colors hover:bg-olive-hover"
          >
            Тарифы
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative flex h-9 w-9 cursor-pointer items-center justify-center border border-border bg-cream-dark/50 text-text transition-colors hover:border-olive"
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav aria-label="Мобильная навигация" className="overflow-hidden border-t border-border/60 bg-cream/98">
          <Container className="flex flex-col divide-y divide-border/60 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3.5 text-base text-text transition-colors hover:text-olive"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </nav>
      </div>
    </header>
  );
}
