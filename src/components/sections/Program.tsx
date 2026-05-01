import { Container } from "@/components/ui/Container";

const programItems = [
  "16 новых тренировок каждый месяц",
  "Растяжка, йога и занятия по осанке",
  "Дыхательные практики для восстановления состояния",
  "Подкасты и разборы с приглашенными экспертами",
  "Возможность отправлять фото и видео тренировок на разбор",
  "Поддерживающий чат без гонки и сравнения",
];

const directions = [
  { title: "Тело", text: "растяжка, мягкая мобильность, йога и бережная работа с осанкой" },
  { title: "Состояние", text: "дыхательные практики, расслабление и внимание к сигналам тела" },
  { title: "Знания", text: "подкасты и разборы с психологами, коучами и нутрициологами" },
  { title: "Поддержка", text: "чат, обратная связь и возможность показать технику на фото или видео" },
];

export function Program() {
  return (
    <section id="program" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
            <div key={item} className="rounded-[1.5rem] border border-border bg-cream-dark/45 p-6">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-olive text-sm text-white">
                {index + 1}
              </div>
              <p className="text-lg leading-relaxed text-text">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {directions.map((direction) => (
            <article key={direction.title} className="border-t border-border pt-6">
              <h3 className="font-serif text-3xl text-text">{direction.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{direction.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
