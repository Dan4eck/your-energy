import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <Container className="max-w-2xl text-center">
        <h2 className="font-serif text-4xl text-text">Начать заниматься</h2>
        <p className="mt-4 text-text-muted">
          Вы можете оплатить доступ на один месяц или выбрать ежемесячную подписку.
          Во втором случае доступ будет продлеваться автоматически.
        </p>
        <div className="mt-8 text-3xl font-serif text-text">3 000 ₽</div>
        <div className="mt-8">
          <Button>Начать заниматься</Button>
        </div>
      </Container>
    </section>
  );
}
