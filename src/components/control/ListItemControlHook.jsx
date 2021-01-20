import React, { useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  removeContentsItem,
  setContentsItem,
  updateContentsItem,
} from '../../modules/mListItemControl'

const ListItemControlHook = () => {
  const [inputFile, setInputFile] = useState(null)
  const [url, setUrl] = useState(null)
  const dispatch = useDispatch()
  const { contentsList } = useSelector(
    state => state.get('listItemControl'),
    shallowEqual
  )

  const isEmpty = contentsList?.isEmpty()

  const onDeleteItem = index => () => {
    dispatch(removeContentsItem(index))
  }

  return (
    <>
      <input
        type="file"
        onChange={e => {
          const { files } = e.target
          if (files.length > 0) {
            const [{ name, size, type }] = files // file 객체에서 필요한 특정 정보만 뽑음
            const url = URL.createObjectURL(files[0])
            setUrl(url)
            const link = document.createElement('a')
            link.id = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
            link.href = url
            link.download = name
            link.click()
            dispatch(
              setContentsItem({
                type: type.split('/')[0],
                data: {
                  name,
                  size,
                  type,
                },
              })
            )
          }
          e.target.value = null
        }}
      />
      <input
        type="file"
        onChange={e => {
          const file = e.target.files[0]
          setInputFile(file)
        }}
      />
      <img src={url} />
      <ul>
        {isEmpty ? (
          <li>데이터가 없습니다.</li>
        ) : (
          contentsList?.map((v, i) => (
            <li
              key={i}
              onClick={() => {
                const { name, size, type } = inputFile
                dispatch(
                  updateContentsItem(i, {
                    type: type.split('/')[0],
                    data: { name, size, type },
                  })
                )
              }}>
              {v.getIn(['data', 'name'])}
              <button onClick={onDeleteItem(i)}>X</button>
            </li>
          ))
        )}
      </ul>
    </>
  )
}

export default ListItemControlHook
