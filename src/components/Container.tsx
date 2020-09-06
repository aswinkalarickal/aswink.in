import React from 'react'
import { Box } from '@chakra-ui/core'
import Head from 'next/head'

import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

const Container = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Box w="100%" maxW={768} mx="auto" px={4}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </Box>
    </>
  )
}

export default Container
