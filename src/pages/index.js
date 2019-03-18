import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../layout/layout'
import Menu from '../components/menu'
import BgSlider from '../components/bgslider'

const IndexPage = props => (
        <Layout>
                <Menu />
                <BgSlider />
        </Layout>
)

export default IndexPage
