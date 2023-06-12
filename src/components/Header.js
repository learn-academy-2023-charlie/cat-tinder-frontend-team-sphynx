import React,{ useState } from 'react'
import { 
  Navbar, 
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Collapse,
  NavbarText,
 } from "reactstrap"
import { NavLink } from "react-router-dom"
import MgameLogo from "../assets/MgameLogo.gif"
import MgameView from "../assets/MgameView.png"
import MgameAdd from "../assets/MgameAdd.png"
import MgameShareFont from "../assets/MgameShareFont.png"



function Header(...args) {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return(
    <div>
    <Navbar 
      {...args}
      color="dark"
      dark
      >
      <NavbarBrand href="/">
        <img
            src={MgameLogo}
            alt="Mgame Tinder logo gif"
            className="mgame-logo"
            height="120px"
            width="120px"
        />
        
        <img 
            src={MgameShareFont}
            alt="Mgame share fonts"
            className="mgame-share-font"
        />
        </NavbarBrand>
          <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
              
              <Nav 
                className="drop-down" 
                justified
              >

                <NavItem>
                  <NavLink to="/mgameindex" className="nav-link">
                  <img 
                  src={MgameView}
                  height="15px"
                  />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="/mgamenew" className="nav-link">
                  <img 
                  src={MgameAdd}
                  height="15px"
                  />
                  </NavLink>
                </NavItem>
              
              </Nav>

              <NavbarText>Work in progress =)</NavbarText>

            </Collapse>
    </Navbar>
  </div>
  )
}

export default Header