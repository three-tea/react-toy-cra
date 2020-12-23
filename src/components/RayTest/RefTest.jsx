import React, { Component } from 'react'

class RefTest extends Component {
  constructor(props) {
    super(props)
    // console.log('constructor()');
    // this.textInputRef = createRef();
    this.textInput = null
    this.textInputRef = element => {
      // console.log('element:', element);
      this.textInput = element
    }
  }

  componentDidMount() {
    // console.log('componentDidMount()');
    // console.log('this.textInputRef:', this.textInputRef);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount()');
    // console.log('this.textInputRef:', this.textInputRef);
  }

  handleTextInput = () => {
    if (this.textInput) {
      this.textInput.focus()
    }
  }

  render() {
    // console.log('render()');
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
