import { H1, H5 } from './Title.styled'

type TitleProps = {
  title: string
  subtitle?: string
}

export function Title({ title, subtitle }: TitleProps) {
  return (
    <div>
      <H5>{subtitle}</H5>
      <H1>{title}</H1>
    </div>
  )
}
