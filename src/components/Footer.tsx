import React from 'react'
import { Box, Link } from '@chakra-ui/core'

const Footer = () => (
  <footer>
    <Box textAlign="center" fontSize={14} color="gray.500">
      <nav>
        <Link>github</Link>
        <Link ml={4}>linkedin</Link>
        <Link ml={4}>instagram</Link>
      </nav>
      <div>Copyright &copy; {new Date().getFullYear()}</div>
    </Box>
  </footer>
)

export default Footer
