import React, { Component } from 'react'

class RefTest extends Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.textInputRef = element => {
      this.textInput = element
    }
  }

  handleTextInput = () => {
    if (this.textInput) {
      this.textInput.focus()
    }
  }

  render() {
    return (
      <div>
        <div>RefTest</div>
        <input type="text" ref={this.textInputRef} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleTextInput}
        />
      </div>
    )
  }
}

export default RefTest
