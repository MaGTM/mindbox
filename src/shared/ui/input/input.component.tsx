import {
    type ChangeEvent,
    type InputHTMLAttributes,
    memo,
    useState,
} from 'react'

interface IInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    onChange?: (value: string) => void
}

export const Input = memo((props: IInputProps) => {
    const { onChange, ...nativeProps } = props

    const [text, setText] = useState('')

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (onChange) {
            onChange(value)
        }

        setText(value)
    }

    return (
        <label className="overflow-hidden rounded-[0.4rem] border-[0.02rem] border-text-light px-[0.7rem] py-[0.5rem]">
            <input
                {...nativeProps}
                value={text}
                onChange={changeHandler}
                className="h-full bg-transparent text-black outline-none placeholder:text-text-light dark:text-white"
            />
        </label>
    )
})
