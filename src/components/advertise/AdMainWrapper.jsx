import React from 'react'
import { Route } from 'react-router-dom'
import AdMain from './AdMain'
import AdMain2 from './AdMain2'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const AdMainWrapper = () => {
  return (
    <div>
      <DropdownButton title="메인메뉴">
        <Dropdown.Item href="/advertise1/advertise1">메인1</Dropdown.Item>
        <Dropdown.Item href="/advertise1/advertise2">메인2</Dropdown.Item>
      </DropdownButton>
      <Route path="/advertise1/advertise1" component={AdMain} />
      <Route path="/advertise1/advertise2" component={AdMain2} />
    </div>
  )
}

export default AdMainWrapper
