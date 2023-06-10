import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import MgameIndex from "../pages/MgameIndex"
import mockMgames from "../mockMgames"

describe("<MgameIndex />", () => {
  it("renders without crashing", () => {
    render(
        <BrowserRouter>
          <MgameIndex />
        </BrowserRouter>
    )
  })

  it("renders mgame cards", () => {
    const div = document.createElement("div")
    render(<MgameIndex mgames={mockMgames} />, div)
    mockMgames.forEach((mgame) => {
      const mgameName = screen.getByText(mgame.name)
      expect(mgameName).toBeInTheDocument()
    })
  })

})