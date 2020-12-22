import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Route } from "react-router-dom";
import DragList from "./DragList";
import DragList2 from "./DragList2";

const DragListWrapper = () => {
  return (
    <div>
      <DropdownButton title="드래그">
        <Dropdown.Item href="/drag/main">메인드래그</Dropdown.Item>
        <Dropdown.Item href="/drag/sub">서브드래그</Dropdown.Item>
      </DropdownButton>
      <Route path="/drag/main" component={DragList} />
      <Route path="/drag/sub" component={DragList2} />
    </div>
  )
}

export default DragListWrapper