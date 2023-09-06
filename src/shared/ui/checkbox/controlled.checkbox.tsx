import {
    Controller,
    type FieldValues,
    type UseControllerProps,
} from 'react-hook-form'

import { Checkbox } from './checkbox.component'

interface IControlledCheckboxProps<T extends FieldValues>
    extends UseControllerProps<T> {
    label?: string
}

export const ControlledCheckbox = <T extends FieldValues>(
    props: IControlledCheckboxProps<T>,
) => {
    const { control, name, ...nativeProps } = props

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value } }) => (
                <Checkbox
                    {...nativeProps}
                    onChange={(newValue) => {
                        onChange(newValue)
                    }}
                    checked={value}
                />
            )}
        />
    )
}
