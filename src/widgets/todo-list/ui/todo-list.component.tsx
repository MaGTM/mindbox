import { AddTodoModal } from '@features/add-todo'
import AddIcon from '@shared/assets/icons/add-icon.svg'
import { useModal } from '@shared/lib/hooks'
import { Button } from '@shared/ui'
import { Todo } from '@widgets/todo-list/ui/todo.component'
import clsx from 'clsx'

import { useGetTodos } from '../api/todo-list.api'

export const TodoList = () => {
    const { isOpen, toggleHandler } = useModal()

    const { data: todos, isLoading } = useGetTodos()

    console.log(todos, isLoading)

    return (
        <>
            <div
                className={clsx(
                    'h-[18.5rem] w-[18rem] rounded-[0.5rem] bg-block-bg-light dark:bg-block-bg-dark',
                    'flex flex-col items-center pt-[0.75rem] shadow-todo-list transition-colors duration-300',
                )}
            >
                <Button
                    text="Add todo"
                    leftIcon={<AddIcon className="h-[1.3rem] w-[1.3rem]" />}
                    onClick={toggleHandler}
                />
                <div className="mt-4 flex max-h-full w-full flex-col overflow-auto">
                    {todos?.map((item) => {
                        return <Todo item={item} key={item.id} />
                    })}
                </div>
            </div>
            <AddTodoModal isOpen={isOpen} onModalClose={toggleHandler} />
        </>
    )
}
