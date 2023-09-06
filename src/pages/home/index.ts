import { lazy } from 'react'

const HomePageAsync = lazy(async () => await import('./ui/home.page'))

export { HomePageAsync as HomePage }
