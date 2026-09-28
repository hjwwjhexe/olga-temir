import '@fontsource/unbounded/500.css'
import '@fontsource/unbounded/600.css'
import '@fontsource/unbounded/700.css'
import '@fontsource/onest/400.css'
import '@fontsource/onest/500.css'
import '@fontsource/onest/600.css'
import './style.css'
import {
  site,
  sections,
  cutout,
  videos,
  groupPhotos,
  certificates,
} from './content.js'

const icons = {
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12.04 2a9.94 9.94 0 0 0-8.5 15.1L2 22l4.99-1.31A9.96 9.96 0 1 0 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.97 3.86z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.8 4.3 2.9 11.6c-1.3.5-1.3 1.2-.2 1.5l4.8 1.5 1.9 5.7c.2.7.4.9 1 .9.6 0 .8-.3 1.1-.6l2.5-2.4 5.2 3.8c1 .5 1.6.2 1.9-.9l3.4-16c.3-1.4-.5-2-1.7-1.5zM9.5 14.7l-.2 3.3-1.4-4.7L18.3 7z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
  max: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.2 5.5h3.1l2.5 6.4 2.5-6.4h3.1L11.2 18H8.1L4.2 5.5zm11.4 0H19v12.5h-3.4V5.5z"/></svg>`,
}

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page" data-page>
    <div class="page__atmosphere" aria-hidden="true">
      <span class="orb orb--a"></span>
      <span class="orb orb--b"></span>
      <span class="orb orb--c"></span>
    </div>
    <div class="page__grain" aria-hidden="true"></div>

    <header class="snap hero" id="hero">
      <div class="hero__inner">
        <div class="hero__copy">
          <h1 class="hero__brand">${site.name}</h1>
          <p class="hero__tag">${site.tagline}</p>
          <p class="hero__support hero__support--full">${site.support}</p>
          <p class="hero__support hero__support--short">${site.supportShort}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" href="${site.telegram}" target="_blank" rel="noopener noreferrer">
              ${sections.hero.ctaPrimary}
            </a>
            <a class="btn btn--ghost" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer">
              ${sections.hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div class="hero__figure">
          <div class="hero__blob" aria-hidden="true"></div>
          <div class="hero__cutout" data-parallax>
            <img src="${cutout.src}" alt="${cutout.alt}" width="480" height="820" />
          </div>
        </div>
      </div>
      <a class="hero__swipe" href="#training" aria-label="${sections.hero.swipe}">
        <span>${sections.hero.swipe}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 10l6 6 6-6"/>
        </svg>
      </a>
    </header>

    <section class="snap section--training" id="training" aria-labelledby="training-title">
      <div class="section__head reveal">
        <h2 class="section__title" id="training-title">${sections.training.title}</h2>
        <p class="section__text">${sections.training.text}</p>
      </div>
      <div class="section__body">
        <div class="carousel reveal">
          <div class="carousel__track" data-carousel-track tabindex="0" aria-label="Видео с тренировок">
            ${videos
              .map(
                (v) => `
              <article class="carousel__slide" data-slide>
                <img class="carousel__poster" src="${v.poster}" alt="" />
                <video
                  playsinline
                  muted
                  loop
                  preload="metadata"
                  poster="${v.poster}"
                  data-src="${v.src}"
                  aria-label="${v.label}"
                ></video>
                <span class="carousel__label">${v.label}</span>
              </article>
            `,
              )
              .join('')}
          </div>
          <div class="carousel__nav">
            <button type="button" class="carousel__btn" data-carousel-prev aria-label="Предыдущее видео">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button type="button" class="carousel__btn" data-carousel-next aria-label="Следующее видео">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="snap section--community" id="community" aria-labelledby="community-title">
      <div class="section__head reveal">
        <h2 class="section__title" id="community-title">${sections.community.title}</h2>
        <p class="section__text">${sections.community.text}</p>
      </div>
      <div class="section__body">
        <div class="gallery" data-gallery>
          ${groupPhotos
            .map(
              (p) => `
            <figure class="gallery__item">
              <img src="${p.src}" alt="${p.alt}" loading="lazy" width="640" height="400" />
            </figure>
          `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="snap section--certificates" id="certificates" aria-labelledby="certificates-title">
      <div class="section__head reveal">
        <h2 class="section__title" id="certificates-title">${sections.certificates.title}</h2>
        <p class="section__text">${sections.certificates.text}</p>
      </div>
      <div class="section__body">
        <div class="certs" data-certs>
          ${certificates
            .map(
              (c) => `
            <figure class="certs__item">
              <img src="${c.src}" alt="${c.alt}" loading="lazy" width="480" height="640" />
            </figure>
          `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="snap section--contacts" id="contacts" aria-labelledby="contacts-title">
      <div class="contacts reveal">
        <h2 class="section__title" id="contacts-title">${sections.contacts.title}</h2>
        <p class="section__text">${sections.contacts.text}</p>
        <nav class="social" aria-label="Контакты">
          <a class="social__link social__link--primary" href="${site.telegram}" target="_blank" rel="noopener noreferrer" aria-label="Telegram ${site.telegramHandle}" title="Telegram">
            ${icons.telegram}
          </a>
          <a class="social__link" href="tel:${site.phoneTel}" aria-label="Позвонить ${site.phoneDisplay}" title="${site.phoneDisplay}">
            ${icons.phone}
          </a>
          <a class="social__link" href="${site.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
            ${icons.whatsapp}
          </a>
          <a class="social__link" href="${site.max}" target="_blank" rel="noopener noreferrer" aria-label="MAX" title="MAX">
            ${icons.max}
          </a>
          <a class="social__link" href="${site.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram ${site.instagramHandle}" title="Instagram">
            ${icons.instagram}
          </a>
        </nav>
        <p class="contacts__phone">
          <a href="tel:${site.phoneTel}">${site.phoneDisplay}</a>
        </p>
        <a class="btn btn--primary" href="${site.telegram}" target="_blank" rel="noopener noreferrer">
          ${sections.contacts.cta}
        </a>
        <p class="footer">Bachata Dance Fit · Краснодар</p>
      </div>
    </section>
  </div>
`

function setupReveal() {
  const root = document.querySelector('[data-page]')
  const nodes = document.querySelectorAll('.reveal, [data-gallery], [data-certs]')
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      }
    },
    { root, threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
  )
  nodes.forEach((n) => io.observe(n))
}

function setupParallax() {
  const page = document.querySelector('[data-page]')
  const figure = document.querySelector('[data-parallax]')
  if (!page || !figure || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let ticking = false
  const onScroll = () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(() => {
      const y = Math.min(page.scrollTop * 0.12, 48)
      figure.style.transform = `translateY(${y}px)`
      ticking = false
    })
  }
  page.addEventListener('scroll', onScroll, { passive: true })
}

function setupCarousel() {
  const track = document.querySelector('[data-carousel-track]')
  const prev = document.querySelector('[data-carousel-prev]')
  const next = document.querySelector('[data-carousel-next]')
  if (!track) return

  const scrollBySlide = (dir) => {
    const slide = track.querySelector('.carousel__slide')
    if (!slide) return
    const style = getComputedStyle(track)
    const gap = parseFloat(style.columnGap || style.gap) || 12
    const amount = slide.getBoundingClientRect().width + gap
    track.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  prev?.addEventListener('click', () => scrollBySlide(-1))
  next?.addEventListener('click', () => scrollBySlide(1))

  // Start from the left (first video)
  track.scrollLeft = 0

  const slides = track.querySelectorAll('[data-slide]')
  const videoIo = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const slide = entry.target
        const video = slide.querySelector('video')
        if (!video) continue

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          ensureVideoSource(video, slide)
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      }
    },
    { root: track, threshold: [0.5] },
  )

  slides.forEach((slide) => videoIo.observe(slide))
}

function ensureVideoSource(video, slide) {
  if (video.dataset.loaded) return
  const src = video.dataset.src
  if (!src) return

  video.dataset.loaded = '1'
  const source = document.createElement('source')
  source.src = src
  source.type = 'video/mp4'
  video.appendChild(source)
  video.load()

  video.addEventListener(
    'loadeddata',
    () => {
      slide.classList.add('is-ready')
    },
    { once: true },
  )

  video.addEventListener(
    'error',
    () => {
      slide.classList.remove('is-ready')
    },
    { once: true },
  )
}

setupReveal()
setupParallax()
setupCarousel()
