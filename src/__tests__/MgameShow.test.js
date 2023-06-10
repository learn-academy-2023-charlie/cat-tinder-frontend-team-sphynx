import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import MgameShow from "../pages/MgameShow"
import mockMgames from "../mockMgames"

describe("<MgameShow />", () => {

  it('renders a img', () => {
    render(
      <MemoryRouter initialEntries={["/mgameshow/1"]}>
        <Routes>
          <Route path="/mgameshow/:id" element={<MgameShow mgames={mockMgames}/>}/>
        </Routes>
      </MemoryRouter>
    )
    screen.logTestingPlaygroundURL()
    const mgameImg = screen.getByAltText(/profile/i)
    expect(screen.getByAltText(/profile/i).alt).toBe("profile of Blue Archive")
  })
})