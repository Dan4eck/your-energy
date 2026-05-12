import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden py-12 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-olive/20" />
      <div className="absolute right-8 top-24 hidden h-32 w-24 border-r border-t border-olive/30 md:block" />
      <Container className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 border-l border-olive/30 pl-6 md:order-1 md:pl-8">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-text-muted">
            Онлайн-клуб на 30 дней
          </p>
          <h1 className="font-serif text-5xl leading-[0.95] text-text md:text-7xl lg:text-8xl">
            YOUR ENERGY
            <br />
            <em className="italic">space</em>
          </h1>
          <p className="mt-4 font-serif text-3xl italic text-olive md:text-4xl">
            место твоей силы
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">
            Мягкое онлайн-пространство, где тренировки, дыхание, йога и поддержка экспертов помогают чувствовать тело, управлять состоянием и выстраивать энергию, которая остается с тобой в жизни.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#pricing">Присоединиться</Button>
            <Button href="#program" variant="outline">
              Посмотреть программу
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-border text-center text-sm text-text-muted">
            <div className="py-4">
              <span className="block font-serif text-3xl text-text">30</span>
              дней
            </div>
            <div className="border-x border-border py-4">
              <span className="block font-serif text-3xl text-text">16</span>
              тренировок
            </div>
            <div className="py-4">
              <span className="block font-serif text-3xl text-text">4</span>
              направления
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-cream-dark p-3">
            <div className="absolute left-0 top-0 z-10 h-14 w-14 border-l-4 border-t-4 border-olive" />
            <div className="absolute bottom-0 right-0 z-10 h-14 w-14 border-b-4 border-r-4 border-olive" />
            <Image
              src="/images/hero-yoga.jpg"
              alt="Спокойная йога-практика в клубе YOUR ENERGY space"
              width={600}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-7 left-7 border-l-4 border-olive bg-cream/92 px-5 py-3 text-sm text-text backdrop-blur-sm">
              Ксюша
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
