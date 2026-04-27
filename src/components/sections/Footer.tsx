import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} Sculpt your body&mind
        </p>
        <div className="flex gap-6 text-sm text-text-muted">
          <a href="#" className="transition-colors hover:text-text">Публичная оферта</a>
          <a href="#" className="transition-colors hover:text-text">Политика конфиденциальности</a>
        </div>
      </Container>
    </footer>
  );
}
