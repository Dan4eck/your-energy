import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readSource = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

test("programme describes the updated 12-training club format", () => {
  const source = readSource("../src/components/sections/Program.tsx");

  assert.match(source, /12 новых тренировок/);
  assert.match(source, /Подкаст с приглашенным экспертом/);
  assert.match(source, /Разбор техники в Zoom/);
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

test("reviews wait for real participant stories instead of displaying invented testimonials", () => {
  const source = readSource("../src/components/sections/Reviews.tsx");

  assert.match(source, /Отзывы участниц появятся здесь совсем скоро/);
});

test("hero uses the supplied YOUR ENERGY logo without a decorative box or duplicated tagline", () => {
  const hero = readSource("../src/components/sections/Hero.tsx");
  const about = readSource("../src/components/sections/About.tsx");

  assert.match(hero, /\/images\/your-energy-logo\.jpg/);
  assert.doesNotMatch(hero, /aspect-\[3\/4\]/);
  assert.doesNotMatch(hero, /место твоей силы/);
  assert.match(about, /\/images\/salta-practice\.jpg/);
});
