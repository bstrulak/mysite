import React from 'react'
import Layout from '../layout/layout'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Menu from '../components/menu'
import Header from '../components/header'
import Images from '../components/images'
import styled from 'styled-components'

const Container = styled.div`
        padding-right: 5px;
        padding-left: 5px;
        max-width: 80vw; 
        margin: auto;
`

export default () => (
  <Layout><Menu>
    <Header props="headers/header_pe.jpg" />
  </Menu>
  <Container>
    <h2>People Photography</h2>
    <hr></hr>
    <Images props="people"></Images>
    <Footer></Footer>
  </Container>
  </Layout>
)
