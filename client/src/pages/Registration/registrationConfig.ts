import { InputProps } from 'common'

type Config = (InputProps & {
  validate?: (state: iFormData) => boolean
  name: keyof iFormData
})[]

export interface iFormData {
  name: string
  surname: string
  email: string
  password: string
  duplicate: string | undefined
}

export const formConfig: Config = [
  {
    name: 'name',
    placeholder: 'Name',
    required: true
  },
  {
    name: 'surname',
    placeholder: 'Surname',
    required: true
  },
  {
    name: 'email',
    placeholder: 'E-mail',
    pattern: '^\\S+A\\S+\\.\\S+$',
    errorMessage: 'Wrong email'
  },
  {
    name: 'password',
    placeholder: 'Password',
    required: true,
    type: 'password',
    minLength: 6,
    errorMessage: 'Password mismatch',
    validate: (state: iFormData) => !(state.password === state.duplicate)
  },
  {
    name: 'duplicate',
    placeholder: 'Confirm password',
    required: true,
    type: 'password'
  }
]

export const initialState: iFormData = {
  name: '',
  surname: '',
  email: '',
  password: '',
  duplicate: ''
}
