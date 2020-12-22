import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import React from 'react'
import ListItemControl from './ListItemControl'
import ListItemControl2 from './ListItemControl2'

const ListItemControlWrapper = () => {
  return (
    <div>
      <DropdownButton title="리스트아이템컨트롤메뉴">
        <Dropdown.Item href="/list-item-control1/list-item-control1">
          리스트아이템컨트롤메뉴1
        </Dropdown.Item>
        <Dropdown.Item href="/list-item-control1/list-item-control2">
          리스트아이템컨트롤메뉴2
        </Dropdown.Item>
      </DropdownButton>
      <Route
        path="/list-item-control1/list-item-control1"
        component={ListItemControl}
      />
      <Route
        path="/list-item-control1/list-item-control2"
        component={ListItemControl2}
      />
    </div>
  )
}

export default ListItemControlWrapper
