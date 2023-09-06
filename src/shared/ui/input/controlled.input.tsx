import { Input } from '@shared/ui'
import { type InputHTMLAttributes } from 'react'
import {
    Controller,
    type FieldValues,
    type UseControllerProps,
} from 'react-hook-form'

interface IControlledInputProps<T extends FieldValues>
    extends UseControllerProps<T>,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'name'> {}

export const ControlledInput = <T extends FieldValues>(
    props: IControlledInputProps<T>,
) => {
    const { control, name, ...nativeProps } = props

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <Input
                    {...nativeProps}
                    onChange={(newValue) => {
                        onChange(newValue)
                    }}
                    value={value}
                />
            )}
        />
    )
}
