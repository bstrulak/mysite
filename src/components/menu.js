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
                        background-color: ${theme} => theme.colors.light};
                        color: ${({ theme }) => theme.colors.dark};
                        width: 100%;
                        display: grid;
                        grid-template-columns: 200px 0 auto;
                        grid-template-rows: ${this.state.showMenu ? '60px 0' : '60px 165px'};
                        align-items: center;
                        grid-template-areas:
                                'logo icon icon'
                                'menu menu menu';
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
                `

                const Icon = styled(FaBars)`
                        grid-area: icon;
                        justify-self: end;
                        margin-right: 1em;
                        text-align: right;
                        font-size: 1.5rem;
                        color: ${({ theme }) => theme.colors.dark};
                `

                const Nav = styled.nav`
                        grid-area: menu;
                        justify-self: start;
                        align-self: center;
                        padding-left: 2em;
                        display: flex;
                        justify-content: space-between;
                        transform: scale(1, ${this.state.showMenu ? '0' : '1'});
                `

                const MenuList = styled.ul`
                        margin: 0;
                        padding: 0;
                        list-style: none;
                `

                const ListItem = styled.li``
                const MenuLink = styled(Link)`
                        color: ${({ theme }) => theme.colors.dark};
                        text-decoration: none;
                        font-weight: 700;
                        font-size: 0.9rem;
                        :hover {
                                color: ${({ theme }) => theme.colors.orange};
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
