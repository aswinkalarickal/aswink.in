import React from 'react'
import { Box } from '@chakra-ui/core'

const Main = ({ children }) => (
  <main>
    <Box maxW={640} mx="auto" py={4}>
      {children}
    </Box>
  </main>
)

export default Main
