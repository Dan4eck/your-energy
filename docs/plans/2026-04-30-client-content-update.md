# YOUR ENERGY space Client Content Update Plan

> **For Hermes:** Content and implementation plan for the 2026-04-30 client text update.

**Goal:** Обновить одностраничный сайт под новое название `YOUR ENERGY space / место твоей силы` и заполнить секции 1–7 на основе новых данных клиента.

**Architecture:** Landing page на Next.js 16 App Router. Каждая секция остается отдельным React-компонентом в `src/components/sections`, страница собирается в `src/app/page.tsx`. Контент пока хранится прямо в компонентах, без CMS.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, `next/image`.

---

## Выполненные задачи

### Task 1: Ребрендинг сайта

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/components/sections/Header.tsx`
- Modify: `src/components/sections/Footer.tsx`

**Result:**
- Название сайта заменено на `YOUR ENERGY space — место твоей силы`.
- Обновлены metadata title/description.
- Навигация приведена к текущей структуре: О клубе, Программа, Авторы, Тариф, Отзывы.

### Task 2: Hero + About

**Files:**
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/About.tsx`

**Result:**
- Hero переписан под новый клуб и CTA.
- About построен вокруг клиентского текста: клуб без работы на износ, управление состоянием, энергия в жизни.
- Слоганы клиента вынесены в карточки: мягкость, энергия, пространство без сравнения.

### Task 3: Программа

**Files:**
- Modify: `src/components/sections/Program.tsx`

**Result:**
- Добавлена структура 30 дней / 16 новых тренировок / растяжка / дыхание / йога / осанка / эксперты / разбор фото и видео / чат.
- Дополнительные направления сгруппированы как тело, состояние, знания, поддержка.

### Task 4: Авторы

**Files:**
- Modify: `src/components/sections/Author.tsx`

**Result:**
- Секция теперь про двух авторов: Салтанат Ромашова и Данильчук Ксения.
- Добавлены факты из клиентского текста.
- Фото не подставлялись как портреты, потому что клиент их еще не передал; вместо этого карточки с инициалами и пометками о недостающих фото.

### Task 5: Тариф и отзывы

**Files:**
- Modify: `src/components/sections/Pricing.tsx`
- Modify: `src/components/sections/Reviews.tsx`

**Result:**
- Тариф обновлен: 30 дней за `12 000 ₸`.
- Добавлено пояснение, что оплатить можно в любой валюте через связь с командой.
- Отзывы заполнены черновыми карточками и явно помечены как `придумано мной` / заменить на реальные.

### Task 6: Финальная CTA и кнопки

**Files:**
- Modify: `src/components/sections/CTA.tsx`
- Modify: `src/components/ui/Button.tsx`

**Result:**
- Финальная CTA переписана под новую философию клуба.
- `Button` теперь умеет рендерить якорную ссылку через `href`, чтобы CTA реально вели к секциям.

---

## Что придумано мной и помечено

1. Hero-описание адаптировано мной из клиентского About/Program для лучшего первого экрана.
2. Промежуточные пояснения в Program (`Тело`, `Состояние`, `Знания`, `Поддержка`) — структурная редактура/копирайтинг от меня.
3. Pricing-пояснение про связь для оплаты в любой валюте — адаптация клиентского пожелания.
4. Reviews — полностью черновые отзывы, явно помечены на сайте как `черновик, придумано мной`.
5. Final CTA — написана мной на основе философии клиента и слоганов.

---

## Проверка

- `npm run lint` — passed.
- `npm run build` — passed.
- Browser check: `http://localhost:3000` открылся, metadata и секции отображаются, JS errors в консоли нет.
- Build warning про несколько `package-lock.json` закрыт настройкой `turbopack.root = process.cwd()` в `next.config.ts`.
- Для диагностики памяти не запускать `lint`/`build` одновременно с `dev`; сначала проверять один `npm run dev` в Activity Monitor.

---

## Следующие материалы от клиента

- Реальные отзывы участниц.
- Портрет Салтанат Ромашовой.
- Портрет Данильчук Ксении или подтверждение, что карточки остаются без фото.
- Контактная ссылка для кнопки оплаты/заявки: Telegram, WhatsApp, Instagram или форма.
- Юридические ссылки: оферта и политика конфиденциальности.
