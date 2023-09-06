import { ThemeSwitcher } from '@widgets/theme-switcher'
import { TodoList } from '@widgets/todo-list'

const HomePage = () => {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center">
            <ThemeSwitcher className="absolute left-0 top-0 m-[2rem]" />
            <TodoList />
        </div>
    )
}

export default HomePage
