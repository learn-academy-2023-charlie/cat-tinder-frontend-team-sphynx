import React from "react"
import MgameBanner from "../assets/MgameBanner.gif"

const Home = () => {
  return(
    <div
       className="banner-section"
      >
      <img
          className="banner-img"
          alt="banner-picture"
          src={MgameBanner}
      />
    </div>
  )
}

export default Home