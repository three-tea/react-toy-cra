import React, { useEffect } from 'react'
import { getList } from '../../modules/mList'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const RayTest = () => {
  const dispatch = useDispatch()
  const { listItems } = useSelector(state => {
    return state.get('list')
  }, shallowEqual)

  const fetchData = () => {
    try {
      dispatch(getList())
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div>RayTest</div>
      <ol>
        {listItems?.map(item => {
          const { objectID, title } = item
          return <li key={objectID}>{title}</li>
        })}
      </ol>
    </>
  )
}

export default RayTest
