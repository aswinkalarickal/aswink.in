import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { Global, css } from '@emotion/core'

import MDXComponents from '../components/MDXComponents'
import theme from '../styles/theme'
import { prismLightTheme, prismDarkTheme } from '../styles/prism'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <CSSReset />
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
            background: ${colorMode === 'light' ? 'white' : '#1e1f21'};
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
            <CSSReset />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
