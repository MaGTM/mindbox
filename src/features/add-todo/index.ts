import { lazy } from 'react'

export const AddTodoModal = lazy(
    async () => await import('./ui/add-todo.modal'),
)
