import { ChangeEvent } from "react"

type PropsType = {
    name: string,
    id: string,
    option: string,
    value: string,
    checked: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({name, id, option, value, checked, onChange}: PropsType) => {
    return <div className="py-2 input-field-wrapper">
        <input 
            type='radio'
            name={name}
            id={id}
            value={value}
            checked={checked}
            onChange={onChange}
            className="input-field"
        />
        <label htmlFor={id} className='text-xl'>
            {option}
        </label>
    </div>
}

export default InputField