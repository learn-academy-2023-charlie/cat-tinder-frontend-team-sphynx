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
            height="150px"
            width="150px"
        />
        <img 
            src="https://see.fontimg.com/api/renderfont4/z8p30/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTAwMCwiZnMiOjUxLCJmZ2MiOiIjQ0FEQkU4IiwiYmdjIjoiIzIyMjIyMiIsInQiOjF9/TS1HYW1lIFNoYXJl/lightersdemo.png" 
            alt="Mgame share fonts" 
            height="50px"
        />
        </NavbarBrand>
          <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
              
              <Nav 
                className="drop-down" 
                justified
                pills
              >

                <NavItem>
                  <NavLink href="../pages/mgameindex">
                  <img 
                  src="https://see.fontimg.com/api/renderfont4/z8p30/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTAwMCwiZnMiOjE4LCJmZ2MiOiIjNEY5QkQ1IiwiYmdjIjoiIzIyMjIyMiIsInQiOjF9/VmlldyBHYW1lcw/lightersdemo.png" 
                  alt="view game fonts"
                  height="15px"
                  />
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="../pages/mgamenew">
                  <img 
                  src="https://see.fontimg.com/api/renderfont4/z8p30/eyJyIjoiZnMiLCJoIjoxOCwidyI6MTAwMCwiZnMiOjE4LCJmZ2MiOiIjNEY5QkQ1IiwiYmdjIjoiIzIyMjIyMiIsInQiOjF9/QWRkIE5ldw/lightersdemo.png" 
                  alt="Add new fonts"
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