import React, { useState } from "react"
import styled from "styled-components"

const Button = ({ title, handleOnClick }) => (
  <button onClick={handleOnClick}>{title}</button>
)

const ButtonStyles = styled.button`
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

const StyledButton = ({ title, handleOnClick }) => (
  <ButtonStyles onClick={handleOnClick}>{title}</ButtonStyles>
)

const SelfAwareButton = () => {
  const [clicked, setClicked] = useState(0)
  return (
    <StyledButton
      handleOnClick={() => setClicked(clicked + 1)}
      title={`Clicked ${clicked} times.`}
    />
  )
}

export { Button, StyledButton, SelfAwareButton }
