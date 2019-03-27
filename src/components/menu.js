import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export default class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = { showMenu: true, onTop: true }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
    if (this.props.onTop === 'false') {
      this.setState({ onTop: false })
    }
    console.log(this.state)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (event) {
    if (window.pageYOffset != 0) {
      this.setState({ onTop: false })
    }
  }

        togleMenu = () => {
          this.setState({ showMenu: !this.state.showMenu })
        }

        render () {
          const { children } = this.props

          const TopMenu = styled.div`
                        position: fixed;
                        z-index: 10;
                        background-color: ${ ({ theme }) => theme.colors.white };
                        color: ${ ({ theme }) => theme.colors.dark };
                        width: 100%;
                        display: grid;
                        grid-template-columns: 200px 0 auto;
                        grid-template-rows: ${ this.state.showMenu ? '60px 0' : '60px 165px' };
                        align-items: center;
                        grid-template-areas: 'logo icon icon' 'menu menu menu';

                        ${ !this.state.onTop && `
                                box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);` }

                        ${ ({ theme }) => theme.media.desktop } {
                                background-color: ${ this.state.onTop ? ({ theme }) => theme.colors.bgresp : ({ theme }) => theme.colors.white };
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
                        font-weight: 700;
                        margin-left: -0.1em;
                `

          const LogoLink = styled(Link)`
                        font-size: 1.5rem;
                        font-family: 'Oswald';
                        font-weight: 300;
                        text-decoration: none;
                        text-shadow: none;
                        color: ${ ({ theme }) => theme.colors.dark };
                        ${ ({ theme }) => theme.media.desktop } {
                                color: ${ this.state.onTop ? ({ theme }) => theme.colors.light : ({ theme }) => theme.colors.dark }
                                

                        }
                        :hover {
                                text-decoration: none;
                        }
                `

          const Icon = styled(FaBars)`
                        grid-area: icon;
                        justify-self: end;
                        margin-right: 1em;
                        text-align: right;
                        font-size: 1.5rem;
                        ${ ({ theme }) => theme.media.desktop } {
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
                        transform: scale(1, ${ this.state.showMenu ? '0' : '1' });
                        ${ ({ theme }) => theme.media.desktop } {
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
                        ${ ({ theme }) => theme.media.desktop } {
                                display: inline-block;
                                padding: 0 10px;
                        }
                `
          const MenuLink = styled(Link)`
                        color: ${ ({ theme }) => theme.colors.dark };
                        text-decoration: none;
                        text-shadow: none;
                        font-weight: 700;
                        font-size: 0.9rem;
                        :hover {
                                color: ${ ({ theme }) => theme.colors.orange };
                                text-decoration: none;
                        }

                        ${ ({ theme }) => theme.media.desktop } {
                                color: ${ this.state.onTop ? ({ theme }) => theme.colors.light : ({ theme }) => theme.colors.dark }
                        }
                `
          return (
            <header>
              <TopMenu showMenu="{this.state.showMenu}">
                <Logo>
                  <LogoLink as={Link} to="/">Bogusz <Surname>Strulak</Surname>
                  </LogoLink>
                </Logo>
                <Icon onClick={this.togleMenu} />
                <Nav>
                  <MenuList>
                    <ListItem>
                      <MenuLink to="/travel">Travel</MenuLink>
                    </ListItem>
                    <ListItem>
                      <MenuLink to="/people">People</MenuLink>
                    </ListItem>
                    <ListItem>
                      <MenuLink to="/products">Products</MenuLink>
                    </ListItem>
                    {/* } <ListItem>
                      <MenuLink to="/blog">Blog</MenuLink>
                    </ListItem> */}
                    <ListItem>
                      <MenuLink to="/contact">Contact</MenuLink>
                    </ListItem>
                  </MenuList>
                </Nav>
              </TopMenu>
              {children}
            </header>
          )
        }
}
