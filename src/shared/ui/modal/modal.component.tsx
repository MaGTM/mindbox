import { type VoidFunction } from '@shared/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import { type ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface IModalProps {
    children: ReactNode
    onModalClose: VoidFunction
    isOpen: boolean

    title?: string
}

export const Modal = (props: IModalProps) => {
    const { children, title, onModalClose, isOpen } = props

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-modal-overlay"
                    onClick={onModalClose}
                    data-testid="modal-overlay"
                >
                    <motion.div
                        initial={{
                            translateY: -100,
                        }}
                        animate={{
                            translateY: 0,
                        }}
                        className="rounded-[0.5rem] bg-block-bg-light p-[0.75rem] dark:bg-block-bg-dark"
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        <h2 className="mb-[1rem] text-heading text-text-light">
                            {title}
                        </h2>
                        <div className="w-full">{children}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body,
    )
}
