import { InputStyled, LabelStyled } from './Input.styled'

type InputProps = {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  borderColor: string
}
export function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  borderColor,
}: InputProps) {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
        onChange={onChange}
        value={value}
        color={borderColor}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  )
}
