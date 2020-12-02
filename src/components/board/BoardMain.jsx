import React, { useEffect, useState } from 'react'
import { fromJS } from 'immutable'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Pagination from 'react-bootstrap/Pagination'
import Table from 'react-bootstrap/Table'

const Root = styled.div`
  margin: 20px;
  padding: 0.1px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Border = styled.div`
  padding: 10px;
  border-bottom: 1px solid lightgray;
  border-left: 1px solid lightgray;
`

const BoardMain = () => {
  const data = fromJS(
    Array(45)
      .fill(0)
      .map((num, index) => {
        const padNum = `${index}`.padStart(2, '0')
        return {
          id: Number(`10${padNum}`),
          content: `content${padNum}`,
          date: `2020-12-02 10:${padNum}`,
        }
      })
  )
  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState([])

  const onFirst = () => {
    setCurrentPage(0)
  }

  const onPrev = () => {
    setCurrentPage(prevState => (prevState > 0 ? prevState - 1 : prevState))
  }

  const onPage = index => () => {
    setCurrentPage(index)
  }

  const onNext = () => {
    setCurrentPage(prevState => {
      return prevState < pages.size - 1 ? prevState + 1 : prevState
    })
  }

  const onLast = () => {
    setCurrentPage(pages.size - 1)
  }

  useEffect(() => {
    const convertData = data.filter(
      (data, index) =>
        index >= 10 * currentPage && index < 10 * (currentPage + 1)
    )
    setItems(convertData)
    const pageIndexes = data
      .filter((item, index) => index % 10 === 0)
      .map((item, index) => index)
    setPages(pageIndexes)
  }, [currentPage])

  return (
    <Root>
      <Border>
        <b>변경이력</b>
      </Border>
      <Container fluid style={{ height: 450 }}>
        {items.map((item, index) => {
          const { id, content, date } = item
          return (
            <Row key={`${id}-${index}`}>
              <Col xs as={Border}>
                {content}
              </Col>
              <Col xs={3} as={Border}>
                {date}
              </Col>
            </Row>
          )
        })}
      </Container>
      {/*<Table>*/}
      {/*  <thead>*/}
      {/*    <tr>*/}
      {/*      <td>*/}
      {/*        <b>변경이력</b>*/}
      {/*      </td>*/}
      {/*    </tr>*/}
      {/*  </thead>*/}
      {/*  <tbody>*/}
      {/*    {items.map((item, index) => {*/}
      {/*      const { id, content, date } = item*/}
      {/*      return (*/}
      {/*        <tr key={`${id}-${index}`}>*/}
      {/*          <td*/}
      {/*            style={{*/}
      {/*              backgroundColor: 'skyblue',*/}
      {/*            }}>*/}
      {/*            {content}*/}
      {/*          </td>*/}
      {/*          <td style={{ backgroundColor: 'pink' }}>{date}</td>*/}
      {/*        </tr>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </tbody>*/}
      {/*</Table>*/}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Pagination style={{ margin: 0 }}>
          <Pagination.First onClick={onFirst} />
          <Pagination.Prev onClick={onPrev} />
          {pages.map(page => {
            return (
              <Pagination.Item
                key={`Pagination-${page}`}
                onClick={onPage(page)}
                active={page === currentPage}>
                {page + 1}
              </Pagination.Item>
            )
          })}
          <Pagination.Next onClick={onNext} />
          <Pagination.Last onClick={onLast} />
        </Pagination>
      </div>
    </Root>
  )
}

export default BoardMain
