import React, { Component } from "react"
import { Button, StyledButton } from "./Button"

class UselessCounter extends Component {
  render() {
    return (
      <div>
        <div>0</div>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}

class StatefulCounter extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <div>{count}</div>
        <button>-</button>
        <button>+</button>
      </div>
    )
  }
}

class Counter extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
      </div>
    )
  }
}

class PropsCounter extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    const { step } = this.props
    return (
      <div>
        <div>{count}</div>
        <button onClick={() => this.setState({ count: count - step })}>
          -
        </button>
        <button onClick={() => this.setState({ count: count + step })}>
          +
        </button>
      </div>
    )
  }
}

class RainbowCounter extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    const { step } = this.props
    const background = randomColor()
    return (
      <div style={{ backgroundColor: background }}>
        <div>{count}</div>
        <button onClick={() => this.setState({ count: count - step })}>
          -
        </button>
        <button onClick={() => this.setState({ count: count + step })}>
          +
        </button>
      </div>
    )
  }
}

class CounterWithButtons extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <div>{count}</div>
        <Button
          title="-"
          handleOnClick={() => this.setState({ count: count - 1 })}
        />
        <Button
          title="+"
          handleOnClick={() => this.setState({ count: count + 1 })}
        />
      </div>
    )
  }
}

class CounterWithPrettyButtons extends Component {
  state = {
    count: 0
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <div>{count}</div>
        <StyledButton
          title="-"
          handleOnClick={() => this.setState({ count: count - 1 })}
        />
        <StyledButton
          title="+"
          handleOnClick={() => this.setState({ count: count + 1 })}
        />
      </div>
    )
  }
}

const randomColor = () => {
  const red = Math.random() * 255
  const green = Math.random() * 255
  const blue = Math.random() * 255
  return `rgb(${red}, ${green}, ${blue})`
}

export {
  RainbowCounter,
  UselessCounter,
  StatefulCounter,
  Counter,
  PropsCounter,
  CounterWithButtons,
  CounterWithPrettyButtons
}
