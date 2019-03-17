import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    overflow-x: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.colors.dark};
        position: relative;
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
