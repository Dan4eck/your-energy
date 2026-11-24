"use client";

import { useState, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { TELEGRAM_PAYMENT_URL } from "@/lib/constants";

type FaqItem = {
  question: string;
  answer: ReactNode;
};

const faqItems: FaqItem[] = [
  {
    question: "Как оплатить участие и попасть в клуб?",
    answer: (
      <>
        Оплата проходит напрямую в личных сообщениях Telegram — напишите на наш аккаунт{" "}
        <a
          href={TELEGRAM_PAYMENT_URL}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-olive underline decoration-olive/40 underline-offset-4 transition-colors hover:text-olive-hover"
        >
          @itsyogawithksu
        </a>
        . Ксюша ответит, подскажет удобный способ оплаты в тенге, рублях или другой валюте и сразу после оплаты откроет доступ к пространству клуба и чату участниц.
      </>
    ),
  },
  {
    question: "Подойдёт ли клуб, если я давно не занималась или только начинаю?",
    answer:
      "Да, тренировки рассчитаны на разный уровень подготовки — от мягкого старта с нуля до регулярной практики. Мы не работаем на износ: преподаватели показывают бережные вариации упражнений, чтобы вы могли двигаться в комфортном темпе и без сравнения с другими.",
  },
  {
    question: "Сколько времени занимают тренировки и когда нужно заниматься?",
    answer:
      "В клубе есть практики разной длительности — в среднем около 30 минут, а также более короткие комплексы для дней, когда мало времени или сил. Каждый месяц открывается 12 новых занятий в записи: заниматься можно в любое удобное время и из любой точки мира.",
  },
  {
    question: "Что ещё входит в подписку помимо тренировок?",
    answer:
      "В каждом месяце вас ждут не только 12 новых практик (растяжка, йога, дыхание и работа с осанкой), но и подкаст с приглашённым экспертом — психологом, коучем или нутрициологом, разбор техники в Zoom, обратная связь по фото и видео и поддерживающий чат участниц.",
  },
  {
    question: "Какой инвентарь понадобится для занятий дома?",
    answer:
      "Для большинства практик достаточно коврика для йоги, удобной одежды и немного свободного места. Специальное оборудование не обязательно: если в тренировке пригодятся блоки, плед или подушка, преподаватель подскажет, чем их легко заменить дома.",
  },
  {
    question: "Есть ли обратная связь по технике от преподавателей?",
    answer:
      "Да, вы можете присылать фото или видео своих тренировок на разбор, задавать вопросы в чате клуба и присоединяться к разборам техники в Zoom. Ксюша и Салта бережно помогают скорректировать положение тела и подобрать нагрузку.",
  },
  {
    question: "Чем отличаются тарифы на 1, 3 и 6 месяцев?",
    answer:
      "Наполнение клуба на всех тарифах одинаковое — открывается полный доступ ко всем тренировкам, материалам, разборам и чату на 30, 90 или 180 дней. Разница только в сроке и выгоде: при подписке на 3 месяца действует скидка 5%, а на 6 месяцев — 10%.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <Container className="max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-text-muted">
            Часто задаваемые вопросы
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-text md:text-6xl">
            Ответы на вопросы
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-muted">
            Собрали главное о формате занятий, поддержке и оплате. Нажмите на плюсик, чтобы открыть ответ.
          </p>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question} className="transition-colors duration-200">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/50 md:py-7"
                  >
                    <span className="font-serif text-xl leading-snug text-text transition-colors duration-200 group-hover:text-olive sm:text-2xl">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${
                        isOpen
                          ? "border-olive bg-olive text-white"
                          : "border-olive/45 bg-cream-dark/45 text-olive group-hover:border-olive group-hover:bg-cream-dark"
                      }`}
                    >
                      <span className="h-[1.5px] w-3.5 bg-current" />
                      <span
                        className={`absolute h-3.5 w-[1.5px] bg-current transition-transform duration-300 ${
                          isOpen ? "scale-y-0 rotate-90" : "scale-y-100 rotate-0"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-7 pr-12 text-base leading-relaxed text-text-muted md:text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-text-muted">
          Не нашли ответ на свой вопрос? Напишите нам напрямую в Telegram —{" "}
          <a
            href={TELEGRAM_PAYMENT_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-olive underline decoration-olive/40 underline-offset-4 transition-colors hover:text-olive-hover"
          >
            @itsyogawithksu
          </a>
        </p>
      </Container>
    </section>
  );
}
