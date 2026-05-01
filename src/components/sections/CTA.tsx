import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="final-cta" className="py-24">
      <Container className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-text-muted">мягкость — это сила</p>
        <h2 className="mt-5 font-serif text-5xl leading-tight text-text md:text-7xl">
          Присоединяйся к пространству, где энергия становится твоей опорой
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          30 дней бережных практик, знаний и поддержки — без гонки, без давления и без работы на износ.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="#pricing">Выбрать подписку</Button>
          <Button href="#about" variant="outline">
            Вернуться к философии
          </Button>
        </div>
      </Container>
    </section>
  );
}
