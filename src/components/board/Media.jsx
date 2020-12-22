import React, { useMemo } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { fromJS } from 'immutable'

const Item = ({ title, src }) => {
  return (
    <div style={{ width: 300 }}>
      <div
        style={{
          height: 300,
          backgroundColor: 'lightgray',
          border: '2px solid darkgray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img src={src} width="150" height="150" alt="미디어이미지" />
      </div>
      <div
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        {title}
      </div>
    </div>
  )
}

const Media = () => {
  const data = useMemo(
    () =>
      fromJS([
        {
          id: 1000,
          eventKey: 'compact',
          title: '콤팩트뷰',
          items: [
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '이미지',
            },
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '동영상',
            },
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '캐러셀',
            },
          ],
        },
        {
          id: 1001,
          eventKey: 'full',
          title: '풀뷰',
          items: [
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '이미지2',
            },
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '동영상2',
            },
            {
              src: 'https://newsimg.sedaily.com/2020/09/24/1Z7ZAQ1IWV_1.jpg',
              title: '캐러셀2',
            },
          ],
        },
      ]),
    []
  )

  return (
    <Tabs>
      {data.map((tab, index) => {
        const { id, eventKey, title, items } = tab
        return (
          <Tab key={`${id}-${index}`} eventKey={eventKey} title={title}>
            <div style={{ display: 'flex', padding: 30 }}>
              {items.map((item, index) => {
                const { title, src } = item
                return (
                  <div
                    key={`item-${id}-${index}`}
                    style={{ marginLeft: index !== 0 ? 15 : 0 }}>
                    <Item title={title} src={src} />
                  </div>
                )
              })}
            </div>
          </Tab>
        )
      })}
    </Tabs>
  )
}

export default Media
