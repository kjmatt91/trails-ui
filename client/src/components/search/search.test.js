import { render, screen, fireEvent } from '@testing-library/react'
import MockSearch from './search.mock'

test('renders search component', () => {
    render(<MockSearch/>)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
})

test('search box should be empty initially', () => {
    render(<MockSearch/>)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement.value).toEqual('')
})

test('search box should change value', () => {
    render(<MockSearch/>)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, {target:{value:'What an amazing Trail!'}})
    expect(inputElement.value).toEqual('What an amazing Trail!')
})

