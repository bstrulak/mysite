import React from 'react'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight, FaMinus } from 'react-icons/fa'
import posed, { PoseGroup } from 'react-pose'
import { theme } from '../utils/theme'
import Image from './image'

export default class Menu extends React.Component {
        constructor(props) {
                super(props)
                this.state = {
                        selected: 0,
                }
        }

        slideLeft() {
                const newSelected = (this.state.selected - 1) % 4
                this.setState({ selected: newSelected < 0 ? 3 : newSelected })
                console.log(this.state.selected)
                console.log(this.state.selected === 0)
        }

        slideRight() {
                const newSelected = (this.state.selected + 1) % 4
                this.setState({ selected: newSelected })
                console.log(this.state.selected)
        }

        slidePage(page) {
                this.setState({ selected: page })
        }

        componentDidMount() {
                this.interval = setInterval(() => {
                        this.setState({
                                selected: (this.state.selected + 1) % 4,
                        })
                }, 5000)
        }

        componentWillUnmount() {
                clearInterval(this.interval)
        }

        render() {
                const Wrapper = styled.div`
                        display: block;
                        background: #000;
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        text-align: center;
                        height: 100%;
                `
                const SliderPagination = styled.div`
                        position: absolute;
                        bottom: 10px;
                        z-index: 1000;
                        align-items: center;
                        left: 0;
                        right: 0;
                        margin-left: auto;
                        margin-right: auto;
                        color: ${({ theme }) => theme.colors.transparent};
                        font-size: 1.7em;
                `

                const PaginationLabel = styled.label`
                        display: inline-block;
                        margin: 0 3px;
                        color: ${props => (props.selected ? theme.colors.white : theme.colors.transparent)};
                `
                const SliderArrows = styled.div`
                        position: absolute;
                        z-index: 1000;
                        top: 50%;
                        font-size: 3em;
                        width: 100%;
                        padding-left: 20px;
                        padding-right: 20px;
                        display: flex;
                        color: ${({ theme }) => theme.colors.transparent};
                        justify-content: space-between;
                `

                const Slider = styled.div`
                        width: 100%;
                        height: 100vh;
                        position: absolute;
                        left: 0;
                        top: 0;
                        padding: 0;
                        z-index: 0;
                        opacity: ${props => (props.visible ? '1' : '0')};
                `

                return (
                        <Wrapper>
                                <SliderPagination>
                                        <PaginationLabel selected={this.state.selected === 0}>
                                                <FaMinus onClick={this.slidePage.bind(this, 0)} />
                                        </PaginationLabel>
                                        <PaginationLabel selected={this.state.selected === 1}>
                                                <FaMinus onClick={this.slidePage.bind(this, 1)} />
                                        </PaginationLabel>
                                        <PaginationLabel selected={this.state.selected === 2}>
                                                <FaMinus onClick={this.slidePage.bind(this, 2)} />
                                        </PaginationLabel>
                                        <PaginationLabel selected={this.state.selected === 3}>
                                                <FaMinus onClick={this.slidePage.bind(this, 3)} />
                                        </PaginationLabel>
                                </SliderPagination>

                                <SliderArrows>
                                        <FaAngleLeft onClick={this.slideLeft.bind(this)} />
                                        <FaAngleRight onClick={this.slideRight.bind(this)} />
                                </SliderArrows>
                                <Slider visible={this.state.selected === 0}>
                                        <Image filename="bg1.jpg" />
                                </Slider>
                                <Slider visible={this.state.selected === 1}>
                                        <Image filename="bg2.jpg" />
                                </Slider>
                                <Slider visible={this.state.selected === 2}>
                                        <Image filename="bg3.jpg" />
                                </Slider>
                                <Slider visible={this.state.selected === 3}>
                                        <Image filename="bg4.jpg" />
                                </Slider>
                        </Wrapper>
                )
        }
}
