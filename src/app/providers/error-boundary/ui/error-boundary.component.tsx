import React, { type ErrorInfo, type ReactNode } from 'react'
import { types } from 'sass'
import Error = types.Error
import { ErrorPage } from '@pages/error'

interface IErrorBoundaryState {
    hasError: boolean
}
interface IErrorBoundaryProps {
    children: ReactNode
}

export class ErrorBoundary extends React.Component<
    IErrorBoundaryProps,
    IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.error(error, info.componentStack)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorPage />
        }

        return this.props.children
    }
}
