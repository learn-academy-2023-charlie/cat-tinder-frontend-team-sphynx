import React from "react"
import { Navbar, NavbarBrand } from "reactstrap"

const Footer = () => {
  return(
    <>
        <Navbar
            className="footer-nav"
            color="dark"
            dark
            fixed="bottom"
        >
            <NavbarBrand href="/">
            &copy; YueHan & Ramgel | 2023
            </NavbarBrand>
        </Navbar>
    </>
  )
}

export default Footer