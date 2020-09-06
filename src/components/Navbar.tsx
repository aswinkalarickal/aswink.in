import React from 'react'
import { Box, Button, Flex, Icon, Link, useColorMode } from '@chakra-ui/core'
import NextLink from 'next/link'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <header>
      <Flex align="center" justify="space-between">
        <Box>
          <Icon name="logo" size={12} />
        </Box>
        <Box color="white.alpha.700" py={8}>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/about">
            <Link ml={4}>About</Link>
          </NextLink>
          <NextLink href="/projects">
            <Link ml={4}>Projects</Link>
          </NextLink>
          <NextLink href="/blog">
            <Link ml={4}>Blog</Link>
          </NextLink>
          <Button ml={4} w={10} h={10} onClick={toggleColorMode}>
            <Icon name="moon" />
          </Button>
        </Box>
      </Flex>
    </header>
  )
}

export default Navbar
