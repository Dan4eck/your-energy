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

test("reviews display the supplied real participant screenshots without an added source label", () => {
  const source = readSource("../src/components/sections/Reviews.tsx");

  for (const image of [
    "review-telegram-ksyusha.jpg",
    "review-whatsapp-format.jpg",
    "review-telegram-levels.jpg",
  ]) {
    assert.match(source, new RegExp(`/images/${image.replace(".", "\\.")}`));
    assert.ok(existsSync(new URL(`../public/images/${image}`, import.meta.url)));
  }

  assert.doesNotMatch(source, /review\.source/);
});

test("hero uses the supplied Ksyusha and Salta photo in a responsive editorial frame", () => {
  const hero = readSource("../src/components/sections/Hero.tsx");
  const about = readSource("../src/components/sections/About.tsx");

  assert.match(hero, /hero-ksyusha-salta\.jpg/);
  assert.ok(existsSync(new URL("../public/images/hero-ksyusha-salta.jpg", import.meta.url)));
  assert.match(hero, /Ксюша и Салта, авторы клуба YOUR ENERGY space/);
  assert.match(hero, /aspect-\[4\/3\].*sm:aspect-\[3\/2\].*lg:aspect-\[6\/5\]/);
  assert.match(hero, /Ксюша &amp; Салта/);
  assert.doesNotMatch(hero, /место твоей силы/);
  assert.match(about, /\/images\/salta-practice\.jpg/);
});

test("pricing offers three discounted periods and routes payment to the teacher in Telegram", () => {
  const pricing = readSource("../src/components/sections/Pricing.tsx");
  const cta = readSource("../src/components/sections/CTA.tsx");
  const footer = readSource("../src/components/sections/Footer.tsx");
  const constants = readSource("../src/lib/constants.ts");

  for (const duration of ["1 месяц", "3 месяца", "6 месяцев"]) {
    assert.match(pricing, new RegExp(`duration: "${duration}"`));
  }

  for (const price of ["12 000 ₸", "34 200 ₸", "64 800 ₸", "2 500 ₽", "6 800 ₽", "12 900 ₽"]) {
    assert.match(pricing, new RegExp(price));
  }

  assert.match(pricing, /discount: "−5%"/);
  assert.match(pricing, /discount: "−10%"/);
  assert.match(constants, /https:\/\/t\.me\/itsyogawithksu/);
  assert.match(pricing, /href=\{TELEGRAM_PAYMENT_URL\}/);
  assert.match(cta, /href=\{TELEGRAM_PAYMENT_URL\}/);
  assert.match(footer, /href=\{TELEGRAM_PAYMENT_URL\}/);
  assert.doesNotMatch(pricing, /href="#final-cta"/);
});

test("faq accordion is wired into the landing page and explains Telegram payment", () => {
  const faq = readSource("../src/components/sections/FAQ.tsx");
  const page = readSource("../src/app/page.tsx");
  const header = readSource("../src/components/sections/Header.tsx");

  assert.match(page, /<FAQ \/>/);
  assert.match(header, /href: "#faq"/);
  assert.match(faq, /"use client"/);
  assert.match(faq, /aria-expanded/);
  assert.match(faq, /TELEGRAM_PAYMENT_URL/);
  assert.match(faq, /@itsyogawithksu/);
  assert.match(faq, /Как оплатить/);
});
