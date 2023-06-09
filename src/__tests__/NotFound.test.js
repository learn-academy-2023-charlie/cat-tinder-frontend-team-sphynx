import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound';

describe('<NotFound />', () => {
  it('has an image', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notImg = screen.getByRole('img', {
      name: /Not found img/i
    })

    const notText = screen.getByAltText(/Not found img/i)

    expect(notText).toBeInTheDocument()  
  })

  it('has an image with attributes', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
    const notText = screen.getByAltText(/Not found img/i)
    expect(notText).toHaveAttribute("src", "https://media.tenor.com/FcVg5W9zZJQAAAAM/error.gif")
    expect(notText).toHaveAttribute("alt", "Not found img") 
  })

})