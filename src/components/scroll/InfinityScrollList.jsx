import React, { useMemo, useState } from 'react'
import { responseData } from '../../utils/utils'
import useIntersectionObserver from '../../hook/useIntersectionObserver'
import { ListGroup } from 'react-bootstrap'

/**
 *  무한 스크롤 리스트
 *
 *  요구사항
 *  1. 무한 스크롤을 만들어주세요
 *  2. 맨 하단에 도달했을 때 추가해주세요
 *  3. 맨 하단에 도달했을 때 로딩을 보여주세요
 *  4. 마지막 아이템의 가시성이 50%일 때 추가해주세요
 */
const InfinityScrollList = () => {
  const { contents } = responseData

  const [list, setList] = useState(contents)
  const [isLoading, setLoading] = useState(false)

  // const targetRef = useRef(null);

  const listStyle = useMemo(
    () => ({
      border: '1px solid',
      paddingTop: 5,
    }),
    []
  )
  const listItemStyle = useMemo(
    () => ({
      listStyle: 'none',
      height: 50,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
    }),
    []
  )

  const fetchData = () => {
    setLoading(true)
    setTimeout(() => {
      setList(list.push(...contents))
      setLoading(false)
    }, 1000)
  }

  const intersectionCallback = (entry, observer) => {
    if (entry.isIntersecting) {
      fetchData()
    }
  }

  const intersectionOptions = {
    threshold: 0.5,
  }

  const [, setTargetRef] = useIntersectionObserver({
    callback: intersectionCallback,
    options: intersectionOptions,
  })

  return (
    <ListGroup as="ul" style={listStyle}>
      {list.map((item, index) => {
        const { id, name } = item
        const key = `${id}_${index}`
        const isLast = index === list.size - 1
        return (
          <div key={key}>
            {isLoading && isLast ? (
              <ListGroup.Item as="li" style={{ ...listItemStyle, background: 'skyblue' }}>
                로딩중입니다...
              </ListGroup.Item>
            ) : (
              <ListGroup.Item as="li" style={listItemStyle} ref={isLast ? setTargetRef : undefined}>
                {name}
              </ListGroup.Item>
            )}
          </div>
        )
      })}
    </ListGroup>
    // <ul style={listStyle}>
    //   {list.map((item, index) => {
    //     const { id, name } = item
    //     const key = `${id}_${index}`
    //     const isLast = index === list.size - 1
    //     return (
    //       <div key={key}>
    //         {isLoading && isLast ? (
    //           <li style={{ ...listItemStyle, background: 'skyblue' }}>
    //             로딩중입니다...
    //           </li>
    //         ) : (
    //           <li style={listItemStyle} ref={isLast ? setTargetRef : undefined}>
    //             {name}
    //           </li>
    //         )}
    //       </div>
    //     )
    //   })}
    // </ul>
  )
}

export default InfinityScrollList
