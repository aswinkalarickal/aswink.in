import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/core'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

type ContainerProps = {
  title?: string
  children?: ReactNode
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | Aswin Kalarickal` : 'Aswin Kalarickal'}
        </title>
      </Head>

      <Navbar />
      <Box as="main" w="100%" maxW={640} mx="auto">
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Container
