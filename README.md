# Темир Ольга — Bachata Dance Fit

Лендинг для тренера танцев (Краснодар). Vite, статика, без бэкенда.

## Локально

```bash
cd /home/hjwwjh/code/olga-temir
npm install
npm run dev
```

Сборка:

```bash
npm run build
npm run preview
```

Готовые файлы — в `dist/`.

## Куда класть фото и видео

| Файл | Путь |
|------|------|
| Cutout Ольги (PNG с прозрачным фоном) | `public/images/olga-cutout.png` |
| Фото групп | `public/images/group-1.jpg` … `group-6.jpg` |
| Видео тренировок (вертикальные) | `public/videos/training-1.mp4` … `training-3.mp4` |
| Сертификаты | `public/images/cert-1.jpg` … `cert-4.jpg` |

После замены файлов обнови пути в [`src/content.js`](src/content.js) (сейчас стоят SVG-плейсхолдеры).

**MAX:** публичной ссылки по номеру нет. В `site.max` вставь свою `https://max.ru/u/...` из приложения (Профиль → Пригласить друзей).

Пример для cutout:

```js
export const cutout = {
  src: './images/olga-cutout.png',
  alt: 'Темир Ольга',
}
```

Видео лучше сжать (~720p, короткий хронометраж), иначе сайт будет тяжёлым.

Тексты, телефон и ссылки — тоже в `src/content.js`.

## Деплой на GitHub Pages (бесплатно)

1. Создай репозиторий на GitHub, запушь проект.
2. В настройках репо: **Settings → Pages → Source: GitHub Actions**.
3. В корне уже можно добавить workflow (или задеплоить вручную):

```bash
npm run build
# содержимое dist/ — в ветку gh-pages, либо через Actions
```

Минимальный workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

`vite.config.js` использует `base: './'` — относительные пути, подойдёт и для project Pages, и для Cloudflare Pages.

Альтернатива: залить папку `dist/` на [Cloudflare Pages](https://pages.cloudflare.com/) (Connect git или Direct Upload).
