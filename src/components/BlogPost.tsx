import React from 'react'
import { Heading, Link, ListItem, Text, useColorMode } from '@chakra-ui/core'
import NextLink from 'next/link'

import { BlogPostFrontMatter } from '../types'

const BlogPost = (frontMatter: BlogPostFrontMatter) => {
  const { colorMode } = useColorMode()

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '')

  return (
    <ListItem mt={4}>
      <Link _hover={{ textDecoration: 'none' }}>
        <NextLink href={`/blog/${slug}`}>
          <Heading as="h3" size="md" display="inline-block">
            {frontMatter.title}
          </Heading>
        </NextLink>
      </Link>
      <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
        {frontMatter.summary}
      </Text>
    </ListItem>
  )
}

export default BlogPost
