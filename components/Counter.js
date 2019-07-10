import React, { Component } from "react"
import { Button, StyledButton } from "./Button"

function UselessCounter() {
  return (
    <div>
      <div>0</div>
      <button>-</button>
      <button>+</button>
    </div>
  )
}

function StatefulCounter() {
  const [count] = React.useState(0)
  return (
    <div>
      <div>{count}</div>
      <button>-</button>
      <button>+</button>
    </div>
  )
}

function Counter() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

function DumbCounter() {
  let count = 0
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => (count = count - 1)}>-</button>
      <button onClick={() => (count = count - 1)}>+</button>
    </div>
  )
}

function PropsCounter({ step = 1 }) {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count - step)}>-</button>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  )
}

function RainbowCounter({ step = 1 }) {
  const [count, setCount] = React.useState(0)
  const background = randomColor()
  return (
    <div style={{ backgroundColor: background }}>
      <div>{count}</div>
      <button onClick={() => setCount(count - step)}>-</button>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  )
}

function CounterWithButtons() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

function CounterWithPrettyButtons() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <div>{count}</div>
      <StyledButton onClick={() => setCount(count - 1)}>-</StyledButton>
      <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
    </div>
  )
}

const randomColor = () => {
  const red = Math.random() * 255
  const green = Math.random() * 255
  const blue = Math.random() * 255
  return `rgb(${red}, ${green}, ${blue})`
}

function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      return state + (action.step || 1)
    }
    case "DECREMENT": {
      return state - 1
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function ReduxCounter() {
  const [state, dispatch] = React.useReducer(countReducer, 0)
  return (
    <div>
      <div>{state}</div>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "INCREMENT", step: 10 })}>
        ++
      </button>
    </div>
  )
}

function useCounter() {
  const [state, dispatch] = React.useReducer(countReducer, 0)
  const decrement = () => dispatch({ type: "DECREMENT" })
  const increment = () => dispatch({ type: "INCREMENT" })
  const incrementMore = () => dispatch({ type: "INCREMENT", step: 10 })
  return { state, decrement, increment, incrementMore }
}

function CleanerCounter() {
  const { state, decrement, increment, incrementMore } = useCounter()
  return (
    <div>
      <div>{state}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={incrementMore}>++</button>
    </div>
  )
}

export {
  CleanerCounter,
  ReduxCounter,
  RainbowCounter,
  UselessCounter,
  StatefulCounter,
  Counter,
  PropsCounter,
  CounterWithButtons,
  CounterWithPrettyButtons,
  DumbCounter
}
