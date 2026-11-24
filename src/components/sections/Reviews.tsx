import Image from "next/image";
import { Container } from "@/components/ui/Container";

type ReviewItem = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

const wideReviews: ReviewItem[] = [
  {
    image: "/images/review-telegram-ksyusha.jpg",
    alt: "Отзыв участницы о практике: стала более гибкой, мышцы подтянулись и проявился пресс",
    width: 1149,
    height: 582,
  },
  {
    image: "/images/review-whatsapp-format.jpg",
    alt: "Отзыв участницы о формате по 30 минут: спине легче и после тренировки хорошее самочувствие",
    width: 1117,
    height: 523,
  },
];

const tallReviews: ReviewItem[] = [
  {
    image: "/images/review-telegram-levels.jpg",
    alt: "Отзыв участницы со словами благодарности за тренировки разного уровня подготовки и длительности",
    width: 803,
    height: 765,
  },
];

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="group bg-cream-dark/45 p-3 md:p-4">
      <div className="relative overflow-hidden bg-cream shadow-[8px_8px_0_rgba(92,107,74,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
        <Image
          src={review.image}
          alt={review.alt}
          width={review.width}
          height={review.height}
          sizes="(max-width: 768px) calc(100vw - 72px), 480px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-10 md:py-12">
      <Container className="max-w-5xl">
        <div className="py-10 md:py-12">
          <div className="px-6 text-center md:px-16">
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Отзывы</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-serif text-4xl leading-tight text-text md:text-6xl">
              Живые слова о пути к себе
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-text-muted">
              Бережно собранные сообщения участниц из чата и переписок — без пересказов и обработки.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 px-4 md:mt-10 md:grid-cols-2 md:items-start md:px-6">
            <div className="flex flex-col gap-6">
              {wideReviews.map((review) => (
                <ReviewCard key={review.image} review={review} />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {tallReviews.map((review) => (
                <ReviewCard key={review.image} review={review} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
