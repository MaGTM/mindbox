import { type VoidFunction } from '@shared/lib/types'
import { Modal } from '@shared/ui'

import { AddTodoForm } from './add-todo.form'

interface IAddTodoModalProps {
    isOpen: boolean
    onModalClose: VoidFunction
}

const AddTodoModal = (props: IAddTodoModalProps) => {
    const { onModalClose, isOpen } = props

    return (
        <Modal title="Create todo" onModalClose={onModalClose} isOpen={isOpen}>
            <AddTodoForm onModalClose={onModalClose} />
        </Modal>
    )
}

export default AddTodoModal
