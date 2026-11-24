import { Container } from "@/components/ui/Container";

export function VideoPreview() {
  return (
    <section id="video" className="overflow-x-clip py-20 md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-14">
          <div className="border-l border-olive/35 pl-6 md:pl-8">
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">Формат занятий</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-text md:text-5xl">
              Занимайся в своём ритме
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Внутри клуба занятия и материалы можно смотреть спокойно и возвращаться к ним в любое удобное время — выстраивать регулярность без давления и с заботой о себе.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-3xl border border-border bg-cream-dark/45 p-3 md:p-4">
            <div className="pointer-events-none absolute -left-2 -top-2 hidden h-12 w-12 border-l border-t border-olive/60 sm:block" />
            <div className="pointer-events-none absolute -bottom-2 -right-2 hidden h-12 w-12 border-b border-r border-olive/60 sm:block" />
            <div className="aspect-video overflow-hidden bg-text">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/wZSro2HcyNU"
                title="Пример видеоформата YOUR ENERGY space"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
