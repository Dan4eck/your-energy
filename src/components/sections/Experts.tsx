import { Container } from "@/components/ui/Container";

export function Experts() {
  return (
    <section id="experts" className="py-24">
      <Container>
        <h2 className="font-serif text-4xl text-text">Специалисты</h2>
        <p className="mt-4 text-text-muted">Встречи, подкасты с лучшими психологами, нутрициологами, остеопатами...</p>
        {/* TODO: карточки специалистов (фото, имя, роль, описание) */}
      </Container>
    </section>
  );
}
