import ApproveIcon from '@shared/assets/icons/approve-icon.svg'
import clsx from 'clsx'
import { useState } from 'react'

interface ICheckboxProps {
    label?: string
    onChange?: (status: boolean) => void
    checked?: boolean
}

const defaultCheckboxClasses =
    'h-[0.8rem] w-[0.8rem] rounded-[0.2rem] border-[0.02rem] border-urgent'

export const Checkbox = (props: ICheckboxProps) => {
    const { label, onChange, checked = false } = props

    const [isChecked, setIsChecked] = useState(checked)

    const changeHandler = () => {
        setIsChecked((prevState) => !prevState)
        if (onChange) {
            onChange(!isChecked)
        }
    }

    return (
        <label className="flex h-fit cursor-pointer select-none items-center gap-2">
            <input
                type="checkbox"
                className="hidden"
                onChange={changeHandler}
            />
            {isChecked ? (
                <div
                    className={clsx(
                        defaultCheckboxClasses,
                        'flex items-center justify-center bg-urgent',
                    )}
                >
                    <ApproveIcon className="h-[0.4rem] w-[0.5rem] fill-white" />
                </div>
            ) : (
                <div className={defaultCheckboxClasses} />
            )}
            {label && <p className="text-small text-text-light">{label}</p>}
        </label>
    )
}
