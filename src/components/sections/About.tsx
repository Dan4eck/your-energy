import { Container } from "@/components/ui/Container";

export function About() {
  return (
    <section id="about" className="py-24">
      <Container className="max-w-3xl">
        <p className="text-center font-serif text-3xl leading-relaxed text-text md:text-4xl">
          Мы точно знаем, какого это начинать новое или продолжать двигаться дальше. Мы хотим помочь вам внедрить новые знания о теле, психике и комплексном научном подходе.
        </p>
      </Container>
    </section>
  );
}
