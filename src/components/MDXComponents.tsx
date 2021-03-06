import React from 'react'
import {
  Box,
  Callout,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  Image,
  useColorMode,
} from '@chakra-ui/core'
import NextLink from 'next/link'

const Table = props => (
  <Box overflowX="scroll" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
)

const THead = props => {
  const { colorMode } = useColorMode()
  const bg = {
    light: 'gray.50',
    dark: 'whiteAlpha.100',
  }

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  )
}

const TData = props => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
)

const CustomLink = props => {
  const color = 'hsl(331,79%,66%)'

  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref={true}>
        <Link color={color} _focus={{ outline: null }} {...props} />
      </NextLink>
    )
  }

  return (
    <Link
      color={color}
      _focus={{ outline: null }}
      isExternal={true}
      {...props}
    />
  )
}

const Quote = props => {
  const { colorMode } = useColorMode()
  const bgColor = {
    light: 'pink.50',
    dark: 'pink.900',
  }

  return (
    <Callout
      mt={4}
      w="98%"
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      borderColor="pink.500"
      fontStyle="italic"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8,
        },
      }}
      {...props}
    />
  )
}

const DocsHeading = props => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mb="1em"
    mt="2em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Link
          aria-label="anchor"
          as="a"
          color="pink.400"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          opacity={0}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </Link>
      )}
    </Box>
  </Heading>
)

const Hr = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}

const CustomImage = props => {
  return (
    <Link href={props.src} _focus={{ outline: null }}>
      <Image {...props} />
    </Link>
  )
}

const MDXComponents = {
  h1: props => <Heading as="h1" size="xl" my={4} {...props} />,
  h2: props => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
  h3: props => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
  inlineCode: props => (
    <Code variantColor="gray" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  br: props => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: props => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: props => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: props => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: props => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  img: CustomImage,
}

export { CustomLink }
export default MDXComponents
