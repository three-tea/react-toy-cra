import React, { useEffect, useState } from 'react'

const getData = url => {}

const Text = () => {
  const [value, setValue] = useState('')
  const [list] = useState([])

  const fetchData = async query => {
    const url = 'www.google.com=' + query
    new Promise((resolve, reject) => {
      try {
        const data = getData(url)
        if (data) {
          resolve(data)
        }
      } catch (e) {
        reject(e)
        console.log('getData error:', e)
      }
    })
  }

  const onChange = e => {
    setValue(e.target.value)
  }

  useEffect(() => {
    fetchData(value)
  }, [value])

  return (
    <>
      <input type="text" value={value} onChange={onChange} />
      <ul>
        {list?.map(item => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Text
