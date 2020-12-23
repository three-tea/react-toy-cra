import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import React from 'react'
import ListItemControl from './ListItemControl'
import ListItemControl2 from './ListItemControl2'

const ListItemControlWrapper = () => {
  return (
    <div>
      <DropdownButton title="컨트롤">
        <Dropdown.Item href="/control/main">메인컨트롤</Dropdown.Item>
        <Dropdown.Item href="/control/sub">서브컨트롤</Dropdown.Item>
      </DropdownButton>
      <Route path="/control/main" component={ListItemControl} />
      <Route path="/control/sub" component={ListItemControl2} />
    </div>
  )
}

export default ListItemControlWrapper
