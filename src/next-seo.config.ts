const title = 'Aswin Kalarickal'
const description =
  "I'm a Full-Stack Developer based in Kochi, IN. I'm into building mobile games and web applications."

export default {
  title,
  description,
  canonical: 'https://www.aswink.in/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.aswink.in/',
    title,
    description,
    images: [
      {
        url: 'https://www.aswink.in/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@aswinkalarickal',
    site: '@aswinkalarickal',
    cardType: 'summary_large_image',
  },
}
