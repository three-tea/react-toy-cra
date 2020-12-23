import React, { Component } from 'react'

class LifecycleTestChild extends Component {
  state = {
    color: 'black',
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps() - props:', props)
    console.log('getDerivedStateFromProps() - state:', state)
    if (props.color !== state.color) {
      return {
        color: props.color,
      }
    }
    return null
  }

  render() {
    const { color } = this.state
    return (
      <>
        <h1>LifecycleTestChild</h1>
        <p>{color}</p>
      </>
    )
  }
}

export default LifecycleTestChild
