import React, { useCallback, useMemo, useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import { keyMirror } from '../../utils/utils'
import { fromJS, Map, Range } from 'immutable'

const MAX_BRAND_COUNT = 15
const MAX_TITLE_COUNT = 45

const ButtonEnum = keyMirror({
  TALK_PURCHASE: null,
  TALK_GIFT: null,
  ONECLICK_PAYMENT: null,
  GET_EMOTICON: null,
  PLUSFRIEND_ADD: null,
  TALK_IN_SURVEY: null,
  TALK_TEST_DRIVE: null,
})

const BUTTON_OPTION_NAME = Map({
  [ButtonEnum.TALK_PURCHASE]: '구매하기',
  [ButtonEnum.TALK_GIFT]: '선물하기',
  [ButtonEnum.ONECLICK_PAYMENT]: '원클릭 결제하기',
  [ButtonEnum.GET_EMOTICON]: '이모티콘 받기',
  [ButtonEnum.PLUSFRIEND_ADD]: '채널 추가하기',
  [ButtonEnum.TALK_IN_SURVEY]: '톡에서 설문하기',
  [ButtonEnum.TALK_TEST_DRIVE]: '톡에서 시승신청',
})

const InputSet = () => {
  const [brand, setBrand] = useState('')
  const [title, setTitle] = useState('')
  const [button1, setButton1] = useState(Map())
  const [button2, setButton2] = useState(Map())

  const onChangeBrand = useCallback(e => {
    const value = e.target.value
    const length = value.length
    if (length >= 0 && length <= MAX_BRAND_COUNT) {
      setBrand(value)
    }
  }, [])

  const onChangeTitle = useCallback(e => {
    const value = e.target.value
    const length = value.length
    if (length >= 0 && length <= MAX_TITLE_COUNT) {
      setTitle(value)
    }
  }, [])

  const getButtonOptionItem1 = useMemo(
    () =>
      fromJS(
        BUTTON_OPTION_NAME.keySeq()
          .filterNot(v => v === button2.get('id'))
          .reduce(
            (previousValue, currentValue) =>
              previousValue.concat({
                id: currentValue,
                label: BUTTON_OPTION_NAME.get(currentValue),
              }),
            [{ id: 'DEFAULT_VALUE', label: '버튼1 이름 선택' }]
          )
      ),
    [button2]
  )

  const getButtonOptionItem2 = useMemo(
    () =>
      fromJS(
        BUTTON_OPTION_NAME.keySeq()
          .filterNot(v => v === button1.get('id'))
          .reduce(
            (previousValue, currentValue) =>
              previousValue.concat({
                id: currentValue,
                label: BUTTON_OPTION_NAME.get(currentValue),
              }),
            [{ id: 'DEFAULT_VALUE', label: '버튼2 이름 선택' }]
          )
      ),
    [button1]
  )

  const handleChangeValue = useCallback(
    key => e => {
      const isPrimaryButton = key === 'button1'
      const updater = isPrimaryButton ? setButton1 : setButton2
      const items = isPrimaryButton
        ? getButtonOptionItem1
        : getButtonOptionItem2
      updater(items.find(v => v.get('label') === e.target.value))
    },
    [getButtonOptionItem1, getButtonOptionItem2]
  )

  return (
    <>
      <b style={{ fontSize: 20 }}>애드뷰 구성</b>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            브랜드 이름
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="브랜드 이름을 입력하세요."
              onChange={onChangeBrand}
              value={brand}
            />
            <div>{MAX_BRAND_COUNT - brand.length}</div>
          </Col>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.File>
          <Form.File.Input />
        </Form.File>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label column sm={2}>
            타이틀
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="타이틀을 입력하세요."
              onChange={onChangeTitle}
              value={title}
            />
            <div>{MAX_TITLE_COUNT - title.length}</div>
          </Col>
        </Form.Row>
      </Form.Group>
      {Range(0, 2).map((num, index) => {
        const buttonIndex = index + 1
        return (
          <Form.Group key={`select-${buttonIndex}`}>
            <Form.Row>
              <Form.Label column sm={2}>
                버튼{buttonIndex}
              </Form.Label>
              <Col>
                <Form.Control
                  as="select"
                  defaultValue={`버튼${buttonIndex} 이름 선택`}
                  onChange={handleChangeValue(`button${buttonIndex}`)}>
                  {(buttonIndex === 1
                    ? getButtonOptionItem1
                    : getButtonOptionItem2
                  ).map(item => {
                    const { id, label } = item
                    return <option key={`${id}-${index}`}>{label}</option>
                  })}
                </Form.Control>
              </Col>
            </Form.Row>
          </Form.Group>
        )
      })}
    </>
  )
}

export default InputSet
