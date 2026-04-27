import { Container } from "@/components/ui/Container";
import Image from "next/image";

export function Author() {
  return (
    <section id="author" className="py-24">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/meditation.jpg"
            alt="Автор проекта"
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-text">Автор проекта</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Здесь будет личная история автора и описание, чем она занимается в клубе.
          </p>
        </div>
      </Container>
    </section>
  );
}
