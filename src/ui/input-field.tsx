import { ChangeEvent } from "react"

type InputFieldProps = {
    name: string,
    id: string,
    option: string,
    value: string,
    checked: boolean,
    className?: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({name, id, option, value, checked, className, onChange}: InputFieldProps) => {
    console.log(checked)
    return <div className={`py-2 input-field-wrapper ${className}`}>
        <input 
            type='radio'
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
            className="input-field"
        />
        <label htmlFor={id} className='text-base'>
            {option}
        </label>
    </div>
}

export default InputField