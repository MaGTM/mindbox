import { Switcher } from '@shared/ui'
import { fireEvent, render, screen } from '@testing-library/react'

const switcherTestId = 'switcher'

describe('Switcher', () => {
    test('is-render', () => {
        render(<Switcher testId={switcherTestId} />)

        expect(screen.getByTestId(switcherTestId)).toBeInTheDocument()
    })

    test('on click', () => {
        render(<Switcher testId={switcherTestId} />)

        const element = screen.getByTestId(switcherTestId)

        expect(element.firstChild).toHaveStyle({ left: '0.1rem' })

        fireEvent.click(element)
        expect(element.firstChild).toHaveStyle({
            left: 'calc(100% - 0.8rem - 0.1rem)',
        })
    })
})
