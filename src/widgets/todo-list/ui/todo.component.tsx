import { type ITodo } from '../api/todo-list.api'

interface ITodoProps {
    item: ITodo
}

export const Todo = (props: ITodoProps) => {
    const { item } = props

    return (
        <div className="flex h-[2.85rem] min-h-[2.85rem] w-full items-center border-b-[0.02rem] border-bg-light px-[0.75rem]">
            <p>{item.title}</p>
        </div>
    )
}
