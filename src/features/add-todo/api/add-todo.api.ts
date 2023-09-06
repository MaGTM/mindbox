import { apiPostHelper } from '@shared/lib/utils'
import { useMutation, useQueryClient } from 'react-query'

interface IAddTodo {
    title: string
    isUrgent: boolean
}

const addTodo = apiPostHelper<IAddTodo>

export const useAddTodo = () => {
    const queryClient = useQueryClient()

    return useMutation(addTodo, {
        onSuccess: () => {
            void queryClient.invalidateQueries('todos')
        },
    })
}
