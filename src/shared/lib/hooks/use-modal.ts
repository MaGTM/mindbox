import { useState } from 'react'

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHandler = () => {
        setIsOpen((prevState) => !prevState)
    }

    const closeHandler = () => {
        setIsOpen(false)
    }

    const openHandler = () => {
        setIsOpen(true)
    }

    return {
        isOpen,
        toggleHandler,
        closeHandler,
        openHandler,
    }
}
