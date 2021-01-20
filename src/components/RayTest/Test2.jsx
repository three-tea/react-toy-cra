import React, { Component, forwardRef } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

class Test2 extends Component {
  constructor(props) {
    super(props)
    this.wrapper = React.createRef()
  }

  state = {
    show: false,
  }

  toggleShow = show => {
    this.setState({ show })
  }

  onClick = () => {
    this.toggleShow(true)
  }

  onClose = () => {
    this.toggleShow(false)
  }

  render() {
    const { show } = this.state
    const ToastComponent = forwardRef((props, ref) => (
      <Toast show={show} onClose={this.onClose}>
        <Toast.Header>Toast.Header</Toast.Header>
        <Toast.Body>Toast.Body</Toast.Body>
      </Toast>
    ))

    return (
      <Container ref={this.wrapper} className="p-3">
        <Button onClick={this.onClick}>Show Toast</Button>
        <ToastComponent />
      </Container>
    )
  }
}

export default Test2
