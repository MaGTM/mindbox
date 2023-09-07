import { useCompleteTodo } from '@features/complete-todo/api/complete-todo.api'
import { useDebounce, useIsFirst } from '@shared/lib/hooks'
import { Checkbox } from '@shared/ui'
import { type Dispatch, type SetStateAction, useEffect } from 'react'

interface ICompleteTodoProps {
    todoId: string
    isDone: boolean
    setIsDone: Dispatch<SetStateAction<boolean>>
}

export const CompleteTodo = (props: ICompleteTodoProps) => {
    const { isDone, todoId, setIsDone } = props

    const { mutate: updateTodo } = useCompleteTodo()

    const debouncedValue = useDebounce(isDone)
    const isFirst = useIsFirst()

    const updateHandler = (status: boolean) => {
        setIsDone(status)
    }

    useEffect(() => {
        if (isFirst) return

        updateTodo({
            status: debouncedValue,
            id: todoId,
        })
    }, [debouncedValue])

    return (
        <Checkbox
            checked={isDone}
            onChange={updateHandler}
            unCheckedClassNames="!w-[1rem] !h-[1rem] !rounded-full !border-primary-light"
            checkedClassNames="!w-[1rem] !h-[1rem] !rounded-full !border-primary-light !bg-block-bg-light [&>svg]:!fill-primary-light"
        />
    )
}
