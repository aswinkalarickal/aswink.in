import React from 'react'

import Container from '../components/Container'
import { Heading, Link, Text } from '@chakra-ui/core'

const Index = () => {
  const linkColor = 'pink.400'

  return (
    <Container title="Aswin Kalarickal">
      <Heading as="h1" size="2xl">
        Hi, I'm Aswin Kalarickal
      </Heading>
      <Text mt={4}>
        I'm a Full-Stack Developer based in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Kochi"
          isExternal
          color={linkColor}
        >
          Kochi, IN
        </Link>
        . I'm into building mobile games and web applications. Currently I work
        at{' '}
        <Link
          href="https://dynamicnext.com?ref=https://aswink.in"
          color={linkColor}
        >
          Dynamicnext
        </Link>{' '}
        as Senior Game Developer.
      </Text>
      <Text mt={4}>
        I'm an ardent music and movie lover. At my free time I either listen to
        music or binge-watch.
      </Text>
    </Container>
  )
}

export default Index
