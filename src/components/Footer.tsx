import React from 'react'
import { Box, Link } from '@chakra-ui/core'

const Footer = () => (
  <Box as="footer" textAlign="center" fontSize={14} color="gray.500" py={8}>
    <nav>
      <Link>github</Link>
      <Link ml={4}>linkedin</Link>
      <Link ml={4}>instagram</Link>
    </nav>
    <div>Copyright &copy; {new Date().getFullYear()}</div>
  </Box>
)

export default Footer
