/** Тексты и пути к ассетам — правь здесь. */

export const site = {
  name: 'Темир Ольга',
  tagline: 'Bachata Dance Fit · Краснодар',
  support:
    'Танцы для всех. Приходи без опыта — здесь спокойно, по-доброму и точно не страшно.',
  supportShort: 'Танцы для всех. Без опыта — не страшно.',
  phoneDisplay: '8 (918) 337-08-98',
  phoneTel: '+79183370898',
  whatsapp: 'https://wa.me/79183370898',
  telegram: 'https://t.me/OlgaTemir',
  telegramHandle: '@OlgaTemir',
  instagram: 'https://instagram.com/olikaolikaolika',
  instagramHandle: '@olikaolikaolika',
  /**
   * У MAX нет диплинка вида wa.me по номеру.
   * Вставь свою ссылку из приложения: Профиль → Пригласить → https://max.ru/u/...
   */
  max: 'https://max.ru/',
}

export const sections = {
  hero: {
    ctaPrimary: 'Написать в Telegram',
    ctaSecondary: 'WhatsApp',
    swipe: 'свайпай',
  },
  training: {
    title: 'Тренировки',
    text: 'Bachata Dance Fit под музыку. Можно с нуля — подскажу и поддержу. Главное прийти и попробовать.',
  },
  community: {
    title: 'Атмосфера',
    text: 'Группы дружат и за пределами зала. Тепло, поддержка и желание возвращаться.',
  },
  certificates: {
    title: 'Сообщество',
    text: 'Мы часть большого танцевального сообщества. Учимся у специалистов и растём вместе.',
  },
  contacts: {
    title: 'Записаться',
    text: 'Напиши в Telegram — расскажу про ближайшие занятия и как удобнее начать.',
    cta: 'Написать в Telegram',
  },
}

/** Cutout: положи PNG с прозрачным фоном как images/olga-cutout.png */
export const cutout = {
  src: './images/tov.png',
  alt: 'Темир Ольга',
}

/**
 * Видео: положи MP4 в public/videos/ и обнови список.
 * poster — кадр-обложка (можно SVG/JPG). Вертикальные 9:16.
 */
export const videos = [
  {
    src: './videos/training-1.mp4',
    poster: './images/video-poster-1.svg',
    label: 'Dance Fit',
  },
  {
    src: './videos/training-2.mp4',
    poster: './images/video-poster-2.svg',
    label: 'Bachata',
  },
  {
    src: './videos/training-3.mp4',
    poster: './images/video-poster-3.svg',
    label: 'В зале',
  },
]

/** Фото групп: положи файлы и обнови пути. */
export const groupPhotos = [
  { src: './images/group-1.svg', alt: 'Группа на тренировке' },
  { src: './images/group-2.svg', alt: 'После занятия' },
  { src: './images/group-3.svg', alt: 'Друзья по танцу' },
  { src: './images/group-4.svg', alt: 'Атмосфера зала' },
  { src: './images/group-5.svg', alt: 'Вместе' },
  { src: './images/group-6.svg', alt: 'Улыбки после класса' },
]

/** Сертификаты: замени на JPG/PNG. */
export const certificates = [
  { src: './images/cert-1.svg', alt: 'Сертификат специалиста' },
  { src: './images/cert-2.svg', alt: 'Сертификат обучения' },
  { src: './images/cert-3.svg', alt: 'Сертификат сообщества' },
  { src: './images/cert-4.svg', alt: 'Диплом / повышение квалификации' },
]
