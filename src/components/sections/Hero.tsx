import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <p className="mb-4 text-sm uppercase tracking-widest text-text-muted">
            Приветствуем вас, прекрасные женщины
          </p>
          <h1 className="font-serif text-5xl leading-[1.1] text-text md:text-6xl lg:text-7xl">
            Sculpt <em className="italic">your</em>
            <br />
            body&mind
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-text-muted">
            Каждый месяц 16 новых тренировок: осанка, миофасциальный релиз, дыхательные практики, силовые и расслабляющие занятия — адаптированные для каждой из вас.
          </p>
          <div className="mt-8">
            <Button>Начать заниматься</Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
            <Image
              src="/images/hero-yoga.jpg"
              alt="Yoga practice"
              width={600}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
