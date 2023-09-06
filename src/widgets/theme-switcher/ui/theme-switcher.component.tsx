import { Switcher } from '@shared/ui'

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: IThemeSwitcherProps) => {
    const { className } = props

    const changeHandler = (status: boolean) => {
        document.documentElement.setAttribute(
            'data-mode',
            status ? 'dark' : 'light',
        )
    }

    return (
        <div className={className}>
            <Switcher onChange={changeHandler} />
        </div>
    )
}
