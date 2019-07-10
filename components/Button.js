import React, { useState } from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background: #ffd600;
  font-size: 28px;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  outline: none;
  :hover {
    box-shadow: 0 2px 8px #21212133;
    cursor: pointer;
  }
  :active {
    box-shadow: 0 1px 3px #21212133;
  }
`

const SelfAwareButton = () => {
  const [clicked, setClicked] = useState(0)
  return (
    <StyledButton onClick={() => setClicked(clicked + 1)}>
      {"Clicked " + clicked + " times."}
    </StyledButton>
  )
}

export { StyledButton, SelfAwareButton }
