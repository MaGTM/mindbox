import { CompleteTodo } from '@features/complete-todo'
import { type ITodo } from '@shared/lib/types'
import clsx from 'clsx'
import { useState } from 'react'

interface ITodoProps {
    item: ITodo
}

export const Todo = (props: ITodoProps) => {
    const { item } = props

    const [isDone, setIsDone] = useState(item.isDone)

    return (
        <div
            className={clsx(
                'flex h-[2.85rem] min-h-[2.85rem] w-full items-center justify-between border-b-[0.02rem] px-[0.75rem] duration-300',
                isDone ? 'bg-primary-light' : 'border-bg-light',
                item.isUrgent && !isDone && 'bg-urgent',
            )}
        >
            <p
                className={clsx(
                    'duration-300',
                    isDone
                        ? 'text-white'
                        : 'text-text-light dark:text-text-dark',
                    item.isUrgent && !isDone && 'text-white dark:text-white',
                )}
            >
                {item.title}
            </p>
            <div>
                <CompleteTodo
                    todoId={item.id}
                    isDone={isDone}
                    setIsDone={setIsDone}
                />
            </div>
        </div>
    )
}
