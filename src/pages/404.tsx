import React from 'react'
import { Box, Image, Text, Link } from '@chakra-ui/core'
import NextLink from 'next/link'
import Layout from '../components/Layout'

const Error = () => {
  return (
    <Layout title="404 Page Not Found">
      <Box textAlign="center">
        <Image src={'/static/images/404.svg'} alt="404" width="100%" />
        <Box mt={8}>
          <Text>
            Oops! You have reached the other end of the world... There's nothing
            for you here!
          </Text>
          <Link color="pink.400">
            <NextLink href="/">&larr; Go back home</NextLink>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default Error
