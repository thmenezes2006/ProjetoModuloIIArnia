import React, { useState } from 'react'
import { ButtonToggle } from './Toggle.styled'

export function Toggle() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <ButtonToggle type="button" onClick={() => setToggle(!toggle)}>
        Click me
      </ButtonToggle>
    </div>
  )
}
