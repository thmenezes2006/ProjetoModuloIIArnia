import React, { useState } from 'react'

export function Toggle() {
  const [toggle, setToggle] = useState(true)
  return (
    <div>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle State
      </button>
    </div>
  )
}
