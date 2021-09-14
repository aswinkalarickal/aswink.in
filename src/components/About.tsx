import { Box, Button, Heading, Link, Text } from '@chakra-ui/core'
import React from 'react'
import NextLink from 'next/link'

const About = () => {
  const linkColor = 'pink.400'

  return (
    <Box>
      <Heading as="h1" size="2xl">
        Hi, I'm Aswin Kalarickal
      </Heading>
      <Text as="p" mt={4}>
        I'm a Programmer based in{' '}
        <Link
          href="https://en.wikipedia.org/wiki/Abu_Dhabi"
          isExternal={true}
          color={linkColor}
        >
          Abu Dhabi, AE
        </Link>
        . I'm into building mobile games and web applications. Currently I work
        at{' '}
        <Link
          href="https://www.ubisoft.com/"
          color={linkColor}
        >
          Ubisoft Abu Dhabi
        </Link>{' '}
        as Online Programmer.
      </Text>
      <Text as="p" mt={4}>
        I'm an ardent music and movie lover. At my free time I either listen to
        music or binge-watch.
      </Text>
      <NextLink
        href="https://drive.google.com/file/d/0B41Dw2ondPUIUkprZXppRG4wVUE/view?usp=sharing"
        passHref={true}
      >
        <Button mt={6} rightIcon="arrow-forward" aria-label="Get CV">
          Get my CV
        </Button>
      </NextLink>
    </Box>
  )
}

export default About
