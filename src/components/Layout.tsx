import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/core'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

type LayoutProps = {
  title?: string
  children?: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{(title ? `${title} | ` : '') + 'Aswin Kalarickal'}</title>
      </Head>

      <Navbar />
      <Box as="main" w="100%" maxW={640} mx="auto" px={4} mt={[4, 8]}>
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
