import Image from "next/image";
import { Container } from "@/components/ui/Container";

type Author = {
  name: string;
  fullName: string;
  direction: string;
  points: { title: string; text: string }[];
  note: string;
  image: string;
  imageAlt: string;
};

const authors: Author[] = [
  {
    name: "Ксюша",
    fullName: "Данильчук Ксения",
    direction: "Йога",
    points: [
      {
        title: "Преподаватель йоги",
        text: "5 лет опыта в преподавании и бережной работе с телом.",
      },
      {
        title: "Йога-выезды",
        text: "С 2022 года проводит йога-выезды для женщин.",
      },
      {
        title: "150+ участниц",
        text: "Более 150 человек уже побывали на выездах.",
      },
    ],
    note: "Йога, движение и бережная регулярность.",
    image: "/images/author-ksyusha.jpg",
    imageAlt: "Ксюша, автор направления йоги в YOUR ENERGY space",
  },
  {
    name: "Салта",
    fullName: "Салтанат Ромашова",
    direction: "Стретчинг и состояние",
    points: [
      {
        title: "Инструктор и психолог",
        text: "Инструктор групповых программ и психолог.",
      },
      {
        title: "10+ лет опыта",
        text: "Более 10 лет опыта в преподавании стретчинга.",
      },
      {
        title: "Онлайн-клуб",
        text: "Создала клуб с тренировками, в котором побывали 300 человек.",
      },
    ],
    note: "Тело и состояние — опора в жизни.",
    image: "/images/salta-portrait.jpg",
    imageAlt: "Салтанат Ромашова, автор YOUR ENERGY space",
  },
];

function AuthorGuide({ author }: { author: Author }) {
  return (
    <aside className="flex flex-col gap-8 text-text md:max-w-[220px]">
      <div>
        <h3 className="font-serif text-4xl leading-none text-olive md:text-5xl">{author.name}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-text-muted">{author.fullName}</p>
        <div className="mt-6 flex items-center gap-5">
          <span className="h-px w-12 bg-olive" />
          <p className="font-serif text-2xl text-text md:text-3xl">{author.direction}</p>
        </div>
      </div>

      <ol className="relative ml-1 flex flex-col gap-8 border-l border-olive/35 pl-7">
        {author.points.map((point) => (
          <li key={point.title} className="relative">
            <span className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 bg-olive" />
            <p className="text-sm font-semibold text-text">{point.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{point.text}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function AuthorPhoto({ author }: { author: Author }) {
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="relative aspect-[3/4] overflow-hidden border border-olive/25 bg-cream-dark/35 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
        <Image
          src={author.image}
          alt={author.imageAlt}
          fill
          sizes="(min-width: 1280px) 390px, (min-width: 1024px) 330px, calc(100vw - 48px)"
          className="object-cover"
        />
      </div>
      <figcaption className="mx-auto -mt-7 w-[78%] rotate-[-1.5deg] border border-border/80 bg-cream px-5 py-4 font-serif text-lg italic leading-snug text-text-muted shadow-sm">
        {author.note}
      </figcaption>
    </figure>
  );
}

export function Author() {
  const [ksyusha, salta] = authors;

  return (
    <section id="author" className="overflow-hidden py-20 md:py-28">
      <Container className="max-w-[1480px]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Авторы клуба</p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-text md:text-7xl">
            <span className="text-olive">Вас приветствуют</span>
            <span className="block">Ксюша и Салта</span>
          </h2>
          <div className="mx-auto mt-8 h-px w-8 bg-olive" />
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-muted">
            Мы хотим поделиться знаниями, опытом и экспертами, которые меняли нашу жизнь на протяжении последних 10 лет.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-9 lg:grid-cols-[150px_minmax(220px,330px)_minmax(200px,260px)_minmax(220px,330px)_150px] xl:grid-cols-[190px_minmax(280px,390px)_minmax(230px,300px)_minmax(280px,390px)_190px]">
          <AuthorGuide author={ksyusha} />
          <div className="order-first lg:order-none">
            <AuthorPhoto author={ksyusha} />
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
            <p className="mt-5 text-sm uppercase tracking-[0.42em] text-text-muted">space</p>
            <div className="my-9 h-10 w-px bg-olive/35" />
            <p className="max-w-[260px] text-base leading-relaxed text-text-muted">
              Мягкость, знания и поддержка, которые помогают возвращаться к себе.
            </p>
          </div>

          <AuthorPhoto author={salta} />
          <AuthorGuide author={salta} />
        </div>
      </Container>
    </section>
  );
}
