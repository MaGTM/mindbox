import { routes } from '@shared/config'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                {Object.values(routes).map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}
