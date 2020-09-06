import { frontMatter as blogPosts } from '../pages/blog/**/*.mdx'
import { BlogPostFrontMatter } from '../types'

export const getBlogPosts = (size = -1) => {
  const filteredBlogPosts: BlogPostFrontMatter[] = (blogPosts as BlogPostFrontMatter[]).sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
  if (size == -1) {
    size = filteredBlogPosts.length
  }
  return filteredBlogPosts.slice(0, size)
}
