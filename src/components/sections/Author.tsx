import { Container } from "@/components/ui/Container";
import Image from "next/image";

const authorColumns = [
  {
    name: "Салта",
    direction: "Тело",
    align: "left",
    points: [
      {
        title: "движение",
        text: "умные практики\nдля силы и гибкости",
      },
      {
        title: "ресурс",
        text: "восстановление\nчерез тело",
      },
      {
        title: "мягкая сила",
        text: "женственность\nи устойчивость",
      },
    ],
    note: "Тело — наш проводник в жизнь.",
    image: "/images/author-salta.jpg",
    imageAlt: "Портрет Салты, автора направления тела в YOUR ENERGY space",
  },
  {
    name: "Ксюша",
    direction: "Состояние",
    align: "right",
    points: [
      {
        title: "баланс",
        text: "гармония внутри\nи снаружи",
      },
      {
        title: "осознанность",
        text: "практики внимания\nи присутствия",
      },
      {
        title: "поддержка",
        text: "бережное пространство\nи комьюнити",
      },
    ],
    note: "Состояние — это наш внутренний дом.",
    image: "/images/author-ksyusha.jpg",
    imageAlt: "Ксюша во время медитации у моря, автор направления состояния в YOUR ENERGY space",
  },
];

function AuthorGuide({
  author,
}: {
  author: (typeof authorColumns)[number];
}) {
  return (
    <aside
      className={[
        "flex flex-col gap-8 text-text md:max-w-[190px] lg:max-w-[220px]",
        author.align === "right" ? "md:text-left" : "",
      ].join(" ")}
    >
      <div>
        <h3 className="font-serif text-4xl leading-none text-olive md:text-5xl">
          {author.name}
        </h3>
        <div className="mt-6 flex items-center gap-5">
          <span className="h-px w-12 bg-olive" />
          <p className="font-serif text-2xl text-text md:text-3xl">
            {author.direction}
          </p>
        </div>
      </div>

      <ol className="relative ml-1 flex flex-col gap-9 border-l border-olive/35 pl-7">
        {author.points.map((point) => (
          <li key={point.title} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 bg-olive" />
            <p className="text-sm font-semibold lowercase text-text">{point.title}</p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-text-muted">
              {point.text}
            </p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function AuthorPhoto({
  image,
  imageAlt,
  note,
}: {
  image: string;
  imageAlt: string;
  note: string;
}) {
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="relative aspect-[3/4] overflow-hidden border border-olive/25 bg-cream-dark/35 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 390px, (min-width: 1024px) 330px, calc(100vw - 48px)"
          className="object-cover"
        />
      </div>
      <figcaption className="mx-auto -mt-7 w-[78%] rotate-[-1.5deg] border border-border/80 bg-cream px-5 py-4 font-serif text-lg italic leading-snug text-text-muted shadow-sm">
        {note}
      </figcaption>
    </figure>
  );
}

export function Author() {
  const [leftAuthor, rightAuthor] = authorColumns;

  return (
    <section id="author" className="overflow-hidden py-20 md:py-28">
      <Container className="max-w-[1480px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl leading-[0.95] text-text md:text-7xl">
            <span className="text-olive">Два автора —</span>
            <span className="block">одно пространство</span>
          </h2>
          <div className="mx-auto mt-8 h-px w-8 bg-olive" />
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-text-muted">
            Мы объединили опыт и практики, чтобы создать пространство, где тело
            и состояние поддерживают друг друга.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-9 lg:grid-cols-[150px_minmax(220px,330px)_minmax(200px,260px)_minmax(220px,330px)_150px] xl:grid-cols-[190px_minmax(280px,390px)_minmax(230px,300px)_minmax(280px,390px)_190px]">
          <AuthorGuide author={leftAuthor} />

          <div className="order-first lg:order-none">
            <AuthorPhoto
              image={leftAuthor.image}
              imageAlt={leftAuthor.imageAlt}
              note={leftAuthor.note}
            />
          </div>

          <div className="relative flex min-h-72 flex-col items-center justify-center px-3 text-center">
            <span className="absolute left-0 top-1/2 hidden h-px w-24 -translate-x-full bg-olive/45 lg:block" />
            <span className="absolute right-0 top-1/2 hidden h-px w-24 translate-x-full bg-olive/45 lg:block" />
            <span className="absolute left-0 top-1/2 hidden h-3 w-3 -translate-x-[calc(100%+6rem)] -translate-y-1/2 bg-olive lg:block" />
            <span className="absolute right-0 top-1/2 hidden h-3 w-3 translate-x-[calc(100%+6rem)] -translate-y-1/2 bg-olive lg:block" />

            <p className="font-serif text-5xl leading-[0.95] text-text md:text-6xl">
              YOUR
              <span className="block">ENERGY</span>
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.42em] text-text-muted">
              space
            </p>
            <div className="my-9 h-10 w-px bg-olive/35" />
            <p className="max-w-[260px] text-base leading-relaxed text-text-muted">
              Мы создаем среду, где можно быть собой, восстанавливаться и
              двигаться к своему состоянию.
            </p>
          </div>

          <AuthorPhoto
            image={rightAuthor.image}
            imageAlt={rightAuthor.imageAlt}
            note={rightAuthor.note}
          />

          <AuthorGuide author={rightAuthor} />
        </div>
      </Container>
    </section>
  );
}
