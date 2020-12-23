import { useCallback, useState } from 'react'

/**
 * 드래그 리스트의 커스텀 훅
 */
const useDragList = ({ contents, listRef }) => {
  const [list, setList] = useState(contents)
  const [fromIndex, setFromIndex] = useState(-1)
  const [movingIndex, setMovingIndex] = useState(-1)

  const getListItemIndex = useCallback(
    target => {
      if (!target) return -1
      return Array.from(listRef.current.children).indexOf(target)
    },
    [listRef]
  )

  const handleDragStart = e => {
    const fromIndex = getListItemIndex(e.target)
    console.log('fromIndex:', fromIndex)
    setFromIndex(fromIndex)
  }

  const handleDragEnd = e => {
    e.preventDefault()
    setFromIndex(-1)
    setMovingIndex(-1)
    console.log('list:', list.toJS())
  }

  const handleDragEnter = e => {
    const movingIndex = getListItemIndex(e.target)
    setMovingIndex(movingIndex)
  }

  const handleDragOver = e => {
    e.preventDefault()
  }

  const handleDrop = e => {
    e.preventDefault()
    const toIndex = getListItemIndex(e.target)
    console.log('toIndex:', toIndex)
    setList(
      list.update(value =>
        value.remove(fromIndex).insert(toIndex, value.get(fromIndex))
      )
    )
    // setList(list.update((value) => value.delete(fromIndex).splice(toIndex, 0, value.get(fromIndex))));
    // setList(list.delete(fromIndex).splice(toIndex, 0, list.get(fromIndex)));
    // setList(list.delete(fromIndex).insert(toIndex, list.get(fromIndex)));
    // setList(list.remove(fromIndex).insert(toIndex, list.get(fromIndex)));
  }

  return {
    handleDragStart,
    handleDragEnd,
    handleDragEnter,
    handleDragOver,
    handleDrop,
    list,
    movingIndex,
  }
}

export default useDragList
