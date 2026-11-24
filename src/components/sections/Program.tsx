import Image from "next/image";
import { Container } from "@/components/ui/Container";

const programItems = [
  {
    title: "12 новых тренировок",
    description: "Растяжка, дыхательные практики, йога и занятия по осанке каждый месяц в удобной записи.",
  },
  {
    title: "Подкаст с приглашенным экспертом",
    description: "Разговоры и практические разборы с психологом, коучем или нутрициологом.",
  },
  {
    title: "Разбор техники в Zoom",
    description: "Живая онлайн-встреча с преподавателями для вопросов и бережной настройки техники.",
  },
  {
    title: "Обратная связь по фото и видео",
    description: "Можно отправить фото и видео тренировок на разбор, чтобы получить персональные рекомендации.",
  },
  {
    title: "Поддерживающий чат",
    description: "Тёплое сообщество участниц без гонки, давления и сравнения, где проще держать ритм.",
  },
];

const directions = [
  {
    title: "Тело",
    text: "движение и ресурс",
    icon: "/images/orbit-body.png",
  },
  {
    title: "Состояние",
    text: "эмоции и баланс",
    icon: "/images/orbit-state.png",
  },
  {
    title: "Знания",
    text: "практики и осознанность",
    icon: "/images/orbit-knowledge.png",
  },
  {
    title: "Поддержка",
    text: "сообщество и окружение",
    icon: "/images/orbit-support.png",
  },
];

export function Program() {
  return (
    <section id="program" className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-cream-dark p-3">
              <div className="absolute left-0 top-0 z-10 h-14 w-14 border-l border-t border-olive/70" />
              <div className="absolute bottom-0 right-0 z-10 h-14 w-14 border-b border-r border-olive/70" />
              <Image
                src="/images/program-yoga.jpg"
                alt="Практика йоги в YOUR ENERGY space"
                width={665}
                height={887}
                className="h-full w-full object-cover object-center"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
              <div className="absolute bottom-7 left-7 border-l-4 border-olive bg-cream/92 px-5 py-3 text-sm text-text backdrop-blur-sm">
                тело, состояние, знания
              </div>
            </div>
          </div>

          <div className="border-l border-olive/30 pl-6 md:pl-8">
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Направления клуба</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.06] text-text md:text-5xl lg:text-6xl">
              Мягкая поддержка — на четырёх уровнях
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
              Через тело, состояние, знания и окружение мы выстраиваем энергию, которая остаётся с тобой и за пределами тренировки.
            </p>

            <ol className="mt-10 flex flex-col divide-y divide-border border-y border-border">
              {directions.map((direction, index) => (
                <li key={direction.title} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 md:gap-7 md:py-7">
                  <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full border border-olive/55 bg-cream-dark/45 transition-colors duration-200 group-hover:bg-cream-dark md:h-18 md:w-18">
                    <Image src={direction.icon} alt="" width={72} height={72} className="h-[68%] w-[68%]" />
                  </span>
                  <div>
                    <h3 className="font-serif text-3xl leading-none text-text transition-colors duration-200 group-hover:text-olive md:text-4xl">
                      {direction.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold leading-relaxed text-text-muted md:text-base">{direction.text}</p>
                  </div>
                  <span className="hidden font-serif text-3xl leading-none text-olive/35 md:block">0{index + 1}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end md:mt-32">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Программа</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-text md:text-5xl lg:text-6xl">
              30 дней практик, чтобы поддержать энергию регулярно
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-text-muted">
            Каждый месяц внутри клуба открывается новый набор занятий и материалов: тренировки, экспертные разговоры, разборы и живое сопровождение в чате.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {programItems.map((item, index) => (
            <article
              key={item.title}
              className={`flex flex-col border border-border/80 bg-cream-dark/45 p-7 transition-colors duration-200 hover:border-olive/55 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              } ${index === 4 ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-olive text-sm font-medium text-white">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-serif text-2xl leading-snug text-text">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
