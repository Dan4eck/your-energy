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
              <span className="block font-serif text-3xl text-text">12</span>
              тренировок
            </div>
            <div className="py-4">
              <span className="block font-serif text-3xl text-text">4</span>
              направления
            </div>
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[560px] md:order-2">
          <Image
            src="/images/your-energy-logo.jpg"
            alt="Логотип YOUR ENERGY space"
            width={1254}
            height={1254}
            className="h-auto w-full"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
