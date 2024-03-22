import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { formConfig, initialState } from './formConfig'

import { Input } from 'common'
import { Layout } from '..'

import style from './Form.module.scss'

interface FormProps {
  title: string
  children?: JSX.Element
}

export const Form: FC<FormProps> = ({ title, children }) => {
  const [formState, setFormState] = useState(initialState)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <Layout>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.header}>
          <h2>{title}</h2>
        </div>
        <div className={style.content}>
          {children}
          {formConfig.map((item, index) => (
            <Input key={index} {...item} value={formState[item.name]} onChange={onChange} />
          ))}
        </div>
        <div className={style.button_container}>
          <button className={style.button}>Registration</button>
          <div className={style.formTEST}></div>
        </div>
      </form>
    </Layout>
  )
}
