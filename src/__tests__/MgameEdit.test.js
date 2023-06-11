import { render } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import MgameEdit from "../pages/MgameEdit"
import mockMgames from "../mockMgames"

describe("<MgameEdit />", () => {

  it('renders without crash', () => {
    render(
      <MemoryRouter initialEntries={["/mgameEdit/1"]}>
        <Routes>
          <Route path="/mgameEdit/:id" element={<MgameEdit mgames={mockMgames}/>}/>
        </Routes>
      </MemoryRouter>
    )
  })
})