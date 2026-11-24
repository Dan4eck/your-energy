import { Container } from "@/components/ui/Container";
import { TELEGRAM_PAYMENT_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} YOUR ENERGY space — место твоей силы
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
          <a href="#about" className="transition-colors hover:text-text">О клубе</a>
          <a href="#program" className="transition-colors hover:text-text">Программа</a>
          <a href="#pricing" className="transition-colors hover:text-text">Тарифы</a>
          <a href="#faq" className="transition-colors hover:text-text">Вопросы</a>
          <a
            href={TELEGRAM_PAYMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-text"
          >
            Оплата в Telegram
          </a>
          <a href="#" className="transition-colors hover:text-text">Публичная оферта</a>
          <a href="#" className="transition-colors hover:text-text">Политика конфиденциальности</a>
        </div>
      </Container>
    </footer>
  );
}
