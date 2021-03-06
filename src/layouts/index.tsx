import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/core'
import format from 'date-fns/format'
import { JSXElement } from '@babel/types'

import { BlogPostFrontMatter } from '../types'
import Layout from '../components/Layout'
import BlogSEO from '../components/BlogSEO'

type BlogLayoutProps = {
  frontMatter: BlogPostFrontMatter
  children: JSXElement
}

const BlogLayout = ({ frontMatter, children }: BlogLayoutProps) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '')

  return (
    <Layout title={frontMatter.title}>
      <BlogSEO url={`https://aswink.in/blog/${slug}`} {...frontMatter} />

      <Heading as="h1" size="xl">
        {frontMatter.title}
      </Heading>
      <Text fontSize={14} color="gray.500">
        Posted on {format(new Date(frontMatter.publishedAt), 'PPp')}
      </Text>
      <Box mt={4}>{children}</Box>
    </Layout>
  )
}

export default BlogLayout
