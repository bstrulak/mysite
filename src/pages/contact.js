import React from 'react'
import styled from 'styled-components'
import Layout from '../layout/layout'
import Menu from '../components/menu'
import Header from '../components/header'
import Image from '../components/image'
import Footer from '../components/footer'
import {FaEnvelope} from 'react-icons/fa'

const Container = styled.div`
        margin: 1.8rem auto;
        padding-right: 15px;
        padding-left: 15px;
        max-width: 800px;    
`

const H2 = styled.h2`
        font-size: 2rem;
        font-weight: 400;
        margin: 0;
`
const HR = styled.hr`
    max-width: 4rem;
    border-width: .2rem;
    border-color: #f4623a;
    border: 0;
    border-top: 2px solid  #f4623a;
    margin: 5px auto 10px auto;
    
`
const Muted = styled.p`
        font-size: 0.9rem;
        color: ${({theme}) => theme.colors.muted};
`
const Contact = styled.div`
       display: flex;
       flex-wrap: wrap;
max-width: 800px;
align-items: center;
  justify-content:center;
        `

const ImageWrapper = styled.div`
        flex: 1;
        flex-shrink: 0;
        max-width: 250px;
        min-width: 250px;
        padding: .25rem;
        border: 1px solid ${({theme}) => theme.colors.bgresp};;
        border-radius: .25rem;
        height: auto;
`
const EmailWrapper = styled.div`
        flex: 1;
        width: 100%
        height: 100%;
        padding: .25rem;
    border-radius: .25rem;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  justify-content: space-around;
  }
`

const EmailIcon = styled(FaEnvelope)`
        font-size: 5.5rem;
        color: #6c757d;
        margin: 10px;
`
export default () => (
        <Layout>
                <Menu>
                        <Header section="Contact" />
                        </Menu>
                        <Container>
                                <div style={{textAlign: 'center'}}>
                                        <H2>Contact me</H2>
                                        <HR />
                                        <Muted>Send me an email and I will get back to you as soon as possible!</Muted>
                                </div>
                                <Contact>
                                        <ImageWrapper>
                                               <Image filename="bogusz strulak.jpg"/>
                                        </ImageWrapper>
                                        <EmailWrapper>
                                                <EmailIcon></EmailIcon>
                                                <a className="d-block" href="mailto:bstrulak@gmail.com">
                                                        bstrulak@gmail.com
                                                </a>
                                        </EmailWrapper>
                                </Contact>
                        </Container>
                <Footer></Footer>
        </Layout>
)
