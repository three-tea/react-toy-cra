import React, { useMemo, useState } from "react";
import { responseData } from "../../utils/utils";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

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
  console.log('list:', list)

  const listStyle = useMemo(
    () => ({
      border: '1px solid',
      paddingTop: 5,
      background: 'rgba(255,100,100,0.5)',
    }),
    []
  )
  const listItemStyle = useMemo(
    () => ({
      listStyle: 'none',
      height: 50,
      lineHeight: '50px',
      marginRight: 35,
      border: '1px solid',
      marginBottom: 5,
      background: 'rgba(0,255,0,0.3)',
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

  // useEffect(() => {
  //   const callback = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         fetchData();
  //       }
  //     });
  //   };
  //
  //   const options = {
  //     threshold: 0.5,
  //   };
  //
  //   const observer = new IntersectionObserver(callback, options);
  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }
  //
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, [contents, list]);

  const intersectionCallback = (entry, observer) => {
    if (entry.isIntersecting) {
      fetchData()
    }
  }

  const intersectionOptions = {
    threshold: 0.5,
  }

  const [targetRef, setTargetRef] = useIntersectionObserver({
    callback: intersectionCallback,
    options: intersectionOptions,
  })
  console.log('setTargetRef:', setTargetRef)

  return (
    <ul style={listStyle}>
      {list.map((item, index) => {
        const { id, name } = item
        const key = `${id}_${index}`
        const isLast = index === list.size - 1
        return (
          <div key={key}>
            {isLoading && isLast ? (
              <li style={{ ...listItemStyle, background: 'skyblue' }}>
                로딩중입니다...
              </li>
            ) : (
              <li style={listItemStyle} ref={isLast ? setTargetRef : undefined}>
                {name}
              </li>
            )}
          </div>
        )
      })}
    </ul>
  )
}

export default InfinityScrollList
