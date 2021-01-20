import React, { useState } from 'react'

const RefHookTest = ({ inputRef }) => {
  useState(null)

  const handleTextInput = () => {
    if (inputRef) {
      inputRef.focus()
    }
  }

  return (
    <div>
      <div>RefHookTest</div>
      <input type="text" ref={inputRef} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleTextInput}
      />
    </div>
  )
}

export default RefHookTest
