import React from 'react'
import { Box, Button, Heading, Link, List, Text } from '@chakra-ui/core'
import NextLink from 'next/link'

import Container from '../components/Container'
import { getBlogPosts } from '../utils/blogPosts'
import { BlogPostFrontMatter } from '../types'
import BlogPost from '../components/BlogPost'

const Index = () => {
  const linkColor = 'pink.400'
  const filteredBlogPosts = getBlogPosts(3)

  return (
    <Container>
      <Box>
        <Heading as="h1" size="2xl">
          Hi, I'm Aswin Kalarickal
        </Heading>
        <Text mt={4}>
          I'm a Full-Stack Developer based in{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Kochi"
            isExternal={true}
            color={linkColor}
          >
            Kochi, IN
          </Link>
          . I'm into building mobile games and web applications. Currently I
          work at{' '}
          <Link
            href="https://dynamicnext.com?ref=https://aswink.in"
            color={linkColor}
          >
            Dynamicnext
          </Link>{' '}
          as Senior Game Developer.
        </Text>
        <Text mt={4}>
          I'm an ardent music and movie lover. At my free time I either listen
          to music or binge-watch.
        </Text>
      </Box>

      <Box mt={4}>
        <NextLink
          href="https://drive.google.com/file/d/0B41Dw2ondPUIUkprZXppRG4wVUE/view?usp=sharing"
          passHref={true}
        >
          <Button rightIcon="arrow-forward" aria-label="Get CV">
            Get my CV
          </Button>
        </NextLink>
      </Box>

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
    </Container>
  )
}

export default Index
