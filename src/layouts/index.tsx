import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/core'
import { format } from 'date-fns'
import { JSXElement } from '@babel/types'

import { BlogPostFrontMatter } from '../types'
import Container from '../components/Container'
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
    <Container title={frontMatter.title}>
      <BlogSEO url={`http://aswink.in/blog/${slug}`} {...frontMatter} />

      <Heading as="h1" size="xl">
        {frontMatter.title}
      </Heading>
      <Text fontSize={14} color="gray.500">
        Posted on {format(new Date(frontMatter.publishedAt), 'MMM dd, yyyy')}
      </Text>
      <Box mt={4}>{children}</Box>
    </Container>
  )
}

export default BlogLayout
