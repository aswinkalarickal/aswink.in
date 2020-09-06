import React from 'react'
import { Box, Button, Flex, Icon, Link, useColorMode } from '@chakra-ui/core'
import NextLink from 'next/link'
import Logo from './Logo'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Flex align="center" justify="space-between">
        <Box>
          {/* Typescript doesn't allow use of custom Icon */}
          {/*<Icon name="logo" size={12} />*/}
          <Logo size={48} />
        </Box>
        <Box py={8}>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/projects">
            <Link ml={4}>Projects</Link>
          </NextLink>
          <NextLink href="/blog">
            <Link ml={4}>Blog</Link>
          </NextLink>
          <Button
            ml={4}
            w={10}
            h={10}
            onClick={toggleColorMode}
            _focus={{ outline: null }}
          >
            <Icon name={colorMode === 'light' ? 'moon' : 'sun'} />
          </Button>
        </Box>
      </Flex>
    </header>
  )
}

export default Navbar
