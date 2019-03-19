import React from 'react'
import styled from 'styled-components'
import Image from './image'

const Wrapper = styled.div`
        top: 0;
        left: 0;
        width: 100%;
        height: 40vh;
`

export default props => (
        <Wrapper>
                <Image filename="headers/header.jpg" style={{
                                                                        height: '100%',
                                                                        width: '100%',
                                                                        objectFit: 'cover !important',
                                                                        objectPosition: '0% 0% !important',
                                                                        transition: 'opacity 20s !important',
                                                                }}/>
        </Wrapper>
)
