import React from 'react'
import { Link, PageRenderer } from 'gatsby'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { theme } from '../utils/theme'

export default class Menu extends React.Component {
        state = {
                showMenu: false,
        }

        togleMenu = () => {
                this.setState({ showMenu: !this.state.showMenu })
                console.log(this.state.showMenu)
        }

        render() {
                const Header = styled.header`
                        position: fixed;
                        z-index: 999;
                        background-color: ${({ theme }) => theme.colors.light};
                        color: ${({ theme }) => theme.colors.dark};
                        width: 100%;
                        display: grid;
                        grid-template-columns: 200px 0 auto;
                        grid-template-rows: ${this.state.showMenu ? '60px 0' : '60px 165px'};
                        align-items: center;
                        grid-template-areas: 'logo icon icon' 'menu menu menu';

                        ${({ theme }) => theme.media.desktop} {
                                background-color: ${({ theme }) => theme.colors.bgresp};
                                grid-template-rows: 60px 0;
                                grid-template-areas: 'logo icon menu';
                        }
                `

                const Logo = styled.div`
                        text-align: left;
                        white-space: nowrap;
                        max-width: 200px;
                        margin: 1em;
                        margin-left: 2em;
                        text-transform: uppercase;
                        grid-area: logo;
                `

                const Surname = styled.span`
                        font-weight: 900;
                        margin-left: -0.1em;
                `

                const LogoLink = styled(Link)`
                        font-size: 1.5rem;
                        font-family: 'Oswald';
                        font-weight: lighter;
                        text-decoration: none;
                        color: ${({ theme }) => theme.colors.dark};
                        ${({ theme }) => theme.media.desktop} {
                                color: ${({ theme }) => theme.colors.light};
                        }
                `

                const Icon = styled(FaBars)`
                        grid-area: icon;
                        justify-self: end;
                        margin-right: 1em;
                        text-align: right;
                        font-size: 1.5rem;
                        ${({ theme }) => theme.media.desktop} {
                                opacity: 0;
                        }
                `

                const Nav = styled.nav`
                        grid-area: menu;
                        justify-self: start;
                        align-self: center;
                        padding-left: 2em;
                        display: flex;
                        justify-content: space-between;
                        transform: scale(1, ${this.state.showMenu ? '0' : '1'});
                        ${({ theme }) => theme.media.desktop} {
                                transform: scale(1, 1);
                                justify-content: flex-end;
                                align-items: center;
                                width: 100%;
                                height: 100%;
                                padding-right: 20px;
                        }
                `

                const MenuList = styled.ul`
                        margin: 0;
                        padding-top: 10px;
                        list-style: none;
                `

                const ListItem = styled.li`
                        ${({ theme }) => theme.media.desktop} {
                                display: inline-block;
                                padding: 0 10px;
                        }
                `
                const MenuLink = styled(Link)`
                        color: ${({ theme }) => theme.colors.dark};
                        text-decoration: none;
                        font-weight: 700;
                        font-size: 0.9rem;
                        :hover {
                                color: ${({ theme }) => theme.colors.orange};
                        }

                        ${({ theme }) => theme.media.desktop} {
                                color: ${({ theme }) => theme.colors.light};
                        }
                `
                return (
                        <Header showMenu="{this.state.showMenu}">
                                <Logo>
                                        <LogoLink as={Link} to="/">
                                                Bogusz <Surname>Strulak</Surname>
                                        </LogoLink>
                                </Logo>
                                <Icon onClick={this.togleMenu} />
                                <Nav>
                                        <MenuList>
                                                <ListItem>
                                                        <MenuLink to="travel">Travel</MenuLink>
                                                </ListItem>
                                                <ListItem>
                                                        <MenuLink to="people">People</MenuLink>
                                                </ListItem>
                                                <ListItem>
                                                        <MenuLink to="products">Products</MenuLink>
                                                </ListItem>
                                                <ListItem>
                                                        <MenuLink to="blog">Blog</MenuLink>
                                                </ListItem>
                                                <ListItem>
                                                        <MenuLink to="contact">Contact</MenuLink>
                                                </ListItem>
                                        </MenuList>
                                </Nav>
                        </Header>
                )
        }
}
