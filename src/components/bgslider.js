import React from 'react'
import styled from 'styled-components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { theme } from '../utils/theme'
import Image from './image'

export default class Menu extends React.Component {
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

                        .slider-pagination {
                                position: absolute;
                                bottom: 30px;
                                z-index: 1000;
                                align-items: center;
                                left: 0;
                                right: 0;
                                margin-left: auto;
                                margin-right: auto;
                        }
                        .slide-1{
                            opacity: 1;
                            transition: opacity 2s ease-in-out;
                        }
        
                        .slide-2 {
                            opacity: 0;
                            transition: opacity 2s ease-in-out;
                        }

                        .slide-3{
                            opacity: 0;
                            transition: opacity 2s ease-in-out;
                        }
        
                        .slide-4 {
                            opacity: 0;
                            transition: opacity 2s ease-in-out;
                        }
                        
                        .slide-radio1:checked ~ .slider-pagination .page1,
                        .slide-radio2:checked ~ .slider-pagination .page2,
                        .slide-radio3:checked ~ .slider-pagination .page3,
                        .slide-radio4:checked ~ .slider-pagination .page4 {
                                width: 8px;
                                height: 8px;
                                background: ${({ theme }) => theme.colors.white};
                        }
                        .slide-radio1:checked ~ .slide-1 {
                            opacity: 1;
                            transition: opacity 2s ease-in-out;
                          }
                          .slide-radio2:checked ~ .slide-2 {
                            opacity: 1;
                            transition: opacity 2s ease-in-out;
                          }
                          .slide-radio3:checked ~ .slide-3 {
                            opacity: 1;
                            transition: opacity 2s ease-in-out;
                          }
                          .slide-radio4:checked ~ .slide-4 {
                            opacity: 1;
                            transition: opacity 2s ease-in-out;
                          }
                `

                const PaginationLabel = styled.label`
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        display: inline-block;
                        background: ${({ theme }) => theme.colors.transparent};
                        margin: 0 10px;
                        cursor: pointer;
                        :checked {
                                width: 8px;
                                height: 8px;
                                background: ${({ theme }) => theme.colors.white};
                        }
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

                        justify-content: space-between;

                        a {
                                color: ${({ theme }) => theme.colors.transparent};
                                display: block;
                        }
                `
                const Slider = styled.div`
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                padding: 0;
                opacity: 1;
                z-index: 0;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                align-content: center;
                
                
                `
               /* const RespImage = styled(Image)`
                padding: 0;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                object-fit: cover; 
                object-position: center center;
                height: 100vh;
                width: 100%;
                `
*/
                return (
                        <Wrapper>
                                <input type="radio" name="slider" id="slider_1" className="slide-radio1" />
                                <input type="radio" name="slider" id="slider_2" className="slide-radio2" />
                                <input type="radio" name="slider" id="slider_3" className="slide-radio3" />
                                <input type="radio" name="slider" id="slider_4" className="slide-radio4" />
                                <div className="slider-pagination">
                                        <PaginationLabel for="slider_1" className="page1" />
                                        <PaginationLabel for="slider_2" className="page2" />
                                        <PaginationLabel for="slider_3" className="page3" />
                                        <PaginationLabel for="slider_4" className="page4" />
                                </div>
                                <SliderArrows>
                                        <a href="javascript:void(0);" className="slider_left" onClick="myFunction()">
                                                <FaAngleLeft />
                                        </a>
                                        <a href="javascript:void(0);" className="slider_right" onClick="myFunction()">
                                                <FaAngleRight />
                                        </a>
                                </SliderArrows>
                                <Slider className="slider slide-1"><Image filename="bg1.jpg"  /></Slider>
                                <Slider className="slider slide-2"><Image filename="bg2.jpg"  /></Slider>
                                <Slider className="slider slide-3"><Image filename="bg3.jpg"  /></Slider>
                                <Slider className="slider slide-4"><Image filename="bg4.jpg"  /></Slider>

                        </Wrapper>
                )
        }
}
