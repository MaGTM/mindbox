import { type ITodo } from '@shared/lib/types'
import { apiGetHelper } from '@shared/lib/utils'
import { useQuery } from 'react-query'

export const useGetTodos = () => {
    return useQuery('todos', async () => await apiGetHelper<ITodo[]>('todos'))
}
