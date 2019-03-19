import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'
import 'typeface-oswald'
import 'typeface-merriweather'

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
          color: ${({theme}) => theme.colors.orange};
          text-decoration: none;
          :hover {
                  text-decoration: underline;
          }
          font-size: 1.1rem;
  }
`

const Layout = ({ children }) => (
        <ThemeProvider theme={theme}>
                <>
                        <GlobalStyle />
                        {children}
                </>
        </ThemeProvider>
)

export default Layout
