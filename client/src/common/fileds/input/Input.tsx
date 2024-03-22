// import { FC, useState } from 'react'

// export interface InputProps {
//   type: 'text' | 'password'
//   onChange?: () => void
//   name?: string
//   value?: string
//   label?: string
//   placeholder?: string
//   required?: boolean
//   minLength?: number
//   errorMessage: string
// }

// export const Input: FC<InputProps> = ({ type = 'text', placeholder, label, onChange, value }) => {
//   const [value, setValue] = useState('')
//   return (
//     <input
//       type={type}
//       className={style.input}
//       placeholder={placeholder}
//       value={value}
//       label={label}
//       onChange={e => setValue(e.target.value)}
//     />
//   )
// }

import { JSX } from 'react'

import style from './Input.module.scss'

export type InputProps = {
  errorMessage?: string
  error?: boolean
} & JSX.IntrinsicElements['input']

export const Input = (props: InputProps) => {
  const { placeholder, errorMessage, error = false, type, ...rest } = props

  return (
    <label className={style.input_container}>
      <input
        className={style.input}
        autoComplete='off'
        data-error={error}
        type={type || 'text'}
        placeholder={placeholder}
        {...rest}
      />
      {/* <p className='input_error' data-error={error}>
        {errorMessage}
      </p> */}
      {/* <p className='input_placeholder'>{placeholder}</p> */}
    </label>
  )
}
