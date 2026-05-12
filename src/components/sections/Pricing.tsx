import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const includes = [
  "30 дней доступа к клубу",
  "16 новых тренировок месяца",
  "Экспертные подкасты и разборы",
  "Поддерживающий чат участниц",
  "Возможность отправить фото или видео на разбор",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container className="max-w-4xl">
        <div className="relative border border-border bg-cream-dark/60 p-8 md:p-12">
          <div className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-olive/70" />
          <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-olive/70" />
          <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Тариф</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
                Подписка на 30 дней
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-text-muted">
                Один понятный формат доступа ко всем тренировкам, материалам, разбору практик и поддержке внутри клуба.
              </p>
              <ul className="mt-8 space-y-3 text-text-muted">
                {includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-olive" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-cream p-8 text-center">
              <p className="text-sm uppercase tracking-[0.22em] text-text-muted">Стоимость</p>
              <div className="mt-4 font-serif text-5xl text-text">12 000 ₸</div>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                Можно оплатить в любой валюте — напишите нам, и мы подскажем удобный способ оплаты.
              </p>
              <div className="mt-8">
                <Button href="#final-cta" className="w-full">
                  Связаться для оплаты
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
