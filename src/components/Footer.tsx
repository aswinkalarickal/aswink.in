import React from 'react'
import { Box, Link } from '@chakra-ui/core'
import NextLink from 'next/link'

const Footer = () => (
  <Box as="footer" textAlign="center" fontSize={14} color="gray.500" py={8}>
    <nav>
      <NextLink href="https://github.com/aswinkalarickal" passHref={true}>
        <Link as="a">github</Link>
      </NextLink>

      <NextLink href="https://linkedin.com/in/aswinkalarickal" passHref={true}>
        <Link as="a" ml={4}>
          linkedin
        </Link>
      </NextLink>

      <NextLink href="https://instagram.com/aswin.kalarickal" passHref={true}>
        <Link as="a" ml={4}>
          instagram
        </Link>
      </NextLink>
    </nav>
    <div>Copyright &copy; {new Date().getFullYear()}</div>
  </Box>
)

export default Footer
