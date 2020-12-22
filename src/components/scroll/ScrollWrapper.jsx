import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import InfinityScrollList from './InfinityScrollList'
import InfinityScrollList2 from './InfinityScrollList2'

const ScrollWrapper = () => {
  return (
    <div>
      <DropdownButton title="스크롤메인">
        <Dropdown.Item href="/scroll1/scroll1">스크롤1</Dropdown.Item>
        <Dropdown.Item href="/scroll1/scroll2">스크롤2</Dropdown.Item>
      </DropdownButton>
      <Route path="/scroll1/scroll1" component={InfinityScrollList} />
      <Route path="/scroll1/scroll2" component={InfinityScrollList2} />
    </div>
  )
}

export default ScrollWrapper
