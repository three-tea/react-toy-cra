import React from 'react'
import { Route } from 'react-router-dom'
import BoardMain from './BoardMain'
import BoardMain2 from './BoardMain2'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const BoardWrapper = () => {
  return (
    <div>
      <DropdownButton title="보드">
        <Dropdown.Item href="/board/main">메인보드</Dropdown.Item>
        <Dropdown.Item href="/board/sub">서브보드</Dropdown.Item>
      </DropdownButton>
      <Route path="/board/main" component={BoardMain} />
      <Route path="/board/sub" component={BoardMain2} />
    </div>
  )
}

export default BoardWrapper
