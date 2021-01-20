import React, { Component } from 'react'
import LifecycleTestChild from './LifecycleTestChild'

class LifecycleTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      color: 'red',
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextState.value !== '2'
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  render() {
    const { value, color } = this.state
    return (
      <div>
        <div>LifecycleTest</div>
        <input type="text" value={value} onChange={this.onChange} />
        <LifecycleTestChild color={color} />
      </div>
    )
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return 'blue'
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot) {
      this.setState({ color: snapshot })
    }
  }
}

export default LifecycleTest
