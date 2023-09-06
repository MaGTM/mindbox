import { Button } from '@shared/ui'
import { fireEvent, render } from '@testing-library/react'

describe('Button', () => {
    test('render', () => {
        const { getByText } = render(<Button text="Button" />)

        expect(getByText('Button')).toBeInTheDocument()
    })

    test('click', () => {
        const mockFn = jest.fn()

        const { getByText } = render(<Button text="Button" onClick={mockFn} />)

        const buttonElement = getByText('Button')

        fireEvent.click(buttonElement)

        expect(mockFn.mock.calls.length).toBe(1)
    })
})
