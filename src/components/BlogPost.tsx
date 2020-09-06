import React from 'react'
import { Heading, Link, ListItem, Text } from '@chakra-ui/core'
import NextLink from 'next/link'

import { BlogPostFrontMatter } from '../types'

const BlogPost = (frontMatter: BlogPostFrontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '')

  return (
    <ListItem mt={4}>
      <Link _hover={{ textDecoration: 'none' }}>
        <NextLink href={`/blog/${slug}`}>
          <Heading as="h3" size="md">
            {frontMatter.title}
          </Heading>
        </NextLink>
      </Link>
      <Text>{frontMatter.summary}</Text>
    </ListItem>
  )
}

export default BlogPost
