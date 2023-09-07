import ApproveIcon from '@shared/assets/icons/approve-icon.svg'
import clsx from 'clsx'
import { memo, useState } from 'react'

interface ICheckboxProps {
    label?: string
    onChange?: (status: boolean) => void
    checked?: boolean
    checkedClassNames?: string
    unCheckedClassNames?: string
}

const defaultCheckboxClasses =
    'h-[0.8rem] w-[0.8rem] rounded-[0.2rem] border-[0.02rem] border-urgent'

export const Checkbox = memo((props: ICheckboxProps) => {
    const {
        label,
        onChange,
        checked = false,
        unCheckedClassNames,
        checkedClassNames,
    } = props

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
                        checkedClassNames,
                    )}
                >
                    <ApproveIcon className="h-[0.4rem] w-[0.5rem] fill-white" />
                </div>
            ) : (
                <div
                    className={clsx(
                        defaultCheckboxClasses,
                        unCheckedClassNames,
                    )}
                />
            )}
            {label && <p className="text-small text-text-light">{label}</p>}
        </label>
    )
})
