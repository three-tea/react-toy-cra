import React from 'react'
import { Route } from 'react-router-dom'
import BoardMain from './BoardMain'
import BoardMain2 from "./BoardMain2";
import { Dropdown, DropdownButton } from "react-bootstrap";

const BoardWrapper = () => {
  return (
    <div>
      <DropdownButton title="보드메인">
        <Dropdown.Item href="/board1/board1">보드메인1</Dropdown.Item>
        <Dropdown.Item href="/board1/board2">보드메인2</Dropdown.Item>
      </DropdownButton>
      <Route path="/board1/board1" component={BoardMain} />
      <Route path="/board1/board2" component={BoardMain2} />
    </div>
  )
}

export default BoardWrapper
