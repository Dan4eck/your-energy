import { Container } from "@/components/ui/Container";

export function VideoPreview() {
  return (
    <section id="video" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="flex h-full flex-col justify-center border-l border-olive/40 pl-6 text-center lg:text-left">
            <h2 className="font-serif text-3xl leading-tight text-text md:text-5xl">
              Внутри клуба занятия и материалы можно смотреть спокойно, возвращаться к ним в удобное время.
            </h2>
            <p className="mt-7 text-base leading-relaxed text-text-muted md:text-lg">
              Выстраивать регулярность без давления с заботой о себе
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-3xl border border-border bg-cream-dark/45 p-3 md:p-4">
            <div className="absolute -left-2 -top-2 h-12 w-12 border-l border-t border-olive/70" />
            <div className="absolute -bottom-2 -right-2 h-12 w-12 border-b border-r border-olive/70" />
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
