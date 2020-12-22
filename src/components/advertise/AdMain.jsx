import React, { useCallback } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import Card from './Card'

const TAB_KEYS = [
  {
    eventKey: 'first',
    title: '광고계정 현황',
  },
  {
    eventKey: 'second',
    title: '멤버 관리',
  },
  {
    eventKey: 'third',
    title: '영업권 관리',
  },
  {
    eventKey: 'forth',
    title: '세금계산서',
  },
]

const CARD_DATA = [
  [
    {
      type: 'basic',
      title: '사업자등록번호 (대행사)',
      titleData: '444-44-44444',
      subtitles: ['사업자', '대표자', '업태/종목'],
      subtitlesData: ['나이키', '대표자명', '신발 파는곳/쇼핑ㅇ'],
      buttonTitle: '',
    },
    {
      type: 'member',
      title: '멤버',
      titleData: '2명',
      subtitles: ['미르', '장*호'],
      subtitlesData: ['kakao@daum.net', 'al***@daum.net'],
      grade: '마스터',
      buttonTitle: '관리',
    },
    {
      type: 'basic',
      title: '캐시 잔액',
      titleData: '50,106,772원',
      subtitles: ['캐시', '환불계좌 정보'],
      subtitlesData: ['유상 50,106,772원 | 무상 0원', '미등록'],
      buttonTitle: '더보기',
    },
  ],
  [
    {
      type: 'basic',
      title: '광고주 정보',
      titleData: '나이키',
      subtitles: ['사업자등록번호', '대표자', '업태/종목'],
      subtitlesData: ['444-44-44444', '대표자명', '신발 파는곳/쇼핑ㅇ'],
      buttonTitle: '',
    },
    {
      type: 'biz',
      title: '영업권',
      titleData: '직접 운영',
      content: '영업권 요청거부 설정됨',
      buttonTitle: '더보기',
    },
    {
      type: 'basic',
      title: '카드 결제 예정액',
      titleData: '0원',
      subtitles: ['카드', '소유자', '일 지출한도'],
      subtitlesData: [
        '비씨 5388 20** **** ****',
        'kakao@daum.net (나)',
        '1,000원',
      ],
      buttonTitle: '더보기',
    },
  ],
]

const BasicCard = ({ subtitles, subtitlesData }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ color: 'gray' }}>
        {subtitles.map((title, index) => (
          <div key={`${title}-${index}`}>{title}</div>
        ))}
      </div>
      <div style={{ marginLeft: 20 }}>
        {subtitlesData.map((data, index) => (
          <div key={`${data}-${index}`}>{data}</div>
        ))}
      </div>
    </div>
  )
}

const MemberCard = ({ subtitles, subtitlesData }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {subtitles.map((title, index) => (
          <div key={`${title}-${index}`}>{title}</div>
        ))}
      </div>
      <div style={{ marginLeft: 20 }}>
        {subtitlesData.map((data, index) => (
          <div key={`${data}-${index}`}>{data}</div>
        ))}
      </div>
    </div>
  )
}

const BizCard = ({ content }) => {
  return <div style={{ display: 'flex' }}>{content}</div>
}

const AdMain = () => {
  const renderCardChildren = useCallback(row => {
    const { type, subtitles, subtitlesData, content } = row
    switch (type) {
      case 'basic':
        return <BasicCard subtitles={subtitles} subtitlesData={subtitlesData} />
      case 'member':
        return (
          <MemberCard subtitles={subtitles} subtitlesData={subtitlesData} />
        )
      case 'biz':
        return <BizCard content={content} />
      default:
        return null
    }
  }, [])

  const renderPane = useCallback(
    tab => {
      const { eventKey, title } = tab
      switch (eventKey) {
        case 'first':
          return (
            <Container
              fluid
              style={{
                padding: 0,
                border: '1px solid gray',
                marginTop: 30,
              }}>
              {CARD_DATA.map((rows, index) => {
                return (
                  <Row noGutters>
                    {rows.map((row, index) => {
                      const { title, titleData, buttonTitle } = row
                      return (
                        <Col
                          style={{
                            border: '0.5px solid lightgray',
                          }}>
                          <Card
                            title={title}
                            titleData={titleData}
                            buttonTitle={buttonTitle}>
                            {renderCardChildren(row)}
                          </Card>
                        </Col>
                      )
                    })}
                  </Row>
                )
              })}
            </Container>
          )
        case 'second':
          return <div>{title}</div>
        case 'third':
          return <div>{title}</div>
        case 'forth':
          return <div>{title}</div>
        default:
          return null
      }
    },
    [renderCardChildren]
  )

  return (
    <div style={{ padding: 30, backgroundColor: 'lightgray' }}>
      <header style={{ display: 'flex' }}>
        <h5>
          <b>광고계정 관리</b>
        </h5>
        <div
          style={{
            width: 2,
            backgroundColor: 'gray',
            marginLeft: 20,
            marginRight: 20,
          }}
        />
        <h5>
          <b>3번 광고계정</b>
          <span style={{ color: 'darkgray', marginLeft: 10 }}>27429</span>
        </h5>
      </header>
      <div key="header" style={{ display: 'flex' }}></div>
      <div key="tab" style={{ marginTop: 20 }}>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col>
              <Nav
                variant="pills"
                style={{ backgroundColor: 'white', borderRadius: 5 }}>
                {TAB_KEYS.map((tab, index) => {
                  const { eventKey, title } = tab
                  return (
                    <Nav.Item>
                      <Nav.Link
                        eventKey={eventKey}
                        style={{
                          paddingTop: 10,
                          paddingRight: 30,
                          paddingBottom: 10,
                          paddingLeft: 30,
                        }}>
                        <b>{title}</b>
                      </Nav.Link>
                    </Nav.Item>
                  )
                })}
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                {TAB_KEYS.map((tab, index) => {
                  const { eventKey } = tab
                  return (
                    <Tab.Pane eventKey={eventKey}>{renderPane(tab)}</Tab.Pane>
                  )
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  )
}

export default AdMain
