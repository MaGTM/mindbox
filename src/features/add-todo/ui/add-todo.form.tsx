import { type VoidFunction } from '@shared/lib/types'
import { Button, ButtonTheme } from '@shared/ui'
import { ControlledCheckbox } from '@shared/ui/checkbox/controlled.checkbox'
import { ControlledInput } from '@shared/ui/input/controlled.input'
import { useEffect } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { useAddTodo } from '../api/add-todo.api'

interface FormValues {
    title: string
    isUrgent: boolean
}

interface IAddTodoFormProps {
    onModalClose: VoidFunction
}

export const AddTodoForm = (props: IAddTodoFormProps) => {
    const { onModalClose } = props

    const { mutate, isSuccess, isLoading } = useAddTodo()

    const {
        handleSubmit,
        formState: { isDirty },
        control,
    } = useForm<FormValues>({
        defaultValues: {
            title: '',
            isUrgent: false,
        },
    })

    const submitHandler: SubmitHandler<FormValues> = (data) => {
        mutate(data)
    }

    useEffect(() => {
        if (isSuccess) {
            onModalClose()
        }
    }, [isSuccess])

    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex items-center gap-4">
                <ControlledInput
                    control={control}
                    name="title"
                    placeholder="Title"
                />
                <ControlledCheckbox
                    label="Urgent"
                    name="isUrgent"
                    control={control}
                />
            </div>
            <div className="mt-2 flex items-center gap-4">
                <Button text="Add" disabled={!isDirty || isLoading} />
                <Button
                    text="Cancel"
                    theme={ButtonTheme.Secondary}
                    onClick={onModalClose}
                    type="button"
                />
            </div>
        </form>
    )
}
