import { Heading, Link, ListItem, Text, useColorMode } from '@chakra-ui/core'
import React from 'react'
import NextLink from 'next/link'

const ProjectItem = ({ title, summary, url }) => {
  const { colorMode } = useColorMode()

  return (
    <ListItem mt={4}>
      <Link isExternal={true} _hover={{ textDecoration: 'none' }}>
        <NextLink href={url}>
          <Heading as="h3" size="md" display="inline-block">
            {title}
          </Heading>
        </NextLink>
        <Text color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
          {summary}
        </Text>
      </Link>
    </ListItem>
  )
}

export default ProjectItem
