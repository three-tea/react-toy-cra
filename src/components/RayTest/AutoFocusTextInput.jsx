import React, { Component, createRef } from 'react'
import RefHookTest from './RefHookTest'

class AutoFocusTextInput extends Component {
  constructor(props) {
    super(props)
    createRef()
    this.refTestRef = null
    this.setInputRef = element => {
      this.refTestRef = element
    }
  }

  componentDidMount() {
    if (this.refTestRef) {
      this.refTestRef.focus()
    }
  }

  render() {
    return (
      <div>
        {/*<RefTest ref={this.refTestRef} />*/}
        <RefHookTest inputRef={this.setInputRef} />
      </div>
    )
  }
}

export default AutoFocusTextInput
