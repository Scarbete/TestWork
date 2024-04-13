import { ChangeEventHandler, FC, HTMLInputTypeAttribute, memo } from "react"
import classes from './CustomInput.module.sass'
import classNames from 'classnames'


type ICustomInput = {
    type?: HTMLInputTypeAttribute
    value?: string | ReadonlyArray<string> | number | undefined
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    name?: string
    placeholder?: string
    labelClass?: string
    inputClass?: string
    error?: boolean
    maxLength?: number
}


const CustomInput: FC<ICustomInput> = props => {
    const {
        type = 'text',
        value,
        onChange,
        name,
        placeholder,
        labelClass,
        inputClass,
        error,
        maxLength
    } = props

    return (
        <label
            className={classNames(
                classes.label, labelClass,
                {[ classes.error ]: error },
            )}
        >
            <input
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                placeholder={placeholder}
                className={classNames(classes.field, inputClass)}
                maxLength={maxLength}
            />
        </label>
    )
}

export default memo(CustomInput)