import { Container } from "@/components/ui/Container";

const reviews = [
  {
    title: "Стало легче возвращаться к себе",
    text: "Мне понравился спокойный темп: можно заниматься без ощущения, что я отстаю. После практик тело мягче, а голова спокойнее.",
  },
  {
    title: "Наконец-то без давления",
    text: "Клуб ощущается как место, где не нужно никому ничего доказывать. Есть структура, поддержка и понятные практики на каждый день.",
  },
  {
    title: "Полезны разборы и чат",
    text: "Особенно ценно, что можно задать вопрос и отправить видео на разбор. Так появляется уверенность, что делаю упражнения бережно.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Отзывы</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
              Истории участниц
            </h2>
            <p className="mt-6 rounded-[1.5rem] border border-border bg-cream-dark/45 p-5 text-sm leading-relaxed text-text-muted">
              Черновые отзывы ниже придуманы мной как пример наполнения, потому что реальные отзывы клиент пока не передал. Перед публикацией их нужно заменить на настоящие цитаты участниц.
            </p>
          </div>

          <div className="grid gap-5">
            {reviews.map((review) => (
              <article key={review.title} className="rounded-[2rem] border border-border bg-cream-dark/45 p-7">
                <div className="mb-4 inline-flex rounded-full bg-cream px-4 py-2 text-xs uppercase tracking-[0.18em] text-text-muted">
                  черновик, придумано мной
                </div>
                <h3 className="font-serif text-3xl text-text">{review.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-text-muted">“{review.text}”</p>
                <p className="mt-5 text-sm text-text-muted">— Участница клуба</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
