import React from 'react'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSEO = ({ url, title, summary, publishedAt, banner }) => {
  const authorName = 'Aswin Kalarickal'
  const date = new Date(publishedAt).toISOString()
  const imageUrl = banner
    ? `https://aswink.in${banner}`
    : 'https://www.aswink.in/android-chrome-512x512.png'
  const featuredImage = {
    url: imageUrl,
    alt: title,
  }

  return (
    <>
      <NextSeo
        title={`${title} | ${authorName}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName={authorName}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[imageUrl]}
        publisherLogo="/android-chrome-192x192.png"
        publisherName={authorName}
        title={title}
        url={url}
      />
    </>
  )
}

export default BlogSEO
