import Image from "next/image";
import { Container } from "@/components/ui/Container";

const reviews = [
  {
    image: "/images/review-telegram-ksyusha.jpg",
    alt: "Отзыв участницы о практике: стала более гибкой, мышцы подтянулись и проявился пресс",
  },
];

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
              Здесь будут бережно собраны сообщения участниц из Telegram и Instagram — без пересказов и обработки.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-6 px-6 md:mt-9 md:px-10">
            {reviews.map((review) => (
              <div key={review.image} className="group bg-cream-dark/45 p-3 md:p-4">
                <div className="relative overflow-hidden bg-cream shadow-[8px_8px_0_rgba(92,107,74,0.12)] transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={review.image}
                    alt={review.alt}
                    width={1149}
                    height={582}
                    sizes="(max-width: 768px) calc(100vw - 72px), 640px"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
