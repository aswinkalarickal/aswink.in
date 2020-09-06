import React from 'react'
import { Heading, Text, Box } from '@chakra-ui/core'
import { format } from 'date-fns'
import { JSXElement } from '@babel/types'

import { BlogPostFrontMatter } from '../types'
import Container from '../components/Container'

type BlogLayoutProps = {
  frontMatter: BlogPostFrontMatter
  children: JSXElement
}

const BlogLayout = ({ frontMatter, children }: BlogLayoutProps) => {
  return (
    <Container title={frontMatter.title}>
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
