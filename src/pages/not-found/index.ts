import { lazy } from 'react'

export const NotFoundPage = lazy(
    async () => await import('./ui/not-found.page'),
)
