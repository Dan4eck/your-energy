import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import heroPhoto from "../../../public/images/hero-ksyusha-salta.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-81px)] items-center overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="absolute right-0 top-10 h-48 w-48 rounded-full border border-olive/10 sm:h-96 sm:w-96" />
      <Container className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-12 xl:gap-16">
        <div className="border-l border-olive/30 pl-5 sm:pl-8">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-text-muted sm:text-sm">
            Онлайн-клуб по подписке
          </p>
          <h1 className="font-serif text-[clamp(3.25rem,7vw,6.75rem)] leading-[0.9] tracking-[-0.035em] text-text">
            YOUR ENERGY
            <br />
            <em className="italic">space</em>
          </h1>
          <p className="mt-6 max-w-[36rem] text-base leading-relaxed text-text-muted sm:text-lg">
            Мягкое онлайн-пространство, где тренировки, дыхание, йога и поддержка экспертов помогают чувствовать тело, управлять состоянием и выстраивать энергию, которая остается с тобой в жизни.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="#pricing">Присоединиться</Button>
            <Button href="#program" variant="outline">
              Посмотреть программу
            </Button>
          </div>
          <div className="mt-8 grid max-w-[36rem] grid-cols-3 border-y border-border text-center text-xs text-text-muted sm:mt-10 sm:text-sm">
            <div className="py-3.5 sm:py-4">
              <span className="block font-serif text-2xl text-text sm:text-3xl">1–6</span>
              месяцев
            </div>
            <div className="border-x border-border py-3.5 sm:py-4">
              <span className="block font-serif text-2xl text-text sm:text-3xl">12</span>
              тренировок
            </div>
            <div className="py-3.5 sm:py-4">
              <span className="block font-serif text-2xl text-text sm:text-3xl">4</span>
              направления
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[760px] lg:max-w-none">
          <div className="absolute -left-3 -top-3 hidden h-20 w-20 border-l border-t border-olive/40 sm:block" />
          <div className="absolute -bottom-3 -right-3 hidden h-20 w-20 border-b border-r border-olive/40 sm:block" />
          <figure className="relative aspect-[4/3] overflow-hidden bg-cream-dark sm:aspect-[3/2] lg:aspect-[6/5]">
            <Image
              src={heroPhoto}
              alt="Ксюша и Салта, авторы клуба YOUR ENERGY space"
              fill
              sizes="(max-width: 1023px) 100vw, 53vw"
              className="object-cover object-[52%_50%]"
              preload
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white sm:p-6">
              <span className="whitespace-nowrap font-serif text-lg sm:text-2xl">Ксюша &amp; Салта</span>
              <span className="max-w-40 text-right text-[10px] uppercase leading-relaxed tracking-[0.22em] text-white/80 sm:max-w-none sm:text-xs">
                движение · состояние · поддержка
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
