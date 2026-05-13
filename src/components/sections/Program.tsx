import Image from "next/image";
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
  {
    title: "Тело",
    text: "движение и ресурс",
    icon: "/images/orbit-body.svg",
    className: "left-[6%] top-[22%] items-start text-left md:left-[4%] md:top-[25%]",
    iconClassName: "left-[32%] top-[18%]",
    lineClassName: "left-[23%] top-[28%] w-[12%] origin-right",
    dotClassName: "left-[34.5%] top-[27.5%]",
  },
  {
    title: "Состояние",
    text: "эмоции и баланс",
    icon: "/images/orbit-state.svg",
    className: "right-[4%] top-[22%] items-start text-left md:right-[3%] md:top-[25%]",
    iconClassName: "right-[28%] top-[18%]",
    lineClassName: "right-[22%] top-[28%] w-[9%] origin-left",
    dotClassName: "right-[31%] top-[27.5%]",
  },
  {
    title: "Знания",
    text: "практики и осознанность",
    icon: "/images/orbit-knowledge.svg",
    className: "left-[5%] bottom-[23%] items-start text-left md:left-[3%] md:bottom-[26%]",
    iconClassName: "left-[32%] bottom-[19%]",
    lineClassName: "left-[23%] bottom-[30%] w-[12%] origin-right",
    dotClassName: "left-[34.5%] bottom-[29.5%]",
  },
  {
    title: "Поддержка",
    text: "сообщество и окружение",
    icon: "/images/orbit-support.svg",
    className: "right-[3%] bottom-[23%] items-start text-left md:right-[2%] md:bottom-[26%]",
    iconClassName: "right-[28%] bottom-[19%]",
    lineClassName: "right-[22%] bottom-[30%] w-[9%] origin-left",
    dotClassName: "right-[31%] bottom-[29.5%]",
  },
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
            <div key={item} className="relative border border-border bg-cream-dark/45 p-6">
              <span className="absolute right-4 top-4 h-3 w-3 border border-olive/60" />
              <div className="mb-5 flex h-10 w-10 items-center justify-center bg-olive text-sm text-white">
                {index + 1}
              </div>
              <p className="text-lg leading-relaxed text-text">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-x-auto overflow-y-hidden px-4 py-8 md:px-8 md:py-10">
          <div className="relative mx-auto aspect-[3/2] min-w-[720px] max-w-[960px] text-text">
            <div className="absolute inset-[17%_21%] rounded-full border border-[#5f5a31]/35" />
            <div className="absolute inset-[22%_31%] rounded-[50%] border border-dashed border-[#5f5a31]/50" />
            <div className="absolute left-1/2 top-1/2 z-10 flex aspect-square w-[24%] min-w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#cfc6b3] bg-[#eee6d8]/78 shadow-[inset_0_0_0_10px_rgba(213,203,185,0.22),0_0_22px_rgba(95,90,49,0.08)]">
              <div className="absolute inset-3 rounded-full border border-[#cfc6b3]/60" />
              <div className="relative text-center">
                <p className="font-serif text-[clamp(1.55rem,3.2vw,2.45rem)] uppercase leading-[0.9] tracking-[0.03em] text-text">
                  Your
                  <br />
                  Energy
                </p>
                <p className="mt-4 text-[0.52rem] uppercase tracking-[0.55em] text-[#5f5a31]">Space</p>
              </div>
            </div>

            <div className="absolute left-1/2 top-[12%] h-5 w-5 -translate-x-1/2 text-[#5f5a31]">
              <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-l border-t border-current bg-cream" />
            </div>
            <div className="absolute bottom-[12%] left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-transparent text-[#7c733d]">
              <span className="absolute left-1 top-0 h-5 w-5 rounded-full border border-current" />
              <span className="absolute left-2 top-[-2px] h-5 w-5 rounded-full bg-cream" />
            </div>

            {[43, 45].map((left) => (
              <span
                key={left}
                className="absolute top-[19%] h-1.5 w-1.5 rounded-full bg-[#7c733d]"
                style={{ left: `${left}%` }}
              />
            ))}
            {[49, 51].map((left) => (
              <span
                key={left}
                className="absolute bottom-[23%] h-1.5 w-1.5 rounded-full bg-[#7c733d]"
                style={{ left: `${left}%` }}
              />
            ))}

            {directions.map((direction) => (
              <article key={direction.title}>
                <span className={`absolute z-20 h-px bg-[#1d1d1b] ${direction.lineClassName}`} />
                <span className={`absolute z-30 h-2 w-2 rounded-full bg-[#1d1d1b] ${direction.dotClassName}`} />
                <span
                  className={`absolute z-20 flex aspect-square w-[9%] min-w-[66px] items-center justify-center rounded-full border border-[#5f5a31] bg-cream ${direction.iconClassName}`}
                >
                  <Image src={direction.icon} alt="" width={64} height={64} className="h-[72%] w-[72%]" />
                </span>
                <div className={`absolute z-20 flex max-w-[190px] flex-col ${direction.className}`}>
                  <h3 className="font-serif text-2xl leading-none text-text md:text-3xl">{direction.title}</h3>
                  <p className="mt-2 max-w-[150px] text-xs font-semibold leading-snug text-text md:text-sm">
                    {direction.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
