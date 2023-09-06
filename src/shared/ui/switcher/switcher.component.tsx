import clsx from 'clsx'
import { memo, useState } from 'react'

interface ISwitcherProps {
    onChange?: (status: boolean) => void
    status?: boolean

    // JEST
    testId?: string
}

export const Switcher = memo((props: ISwitcherProps) => {
    const { onChange, status, testId } = props

    const [isOn, setIsOn] = useState(status ?? false)

    const changeHandler = () => {
        setIsOn((prevState) => !prevState)
        if (onChange) {
            onChange(!isOn)
        }
    }

    return (
        <label
            className={clsx(
                'relative block h-[1rem] w-[1.8rem] cursor-pointer rounded-[1rem] bg-primary-light duration-300',
                'dark:bg-primary-dark',
            )}
            data-testid={testId}
        >
            <div
                className={clsx(
                    'absolute top-1/2 aspect-square h-[0.8rem] -translate-y-1/2 rounded-full bg-bg-light duration-300',
                )}
                style={{
                    left: isOn ? `calc(100% - 0.8rem - 0.1rem)` : '0.1rem',
                }}
            />
            <input
                type="checkbox"
                className="hidden"
                onChange={changeHandler}
            />
        </label>
    )
})
