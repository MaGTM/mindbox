import clsx from 'clsx'
import React, { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'

export enum ButtonTheme {
    Primary,
    Secondary,
}

interface IButtonComponentProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string

    onClick?: (e: React.MouseEvent) => void
    leftIcon?: ReactNode
    theme?: ButtonTheme
}

export const Button = memo((props: IButtonComponentProps) => {
    const {
        onClick,
        text,
        className,
        leftIcon,
        theme = ButtonTheme.Primary,
        ...nativeProps
    } = props

    const themeHandler = () => {
        switch (theme) {
            case ButtonTheme.Primary: {
                return clsx(
                    'bg-primary-light text-white dark:bg-primary-dark',
                    'hover:bg-primary-light-hover dark:hover:bg-primary-dark-hover',
                )
            }
            case ButtonTheme.Secondary: {
                return clsx(
                    'bg-secondary-light text-primary-light dark:bg-secondary-dark dark:text-primary-dark',
                    'hover:brightness-125',
                )
            }
            default:
        }
    }

    return (
        <button
            {...nativeProps}
            className={clsx(
                themeHandler(),
                'flex items-center justify-center gap-2 rounded-[0.4rem] px-[0.8rem] py-[0.5rem] duration-300 disabled:pointer-events-none disabled:opacity-50 disabled:grayscale',
                className,
            )}
            onClick={onClick}
        >
            {leftIcon}
            <p className="text-basic font-medium">{text}</p>
        </button>
    )
})
