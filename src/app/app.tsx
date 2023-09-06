import { AppRouter } from './providers/router'

export const App = () => {
    return (
        <div className="min-h-screen min-w-[100vw] bg-bg-light transition-colors duration-300 dark:bg-bg-dark">
            <AppRouter />
        </div>
    )
}
