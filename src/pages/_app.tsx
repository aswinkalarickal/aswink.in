import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
  ITheme,
} from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/core'
import { DefaultSeo } from 'next-seo'

import MDXComponents from '../components/MDXComponents'
import theme from '../styles/theme'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'
import SEO from '../next-seo.config'
import Head from 'next/head'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  const config = (theme: ITheme) => ({
    light: {
      color: theme.colors.gray[700],
      bg: theme.colors.white,
      borderColor: theme.colors.gray[200],
      placeholderColor: theme.colors.gray[500],
    },
    dark: {
      color: theme.colors.whiteAlpha[900],
      bg: '#1e1f21',
      borderColor: theme.colors.whiteAlpha[300],
      placeholderColor: theme.colors.whiteAlpha[400],
    },
  })

  return (
    <>
      <CSSReset config={config} />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="light">
          <GlobalStyle>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
