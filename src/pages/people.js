import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import Layout from '../layout/layout'
import Menu from '../components/menu'

const Box = posed.div({
        visible: {
                opacity: 1,
                transition: {
                        duration: 3000,
                        ease: 'linear',
                },
        },
        hidden: {
                opacity: 0,
                transition: {
                        duration: 3000,
                        ease: 'linear',
                },
        },
})
const BoxS = styled(Box)`
        position: absolute;
        width: 500px;
        height: 300px;
        background: red;
        border-radius: 10px;
`

export default class Example extends React.Component {
        state = { isVisible: false }

        componentDidMount() {
                setInterval(() => {
                        this.setState({
                                isVisible: !this.state.isVisible,
                        })
                }, 2000)
        }

        render() {
                return (
                        <Layout>
                                <BoxS className="box" pose={this.state.isVisible ? 'visible' : 'hidden'} />
                        </Layout>
                )
        }
}
