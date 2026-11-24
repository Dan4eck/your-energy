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
  imagePosition: string;
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
    imagePosition: "object-[50%_72%]",
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
    imagePosition: "object-[50%_20%]",
  },
];

function AuthorCard({ author }: { author: Author }) {
  return (
    <article className="flex flex-col border border-border bg-cream-dark/35 p-5 sm:p-7">
      <figure className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-olive/20 bg-cream-dark/40">
          <Image
            src={author.image}
            alt={author.imageAlt}
            fill
            sizes="(min-width: 1024px) 44vw, calc(100vw - 64px)"
            className={`object-cover ${author.imagePosition}`}
          />
        </div>
        <figcaption className="relative z-10 mx-auto -mt-6 w-[86%] border border-border/80 bg-cream px-5 py-3.5 text-center font-serif text-lg italic leading-snug text-text-muted shadow-sm">
          {author.note}
        </figcaption>
      </figure>

      <div className="mt-8">
        <h3 className="font-serif text-4xl leading-none text-olive md:text-5xl">{author.name}</h3>
        <p className="mt-2.5 text-xs uppercase tracking-[0.2em] text-text-muted sm:text-sm">
          {author.fullName}
        </p>
        <p className="mt-4 font-serif text-xl text-text sm:text-2xl">{author.direction}</p>
      </div>

      <ol className="relative ml-1 mt-7 flex flex-1 flex-col gap-6 border-l border-olive/30 pl-6">
        {author.points.map((point) => (
          <li key={point.title} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 bg-olive" />
            <p className="text-sm font-semibold text-text sm:text-base">{point.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-text-muted sm:text-base">
              {point.text}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}

export function Author() {
  return (
    <section id="author" className="overflow-x-clip py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Авторы клуба</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.02] text-text md:text-6xl">
            <span className="text-olive">Вас приветствуют</span>
            <span className="mt-1 block">Ксюша и Салта</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-muted md:text-lg">
            Мы хотим поделиться знаниями, опытом и экспертами, которые меняли нашу жизнь на протяжении последних 10 лет.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {authors.map((author) => (
            <AuthorCard key={author.name} author={author} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 py-4 text-center sm:flex-row sm:justify-center sm:gap-6">
          <span className="font-serif text-2xl tracking-tight text-text">
            YOUR ENERGY <em className="italic">space</em>
          </span>
          <span className="hidden h-5 w-px bg-olive/30 sm:block" />
          <p className="max-w-md text-sm leading-relaxed text-text-muted sm:text-left sm:text-base">
            Мягкость, знания и поддержка, которые помогают возвращаться к себе.
          </p>
        </div>
      </Container>
    </section>
  );
}
