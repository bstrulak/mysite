import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import Layout from '../layout/layout'
import Menu from '../components/menu'

const Modal = posed.div({
        enter: {
                y: 0,
                opacity: 1,
                delay: 300,
                transition: {
                        y: { type: 'spring', stiffness: 1000, damping: 15 },
                        default: { duration: 3000 },
                },
        },
        exit: {
                y: 50,
                opacity: 0,
                transition: { duration: 3000 },
        },
})

const ModalStyle = styled(Modal)`
        position: absolute;
        width: 500px;
        height: 300px;
        background: white;
        border-radius: 10px;
`

const Shade = posed.div({
        enter: {
                opacity: 1,
                transition: {
                        duration: 2000,
                },
        },
        exit: { opacity: 0 },
})

const ShadeStyle = styled(Shade)`
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
`

export default class Example extends React.Component {
        state = { isVisible: false }

        componentDidMount() {
                setInterval(() => {
                        this.setState({
                                isVisible: !this.state.isVisible,
                        })
                }, 5000)
        }

        render() {
                const { isVisible } = this.state

                return (
                        <Layout>
                                <PoseGroup>
                                        {isVisible && [
                                                // If animating more than one child, each needs a `key`
                                                <ShadeStyle key="shade" />,
                                                <ModalStyle key="modal" />,
                                        ]}
                                </PoseGroup>
                        </Layout>
                )
        }
}
