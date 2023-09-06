import { Button } from '@shared/ui'

export const ErrorPage = () => {
    const reloadPageHandler = () => {
        window.location.reload()
    }

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-bg-light dark:bg-bg-dark">
            <h1 className="text-heading font-medium">
                Случилось что-то очень плохое :(
            </h1>
            <Button
                onClick={reloadPageHandler}
                text="Перезагрузить"
                className="mt-2"
            />
        </div>
    )
}
