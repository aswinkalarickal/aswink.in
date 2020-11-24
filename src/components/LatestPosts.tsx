import { Box, Heading, List } from '@chakra-ui/core'
import React from 'react'
import { BlogPostFrontMatter } from '../types'
import { getBlogPosts } from '../utils/blogPosts'
import BlogPost from './BlogPost'

const LatestPosts = () => {
  const filteredBlogPosts = getBlogPosts(3)

  return (
    <Box mt={8}>
      <Heading as="h2" size="xl">
        Latest posts
      </Heading>
      <List>
        {filteredBlogPosts.map((frontMatter: BlogPostFrontMatter, index) => (
          <BlogPost key={index} {...frontMatter} />
        ))}
      </List>
    </Box>
  )
}

export default LatestPosts
