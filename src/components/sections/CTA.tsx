import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl text-center">
        <h2 className="font-serif text-5xl leading-tight text-text md:text-6xl">
          Начни заботиться <em className="italic">о себе</em> сегодня
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">
          Присоединяйся к клубу и получи доступ к 16 уникальным тренировкам в этом месяце.
        </p>
        <div className="mt-8">
          <Button>Начать заниматься</Button>
        </div>
      </Container>
    </section>
  );
}
