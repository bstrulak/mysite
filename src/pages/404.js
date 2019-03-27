import React from 'react'
import Layout from '../layout/layout'
import Menu from '../components/menu'
import styled from 'styled-components'
import Header from '../components/header'

const Container = styled.div`
        margin: 1.8rem auto;
        padding-right: 15px;
        padding-left: 15px;
        max-width: 800px;    
`

export default () => (
  <Layout>
    <Menu>
      <Header props="headers/header.jpg" />
    </Menu>
    <Container>
      <div style={{ textAlign: 'center' }}>
        <h2>404 - Page Not Found!</h2>
        <div style={{ fontSize: '3em' }}>
            Looks like I haven't shot this... yet!
        </div>

      </div>
    </Container>
  </Layout>
)
