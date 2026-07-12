import { Container } from "@/components/ui/Container";

export function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <Container className="max-w-5xl">
        <div className="border-y border-border px-6 py-16 text-center md:px-16 md:py-24">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Отзывы</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-text md:text-6xl">
            Отзывы участниц появятся здесь совсем скоро
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
            Мы собираем настоящие истории о практике, состоянии и маленьких изменениях, которые остаются в жизни.
          </p>
          <span className="mt-9 inline-flex border border-olive/35 px-4 py-2 text-xs uppercase tracking-[0.18em] text-olive">
            Готовим реальные отзывы
          </span>
        </div>
      </Container>
    </section>
  );
}
