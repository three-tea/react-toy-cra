import React, { useState } from 'react'
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
    <>
      <Button onClick={onClick}>Show Toast</Button>
      <Toast show={show} onClose={onClose}>
        <Toast.Header>Toast.Header</Toast.Header>
        <Toast.Body>Toast.Body</Toast.Body>
      </Toast>
    </>
  )
}

export default Test
