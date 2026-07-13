import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("programme describes the updated 12-training club format", () => {
  const source = readSource("../src/components/sections/Program.tsx");

  assert.match(source, /12 новых тренировок/);
  assert.match(source, /Подкаст с приглашенным экспертом/);
  assert.match(source, /Разбор техники в Zoom/);
});

test("programme introduces the four club directions beside the supplied third-section photo", () => {
  const source = readSource("../src/components/sections/Program.tsx");

  assert.match(source, /\/images\/program-yoga\.jpg/);
  assert.doesNotMatch(source, /\/images\/author-ksyusha\.jpg/);
  assert.ok(existsSync(new URL("../public/images/program-yoga.jpg", import.meta.url)));
  assert.match(source, /Направления клуба/);
  assert.match(source, /<ol className="mt-10 flex flex-col divide-y divide-border border-y border-border">/);
  assert.match(source, /absolute bottom-7 left-7 border-l-4 border-olive bg-cream\/92 px-5 py-3 text-sm text-text backdrop-blur-sm/);
  assert.match(source, /тело, состояние/);
  assert.match(source, /знания/);
  assert.doesNotMatch(source, /<figcaption/);
  assert.doesNotMatch(source, /overflow-x-auto/);

  for (const title of ["Тело", "Состояние", "Знания", "Поддержка"]) {
    assert.match(source, new RegExp(`title: "${title}"`));
  }
});

test("programme photo and its embedded card reuse the about section layout exactly", () => {
  const about = readSource("../src/components/sections/About.tsx");
  const program = readSource("../src/components/sections/Program.tsx");

  for (const layout of [
    /grid grid-cols-1 items-center gap-12 md:grid-cols-2/,
    /relative aspect-\[3\/4\] w-full overflow-hidden border border-border bg-cream-dark p-3/,
    /absolute bottom-7 left-7 border-l-4 border-olive bg-cream\/92 px-5 py-3 text-sm text-text backdrop-blur-sm/,
  ]) {
    assert.match(about, layout);
    assert.match(program, layout);
  }

  assert.doesNotMatch(program, /max-w-\[440px\]|lg:sticky|aspect-\[4\/5\]|font-serif text-xl/);
});

test("author section keeps Ksyusha's original portrait and verified biographies", () => {
  const source = readSource("../src/components/sections/Author.tsx");

  assert.match(source, /\/images\/author-ksyusha\.jpg/);
  assert.doesNotMatch(source, /your-energy-logo/);
  assert.match(source, /Салтанат Ромашова/);
  assert.match(source, /Данильчук Ксения/);
  assert.match(source, /Более 10 лет опыта в преподавании стретчинга/);
  assert.match(source, /С 2022 года проводит йога-выезды/);
});

test("reviews display the supplied real participant screenshot without an added source label", () => {
  const source = readSource("../src/components/sections/Reviews.tsx");

  assert.match(source, /\/images\/review-telegram-ksyusha\.jpg/);
  assert.doesNotMatch(source, /review\.source/);
  assert.ok(existsSync(new URL("../public/images/review-telegram-ksyusha.jpg", import.meta.url)));
});

test("hero uses the supplied YOUR ENERGY logo without a decorative box or duplicated tagline", () => {
  const hero = readSource("../src/components/sections/Hero.tsx");
  const about = readSource("../src/components/sections/About.tsx");

  assert.match(hero, /\/images\/your-energy-logo\.jpg/);
  assert.doesNotMatch(hero, /aspect-\[3\/4\]/);
  assert.doesNotMatch(hero, /место твоей силы/);
  assert.match(about, /\/images\/salta-practice\.jpg/);
});
