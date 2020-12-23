import React, { useEffect, useRef, useState } from 'react'

const RefHookTest = ({ inputRef }) => {
  useState(null)
  const textInputRef = useRef(null)

  useEffect(() => {
    // console.log('componentDidMount()');
    // console.log('this.textInputRef:', textInputRef);
    return () => {
      // console.log('componentWillUnmount()');
      // console.log('this.textInputRef:', textInputRef);
    }
  }, [])

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
