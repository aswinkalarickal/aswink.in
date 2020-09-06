import React from 'react'
import { Heading, List } from '@chakra-ui/core'

import Container from '../components/Container'
import BlogPost from '../components/BlogPost'
import { BlogPostFrontMatter } from '../types'
import { getBlogPosts } from '../utils/blogPosts'

const Blog = () => {
  const filteredBlogPosts = getBlogPosts()

  return (
    <Container title="Blog">
      <Heading as="h2" size="xl">
        All posts
      </Heading>
      <List>
        {filteredBlogPosts.map((frontMatter: BlogPostFrontMatter, index) => (
          <BlogPost key={index} {...frontMatter} />
        ))}
      </List>
    </Container>
  )
}

export default Blog
