import { Container } from "@/components/ui/Container";

const principles = [
  {
    title: "мягкость — это сила",
    text: "Без насилия над собой, но с глубиной и регулярностью.",
  },
  {
    title: "энергия вместо выгорания",
    text: "Не быстрее и больше, а глубже и стабильнее.",
  },
  {
    title: "пространство без сравнения",
    text: "Без гонки, без давления и без обязательного «надо».",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">О клубе</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
            Клуб, где мягкие инструменты поддерживают твою энергию
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-text-muted md:text-2xl">
            Здесь мы не работаем на износ. Мы учимся чувствовать свое тело, управлять своим состоянием и выстраивать энергию, которая остается с тобой в жизни, а не только после тренировки.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-[2rem] border border-border bg-cream-dark/55 p-7 transition-transform duration-200 hover:-translate-y-1"
            >
              <h3 className="font-serif text-3xl italic text-text">{principle.title}</h3>
              <p className="mt-4 leading-relaxed text-text-muted">{principle.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
