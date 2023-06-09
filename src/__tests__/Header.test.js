import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
  it("renders logo with a src and alt", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
    const logo = screen.getByAltText(/logo/i)
    expect(logo).toHaveAttribute("src", "MgameLogo.gif")
    expect(logo).toHaveAttribute("alt", "Mgame Tinder logo gif")
  })
})