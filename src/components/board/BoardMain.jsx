import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { fromJS } from 'immutable'
import styled from 'styled-components'
import Pagination from 'react-bootstrap/Pagination'
import { Table } from 'react-bootstrap'

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
  const data = useMemo(() => {
    return fromJS(
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
  }, [])

  const [items, setItems] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pages, setPages] = useState([])

  const onFirst = useCallback(() => setCurrentPage(0), [])

  const onPrev = useCallback(
    () =>
      setCurrentPage(prevState => (prevState > 0 ? prevState - 1 : prevState)),
    []
  )

  const onPage = useCallback(index => () => setCurrentPage(index), [])

  const onNext = useCallback(
    () =>
      setCurrentPage(prevState => {
        return prevState < pages.size - 1 ? prevState + 1 : prevState
      }),
    [pages]
  )

  const onLast = useCallback(() => setCurrentPage(pages.size - 1), [pages])

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
  }, [data, currentPage])

  return (
    <Root>
      <Table style={{ borderBottom: '1px solid lightgray' }}>
        <thead>
          <tr>
            <td>
              <b>변경이력</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const { id, content, date } = item
            return (
              <tr key={`${id}-${index}`}>
                <td style={{}}>{content}</td>
                <td style={{ width: 200, borderLeft: '1px solid lightgray' }}>
                  {date}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
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
