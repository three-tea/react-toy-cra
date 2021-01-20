import React from 'react'
import { Route } from 'react-router-dom'
import AdMain from './AdMain'
import AdMain2 from './AdMain2'
import { Dropdown, DropdownButton } from 'react-bootstrap'

const AdMainWrapper = () => {
  return (
    <div>
      <DropdownButton title="메인광고">
        <Dropdown.Item href="/advertise/main">메인광고</Dropdown.Item>
        <Dropdown.Item href="/advertise/sub">서브광고</Dropdown.Item>
      </DropdownButton>
      <Route path="/advertise/main" component={AdMain} />
      <Route path="/advertise/sub" component={AdMain2} />
    </div>
  )
}

export default AdMainWrapper
