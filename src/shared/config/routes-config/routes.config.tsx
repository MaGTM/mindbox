import { HomePage } from '@pages/home'
import { NotFoundPage } from '@pages/not-found'
import React from 'react'
import { type RouteProps } from 'react-router-dom'

enum Routes {
    Home = 'Home',
    NotFound = 'NotFound',
}

const RoutePaths: Record<Routes, string> = {
    [Routes.Home]: '/',
    [Routes.NotFound]: '*',
}

export const routes: Record<Routes, RouteProps> = {
    [Routes.Home]: {
        path: RoutePaths.Home,
        element: <HomePage />,
    },
    [Routes.NotFound]: {
        path: RoutePaths.NotFound,
        element: <NotFoundPage />,
    },
}
