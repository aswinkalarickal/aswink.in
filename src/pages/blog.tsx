import React from 'react'
import { Heading, List } from '@chakra-ui/core'

import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'
import { getBlogPosts } from '../utils/blogPosts'

const Blog = () => {
  const filteredBlogPosts = getBlogPosts()

  return (
    <Layout title="Blog">
      <Heading as="h2" size="xl">
        All posts
      </Heading>
      <List>
        {filteredBlogPosts.map((frontMatter, index) => (
          <BlogPost key={index} {...frontMatter} />
        ))}
      </List>
    </Layout>
  )
}

export default Blog
