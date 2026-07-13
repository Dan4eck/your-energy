import Image from "next/image";
import { Container } from "@/components/ui/Container";

const programItems = [
  "12 новых тренировок: растяжка, дыхательные практики, йога и занятия по осанке",
  "Подкаст с приглашенным экспертом: психологом, коучем или нутрициологом",
  "Разбор техники в Zoom",
  "Можно отправить фото и видео тренировок на разбор",
  "Поддерживающий чат без гонки и сравнения",
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
      <div className="absolute left-8 top-20 hidden h-32 w-24 border-l border-t border-olive/25 md:block" />
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-cream-dark p-3">
              <div className="absolute left-0 top-0 z-10 h-14 w-14 border-l-4 border-t-4 border-olive" />
              <div className="absolute bottom-0 right-0 z-10 h-14 w-14 border-b-4 border-r-4 border-olive" />
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
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.02] text-text md:text-6xl">
              Мягкая поддержка — на четырёх уровнях
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
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

        <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end md:mt-28">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Программа</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
              30 дней практик, чтобы поддержать энергию регулярно
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-text-muted">
            Каждый месяц внутри клуба открывается новый набор занятий и материалов: тренировки, экспертные разговоры, разборы и живое сопровождение в чате.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programItems.map((item, index) => (
            <div key={item} className="relative border border-border bg-cream-dark/45 p-6">
              <span className="absolute right-4 top-4 h-3 w-3 border border-olive/60" />
              <div className="mb-5 flex h-10 w-10 items-center justify-center bg-olive text-sm text-white">{index + 1}</div>
              <p className="text-lg leading-relaxed text-text">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
