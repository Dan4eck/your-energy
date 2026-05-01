import { Container } from "@/components/ui/Container";

const authors = [
  {
    name: "Салтанат Ромашова",
    short: "Салта",
    role: "Инструктор групповых программ, психолог",
    facts: [
      "Более 10 лет опыта в преподавании стретчинга",
      "Создала онлайн-клуб с тренировками, в котором побывали 300 человек",
    ],
    note: "Фото Салтанат ожидаем от клиента.",
  },
  {
    name: "Данильчук Ксения",
    short: "Ксюша",
    role: "Преподаватель йоги",
    facts: [
      "5 лет опыта преподавания йоги",
      "С 2022 года проводит йога-выезды, на которых побывали более 150 человек",
    ],
    note: "Фото Ксении не было передано отдельно; пока используем текстовую карточку.",
  },
];

export function Author() {
  return (
    <section id="author" className="py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Авторы клуба</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
            Вас приветствуют Ксюша и Салта
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Здесь мы хотим поделиться знаниями, опытом и экспертами, которые поменяли нашу жизнь за последние 10 лет.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {authors.map((author) => (
            <article
              key={author.name}
              className="flex h-full flex-col rounded-[2rem] border border-border bg-cream-dark/45 p-8"
            >
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-olive/15 font-serif text-4xl italic text-olive">
                {author.short.slice(0, 1)}
              </div>
              <h3 className="font-serif text-4xl text-text">{author.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-text-muted">{author.role}</p>
              <ul className="mt-8 space-y-4 text-lg leading-relaxed text-text-muted">
                {author.facts.map((fact) => (
                  <li key={fact} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-olive" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-full bg-cream px-5 py-3 text-sm text-text-muted">
                {author.note}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
