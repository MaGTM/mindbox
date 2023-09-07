import { fireEvent, render } from '@testing-library/react'

import { Modal } from './modal.component'

describe('Modal', () => {
    test('render', () => {
        const { getByText } = render(
            <Modal onModalClose={() => {}} isOpen>
                <p>test</p>
            </Modal>,
        )

        expect(getByText('test')).toBeInTheDocument()
    })

    test('close', () => {
        const mockFn = jest.fn()

        const { getByTestId } = render(
            <Modal onModalClose={mockFn} isOpen>
                <p>test</p>
            </Modal>,
        )

        const overlay = getByTestId('modal-overlay')

        fireEvent.click(overlay)

        expect(mockFn.mock.calls.length).toBe(1)
    })
})
