
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
        width: 100%;
        text-align: center;
        margin: 50px 0 20px 0;  
        color: ${({theme}) => theme.colors.muted};  
`

export default props => (
        <Wrapper>
              Copyright © 2019 - Bogusz Strulak
        </Wrapper>
)

