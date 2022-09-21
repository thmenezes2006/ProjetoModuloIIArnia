import { InputStyled, LabelStyled } from './Input.styled'

type InputProps = {
  label: string
  type: string
  placeholder: string
}

export function Input({ label, type, placeholder }: InputProps) {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled type={type} placeholder={placeholder} />
    </div>
  )
}
