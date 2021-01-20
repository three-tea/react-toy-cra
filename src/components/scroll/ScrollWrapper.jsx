import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import InfinityScrollList from './InfinityScrollList'
import InfinityScrollList2 from './InfinityScrollList2'

const ScrollWrapper = () => {
  return (
    <div>
      <DropdownButton title="스크롤">
        <Dropdown.Item href="/scroll/main">메인스크롤</Dropdown.Item>
        <Dropdown.Item href="/scroll/sub">서브스크롤</Dropdown.Item>
      </DropdownButton>
      <Route path="/scroll/main" component={InfinityScrollList} />
      <Route path="/scroll/sub" component={InfinityScrollList2} />
    </div>
  )
}

export default ScrollWrapper
