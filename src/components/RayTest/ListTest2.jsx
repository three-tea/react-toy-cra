import React, { useCallback, useEffect } from 'react'
import { responseData } from '../../utils/utils'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { deleteItem, saveContents } from '../../modules/mList'

const ListTest2 = () => {
  const { contents } = responseData
  const dispatch = useDispatch()
  const { listItems } = useSelector(state => {
    return state.get('list')
  }, shallowEqual)
  // contents를 리덕스에 저장
  // x 눌렀을 때 해당 아이템을 삭제

  const onDeleteItem = useCallback(
    index => e => {
      dispatch(deleteItem(index))
    },
    [dispatch]
  )

  useEffect(() => {
    dispatch(saveContents(contents))
  }, [contents, dispatch])

  return (
    <>
      <ul>
        {listItems.map((item, index) => {
          const { id, name } = item
          return (
            <div key={id}>
              <li style={{ listStyle: 'none' }}>{name}</li>
              <button onClick={onDeleteItem(index)}>X</button>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default ListTest2
