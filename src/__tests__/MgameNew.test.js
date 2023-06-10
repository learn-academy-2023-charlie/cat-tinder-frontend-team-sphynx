import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import MgameNew from '../pages/MgameNew';

describe("<MgameNew />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
              <MgameNew />
            </BrowserRouter>
        )
      })
})