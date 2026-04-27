import { Container } from "@/components/ui/Container";

export function Program() {
  return (
    <section id="program" className="py-24">
      <Container>
        <h2 className="font-serif text-4xl text-text">16 тренировок каждый месяц</h2>
        <p className="mt-4 text-text-muted">Осанка, миофасциальный релиз, дыхательные практики, силовые, расслабляющие...</p>
        {/* TODO: сетка направлений (карточки или иконки) */}
      </Container>
    </section>
  );
}
