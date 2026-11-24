import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TELEGRAM_PAYMENT_URL } from "@/lib/constants";

export function CTA() {
  return (
    <section id="final-cta" className="py-20 md:py-24">
      <Container className="max-w-5xl">
        <div className="border-y border-border py-14 text-center md:py-16">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">мягкость — это сила</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-[1.08] text-text md:text-5xl lg:text-6xl">
            Присоединяйся к пространству, где энергия становится твоей опорой
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Выбери один, три или шесть месяцев бережных практик, знаний и поддержки — без гонки, давления и работы на износ.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={TELEGRAM_PAYMENT_URL}>Написать для оплаты</Button>
            <Button href="#pricing" variant="outline">
              Сравнить тарифы
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
