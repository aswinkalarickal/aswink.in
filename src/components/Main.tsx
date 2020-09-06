import React from 'react'
import { Box } from '@chakra-ui/core'

const Main = ({ children }) => (
  <main>
    <Box maxW={640} mx="auto">
      {children}
    </Box>
  </main>
)

export default Main
