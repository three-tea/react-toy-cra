import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Route } from "react-router-dom";
import DragList from "./DragList";
import DragList2 from "./DragList2";

const DragListWrapper = () => {
  return (
    <div>
      <DropdownButton title="드래그메뉴">
        <Dropdown.Item href="/drag1/drag1">드래그1</Dropdown.Item>
        <Dropdown.Item href="/drag1/drag2">드래그2</Dropdown.Item>
      </DropdownButton>
      <Route path="/drag1/drag1" component={DragList} />
      <Route path="/drag1/drag2" component={DragList2} />
    </div>
  )
}

export default DragListWrapper