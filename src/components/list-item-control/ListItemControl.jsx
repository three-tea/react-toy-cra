import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removeContentsItem,
  setContentsItem,
  updateContentsItem,
} from '../../modules/mListItemControl'

class ListItemControl extends Component {
  state = {
    inputFile: null,
    url: null,
  }

  onDeleteItem = index => () => {
    const { removeContentsItem } = this.props
    removeContentsItem(index)
  }

  render() {
    const { inputFile } = this.state
    const { contentsList, setContentsItem, updateContentsItem } = this.props
    console.log('contentsList:', contentsList)
    const isEmpty = contentsList?.isEmpty()
    return (
      <>
        <input
          type="file"
          onChange={e => {
            const { files } = e.target
            if (files.length > 0) {
              console.log('files[0]:', files[0])
              const [{ name, size, type }] = files // file 객체에서 필요한 특정 정보만 뽑음
              setContentsItem({
                type: type.split('/')[0],
                data: {
                  name,
                  size,
                  type,
                },
              })
            }
            e.target.value = null
          }}
        />
        <input
          type="file"
          onChange={e => {
            const file = e.target.files[0]
            this.setState({ inputFile: file })
          }}
        />
        <ul>
          {isEmpty ? (
            <li>데이터가 없습니다.</li>
          ) : (
            contentsList?.map((v, i) => (
              <li
                key={i}
                onClick={() => {
                  // const { name, size, type } = inputFile
                  // updateContentsItem(i, {
                  //   type: type.split('/')[0],
                  //   data: { name, size, type },
                  // })
                }}>
                {v.getIn(['data', 'name'])}
                <button onClick={this.onDeleteItem(i)}>X</button>
              </li>
            ))
          )}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => {
  const { contentsList } = state.get('listItemControl')
  return {
    contentsList,
  }
}

const mapDispatchToProps = {
  setContentsItem,
  removeContentsItem,
  updateContentsItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemControl)
