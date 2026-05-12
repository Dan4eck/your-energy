import Image from "next/image";
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
    <section id="about" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute left-8 top-20 hidden h-32 w-24 border-l border-t border-olive/25 md:block" />
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-cream-dark p-3">
            <div className="absolute left-0 top-0 z-10 h-14 w-14 border-l-4 border-t-4 border-olive" />
            <div className="absolute bottom-0 right-0 z-10 h-14 w-14 border-b-4 border-r-4 border-olive" />
            <Image
              src="/images/club-author.jpeg"
              alt="Одна из авторов клуба YOUR ENERGY space во время йога-практики"
              width={853}
              height={1280}
              className="h-full w-full object-cover object-[50%_62%]"
              sizes="(min-width: 768px) 42vw, 100vw"
            />
            <div className="absolute bottom-7 left-7 border-l-4 border-olive bg-cream/92 px-5 py-3 text-sm text-text backdrop-blur-sm">
              Салта
            </div>
          </div>
        </div>

        <div className="border-l border-olive/30 pl-6 md:pl-8">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">О клубе</p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] text-text md:text-6xl lg:text-7xl">
            Мягкие инструменты поддерживают твою энергию
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
            Мы не работаем на износ, а учимся чувствовать свое тело, управлять состоянием и выстраивать энергию, которая остается в жизни, а не только после тренировки.
          </p>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="group grid gap-3 py-6 transition-colors duration-200 md:grid-cols-[0.42fr_0.58fr] md:gap-8"
              >
                <h3 className="font-serif text-3xl italic leading-none text-text transition-colors duration-200 group-hover:text-olive md:text-4xl">
                  {principle.title}
                </h3>
                <p className="leading-relaxed text-text-muted">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
