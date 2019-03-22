import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import 'typeface-oswald'
import 'typeface-merriweather-sans'
import SEO from '../components/SEO'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
          color: ${ ({ theme }) => theme.colors.orange };
          text-decoration: none;
          :hover {
                  text-decoration: underline;
          }
          font-size: 1.1rem;
  }

  h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 1.5rem
        margin-bottom: 0.5rem;
        background: none;
  }

  hr {
          border: 0;
          border-top: 1px solid rgba(0,0,0,.1);
  }
`

const Layout = ({ children }) => (

  <ThemeProvider theme={theme}>
                <><SEO></SEO>
                        <GlobalStyle />
                        {children}
                </>
  </ThemeProvider>
)

export default Layout
