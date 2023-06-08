import React from "react"
import { Navbar } from "reactstrap"

const Header = () => {
  return(
    <>
        <Navbar
            className="my-2"
            color="secondary"  
        >
        <a href="/">
          <img 
            src="https://see.fontimg.com/api/renderfont4/51Pp8/eyJyIjoiZnMiLCJoIjozNywidyI6MTAwMCwiZnMiOjM3LCJmZ2MiOiIjRDlFRUZDIiwiYmdjIjoiIzIyMjIyMiIsInQiOjF9/TW9iaWxlIEdhbWUgU2hhcmluZyBDZW50ZXI/drexs.png" 
            alt="Mgame center fonts" 
            height="30" 
          />
        </a>
      </Navbar>
    </>
  )
}

export default Header