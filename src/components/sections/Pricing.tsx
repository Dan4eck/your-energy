import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TELEGRAM_PAYMENT_URL } from "@/lib/constants";

const includes = [
  "Доступ ко всем материалам клуба",
  "12 новых тренировок месяца",
  "Экспертные подкасты и разборы",
  "Поддерживающий чат участниц",
  "Возможность отправить фото или видео на разбор",
];

const plans = [
  {
    duration: "1 месяц",
    access: "30 дней доступа",
    price: "12 000 ₸",
    priceRub: "2 500 ₽",
    monthly: "12 000 ₸ · 2 500 ₽ / месяц",
  },
  {
    duration: "3 месяца",
    access: "90 дней доступа",
    price: "34 200 ₸",
    priceRub: "6 800 ₽",
    oldPrice: "36 000 ₸",
    monthly: "11 400 ₸ · ~2 270 ₽ / месяц",
    discount: "−5%",
  },
  {
    duration: "6 месяцев",
    access: "180 дней доступа",
    price: "64 800 ₸",
    priceRub: "12 900 ₽",
    oldPrice: "72 000 ₸",
    monthly: "10 800 ₸ · 2 150 ₽ / месяц",
    discount: "−10%",
    featured: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container className="max-w-6xl">
        <div className="relative border border-border bg-cream-dark/60 p-6 sm:p-8 md:p-12">
          <div className="absolute -left-3 -top-3 h-10 w-10 border-l border-t border-olive/70" />
          <div className="absolute -bottom-3 -right-3 h-10 w-10 border-b border-r border-olive/70" />
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Тарифы</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
              Выбери свой ритм
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Во всех тарифах — полный доступ к тренировкам, материалам, разборам практик и поддержке внутри клуба.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {plans.map((plan) => (
              <article
                key={plan.duration}
                className={`relative flex flex-col border p-7 ${
                  plan.featured
                    ? "border-olive bg-olive text-white"
                    : "border-border bg-cream text-text"
                }`}
              >
                {plan.discount && (
                  <span
                    className={`absolute right-5 top-5 rounded-full px-3 py-1 text-xs font-medium ${
                      plan.featured ? "bg-cream text-text" : "bg-olive text-white"
                    }`}
                  >
                    {plan.discount}
                  </span>
                )}
                <p
                  className={`text-sm uppercase tracking-[0.22em] ${
                    plan.featured ? "text-white/70" : "text-text-muted"
                  }`}
                >
                  {plan.access}
                </p>
                <h3 className="mt-5 font-serif text-4xl leading-tight">{plan.duration}</h3>
                <div className="mt-8">
                  <div
                    className={`min-h-5 text-sm line-through ${
                      plan.featured ? "text-white/55" : "text-text-muted"
                    }`}
                  >
                    {plan.oldPrice ?? ""}
                  </div>
                  <div className="mt-1 font-serif text-4xl leading-none">{plan.price}</div>
                  <div
                    className={`mt-2 font-serif text-2xl leading-none ${
                      plan.featured ? "text-white/85" : "text-olive"
                    }`}
                  >
                    {plan.priceRub}
                  </div>
                  <p
                    className={`mt-3 text-sm ${
                      plan.featured ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {plan.monthly}
                  </p>
                </div>
                <div className="mt-auto pt-8">
                  <Button
                    href={TELEGRAM_PAYMENT_URL}
                    variant={plan.featured ? "outline" : "primary"}
                    className={`w-full ${
                      plan.featured
                        ? "border-white text-white hover:bg-white hover:text-olive"
                        : ""
                    }`}
                  >
                    Выбрать {plan.duration}
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-[1fr_0.9fr] md:items-start">
            <ul className="grid gap-3 text-text-muted sm:grid-cols-2">
              {includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-olive" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="md:text-right">
              <p className="text-sm leading-relaxed text-text-muted">
                Оплата оформляется напрямую у преподавателя в Telegram — можно оплатить в тенге, рублях или любой другой валюте, Ксюша подскажет удобный способ.
              </p>
              <a
                href={TELEGRAM_PAYMENT_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block font-medium text-olive underline decoration-olive/35 underline-offset-4 transition-colors hover:text-olive-hover"
              >
                @itsyogawithksu
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
