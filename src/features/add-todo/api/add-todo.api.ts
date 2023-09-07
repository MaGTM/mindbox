import { type ITodo } from '@shared/lib/types'
import { useMutation, useQueryClient } from 'react-query'
import { v4 as uuidv4 } from 'uuid'

const addTodo = async (data: Omit<ITodo, 'isDone' | 'id' | 'order'>) => {
    return await new Promise((resolve) => {
        const prevData: ITodo[] = JSON.parse(
            localStorage.getItem('todos') ?? '[]',
        )

        const formattedData: ITodo = {
            ...data,
            id: uuidv4(),
            isDone: false,
            order: 1,
        }

        prevData.unshift(formattedData)

        for (let i = 0; i < prevData.length; i++) {
            prevData[i].order = i
        }

        setTimeout(() => {
            localStorage.setItem('todos', JSON.stringify(prevData))
            resolve(true)
        }, 500)
    })
}

export const useAddTodo = () => {
    const queryClient = useQueryClient()

    return useMutation(addTodo, {
        onSuccess: () => {
            void queryClient.invalidateQueries('todos')
        },
    })
}
