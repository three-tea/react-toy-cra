import React from 'react'
import { Card } from 'react-bootstrap'

const Payment = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 200, padding: 20 }}>
        <b>결제정보</b>
        <div
          style={{
            height: 1,
            backgroundColor: 'lightgray',
            marginTop: 10,
            marginBottom: 20,
          }}
        />
        <div style={{ fontSize: 12 }}>
          <b>카드 자동 결제 예정액</b>
        </div>
        <div style={{ fontSize: 20 }}>
          <b>0원</b>
        </div>
        <div style={{ fontSize: 12 }}>
          <div>
            일 지출한도<span>1,000원</span>
          </div>
          <div>
            사용 가능액<span style={{ color: 'blue' }}>1,000원</span>
          </div>
        </div>
      </div>
      <div style={{ padding: 20, borderLeft: '1px solid lightgray' }}>
        <span>
          <b>등록 카드 1</b>(?)
        </span>
        <div style={{ display: 'flex' }}>
          <Card
            style={{
              width: 250,
              height: 160,
              borderRadius: 10,
              backgroundColor: 'red',
            }}>
            <Card.Body>
              <b
                style={{
                  backgroundColor: 'brown',
                  color: 'yellow',
                  padding: 4,
                  fontSize: 10,
                  borderRadius: 20,
                }}>
                결제카드
              </b>
              <div style={{ color: 'white', marginTop: 14 }}>
                <b style={{ fontSize: 20 }}>BCcard</b>
                <div>5388 20** **** ****</div>
                <div style={{ fontSize: 12, marginTop: 10 }}>
                  <span>소유자</span>
                  <span style={{ marginLeft: 5 }}>kakao@daum.net</span>
                  <span style={{ marginLeft: 5 }}>(나)</span>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: 250,
              height: 160,
              marginLeft: 20,
              borderRadius: 10,
              backgroundColor: 'lightgray',
            }}>
            <Card.Body>
              <div
                style={{
                  fontSize: 50,
                  color: 'gray',
                  textAlign: 'center',
                }}>
                +
              </div>
              <div style={{ color: 'blue', textAlign: 'center' }}>
                카드 추가
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Payment
