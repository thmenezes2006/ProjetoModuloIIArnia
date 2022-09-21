import { StyledButton } from './Button.styled'

type ButtonProps = {
  label: string
}

export function Button({ label }: ButtonProps) {
  return (
    <div>
      <StyledButton type="button">{label}</StyledButton>
    </div>
  )
}
