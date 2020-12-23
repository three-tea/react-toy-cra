import React, { useState } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

const Test = props => {
  const [show, toggleShow] = useState(false)
  console.log('props:', props)

  const onClick = () => {
    toggleShow(true)
  }

  const onClose = () => {
    toggleShow(false)
  }

  const ToastComponent = () => (
    <Toast animation={true} show={show} onClose={onClose}>
      <Toast.Header>Toast.Header</Toast.Header>
      <Toast.Body>Toast.Body</Toast.Body>
    </Toast>
  )

  return (
    <Container className="p-3">
      <Button onClick={onClick}>Show Toast</Button>
      <ToastComponent />
      {/*<Toast ref={props.testRef} animation={true} show={show} onClose={onClose}>*/}
      {/*  <Toast.Header>Toast.Header</Toast.Header>*/}
      {/*  <Toast.Body>Toast.Body</Toast.Body>*/}
      {/*</Toast>*/}
    </Container>
  )
}

export default Test
