import { render, screen } from '@testing-library/react'
import Error from './error'

test('error page renders successfully', () => {
    render(<Error message='404 No page found'/>)
    const errorElement = screen.getByText('404 No page found')
    expect(errorElement).toBeInTheDocument()
})

test('renders all the divs', () => {
    render(<Error />)
    const iconDiv = document.querySelector('.icon')
    const messageDiv = document.querySelector('.message')
    expect(messageDiv).toBeInTheDocument()
    expect(iconDiv).toBeInTheDocument()
})