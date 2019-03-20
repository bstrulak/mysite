import React from 'react'
import Layout from '../layout/layout'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import Menu     from '../components/menu'
import Header from '../components/header'

export default () => (
        <Layout><Menu>
        <Header section="Contact" />
        </Menu>
                <h1>Gallery</h1>
                <Gallery props="travel"></Gallery>
                <Footer></Footer>
        </Layout>
)
