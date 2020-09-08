import React from 'react'
import { Box, Button, Flex, Icon, Link, useColorMode } from '@chakra-ui/core'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import Logo from './Logo'

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const navBackgroundColor = {
    light: 'rgba(255, 255, 255, 0.8)',
    dark: 'rgba(30,31,33, 0.8)',
  }

  return (
    <StickyNav
      as="header"
      w="100%"
      px={4}
      py={[0, 8]}
      mt={[0, 8]}
      mx="auto"
      backgroundColor={navBackgroundColor[colorMode]}
    >
      <Flex
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW={768}
        mx="auto"
      >
        <Box>
          {/* Typescript doesn't allow use of custom Icon */}
          {/*<Icon name="logo" size={12} />*/}
          <Logo size={48} />
        </Box>
        <Box py={8}>
          <NextLink href="/">
            <Link>Home</Link>
          </NextLink>
          {/*<NextLink href="/projects">*/}
          {/*  <Link ml={4}>Projects</Link>*/}
          {/*</NextLink>*/}
          <NextLink href="/blog">
            <Link ml={4}>Blog</Link>
          </NextLink>
          <Button
            ml={4}
            w={10}
            h={10}
            onClick={toggleColorMode}
            _focus={{ outline: null }}
            aria-label="Toggle Color Mode"
          >
            <Icon name={colorMode === 'light' ? 'moon' : 'sun'} />
          </Button>
        </Box>
      </Flex>
    </StickyNav>
  )
}

export default Navbar
