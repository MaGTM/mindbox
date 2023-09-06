import { apiGetHelper } from '@shared/lib/utils'
import { useQuery } from 'react-query'

export interface ITodo {
    id: number
    title: string
    isUrgent: boolean
}

export const useGetTodos = () => {
    return useQuery('todos', async () => await apiGetHelper<ITodo[]>('todos'))
}
