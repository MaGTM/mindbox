import { type ITodo } from '@shared/lib/types'
import { useMutation, useQueryClient } from 'react-query'

const updateTodo = async (config: { id: string; status: boolean }) => {
    return await new Promise((resolve, reject) => {
        const { status, id } = config

        const todos: ITodo[] = JSON.parse(localStorage.getItem('todos') ?? '[]')

        const currentTodo = todos.find((item) => item.id === id)

        if (!currentTodo) {
            reject(new Error(`Couldn't find todo with id: ${id}`))
            return
        }

        currentTodo.isDone = status

        const newTodos = todos.filter((item) => item.id !== id)

        newTodos.splice(currentTodo.order, 0, currentTodo)

        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(newTodos))
            resolve(true)
        }, 300)
    })
}

export const useCompleteTodo = () => {
    const queryClient = useQueryClient()

    return useMutation(updateTodo, {
        onSuccess: () => {
            void queryClient.invalidateQueries('todos')
        },
    })
}
