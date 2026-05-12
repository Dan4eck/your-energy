"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const previousReview = () => {
    setActiveIndex((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const nextReview = () => {
    setActiveIndex((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="reviews" className="py-20">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-[48px_1fr_48px] items-center border-y border-border md:grid-cols-[88px_1fr_88px]">
          <button
            type="button"
            aria-label="Предыдущий отзыв"
            onClick={previousReview}
            className="flex min-h-80 items-center justify-start text-olive transition-transform duration-200 hover:-translate-x-1 active:-translate-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            <ChevronLeft className="h-12 w-12 stroke-[1.25] md:h-16 md:w-16" aria-hidden="true" />
          </button>

          <article className="flex min-h-80 flex-col justify-center px-6 py-12 text-center md:px-16">
            <p className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-text md:text-5xl">
              “{activeReview.text}”
            </p>
          </article>

          <button
            type="button"
            aria-label="Следующий отзыв"
            onClick={nextReview}
            className="flex min-h-80 items-center justify-end text-olive transition-transform duration-200 hover:translate-x-1 active:translate-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
          >
            <ChevronRight className="h-12 w-12 stroke-[1.25] md:h-16 md:w-16" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </section>
  );
}
