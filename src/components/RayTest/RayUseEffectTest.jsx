import React, { useState } from 'react'

const RayUseEffectTest = () => {
  const [value, setValue] = useState('')

  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <>
      <div>RayUseEffectTest</div>
      <input type="text" value={value} onChange={onChange} />
    </>
  )
}

export default RayUseEffectTest
