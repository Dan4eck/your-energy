import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center overflow-hidden py-12 md:py-20">
      <div className="absolute left-[-10%] top-16 h-64 w-64 rounded-full bg-olive/10 blur-3xl" />
      <Container className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
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
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] border border-border bg-cream-dark">
            <Image
              src="/images/hero-yoga.jpg"
              alt="Спокойная йога-практика в клубе YOUR ENERGY space"
              width={600}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute bottom-5 left-5 rounded-full bg-cream/90 px-5 py-2 text-sm text-text backdrop-blur-sm">
              энергия вместо выгорания
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
