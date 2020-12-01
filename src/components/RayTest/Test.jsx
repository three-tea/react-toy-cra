import React, { useState } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

const Test = () => {
  const [show, toggleShow] = useState(false)

  const onClick = () => {
    toggleShow(true)
  }

  const onClose = () => {
    toggleShow(false)
  }

  return (
    <Container className="p-3">
      <Button onClick={onClick}>Show Toast</Button>
      <Toast show={show} onClose={onClose}>
        <Toast.Header>Toast.Header</Toast.Header>
        <Toast.Body>Toast.Body</Toast.Body>
      </Toast>
    </Container>
  )
}

export default Test
