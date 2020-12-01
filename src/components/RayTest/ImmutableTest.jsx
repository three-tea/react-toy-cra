import React from 'react'
import {
  fromJS,
  getIn,
  is,
  Map,
  Seq,
  Range,
  Repeat,
  List,
  Record,
} from 'immutable'
import assert from 'assert'

const ImmutableTest = () => {
  // const ABRecord = Record({ a: 1, b: 2 })
  // const myRecord = ABRecord({ b: 3 })
  // console.log(myRecord.toJS())
  // console.log(myRecord.size)
  // console.log(myRecord.get('a'))
  // console.log(myRecord.get('b'))
  // console.log(myRecord.get('c'))
  // const myRecordWithoutB = myRecord.remove('b')
  // console.log(myRecordWithoutB.get('b'))
  // console.log(myRecordWithoutB.b)

  // const list = Array(100000).fill(0).map((v, i) => i + 1)
  // console.log('list:', list)
  // console.time('timer')
  // Repeat(0, 100000).map(n => n + 1).reduce((prev, cur) => prev + cur)
  // Range(0, 100000).map(n => n + 1).reduce((prev, cur) => prev + cur)
  // Seq(list).map(n => n + 1).reduce((prev, cur) => prev + cur)
  // List(list).map(n => n + 1).reduce((prev, cur) => prev + cur)
  // list.map(n => n + 1).reduce((prev, cur) => prev + cur)
  // console.timeEnd('timer')

  // console.log(Repeat('foo', 4).toJS())

  // console.log(Range(10, 30, 5).toJS())

  // const oddSquares = Seq([[1, 2, 3, 4, 5, 6, 7, 8]])
  //   .filter(x => x % 2 !== 0)
  //   .map(x => x * x)
  // console.log('oddSquares.get(1):', oddSquares.get(1))
  // const map = Map({ a: 1, b: 2, c: 3 })
  // const lazySeq = Seq(map)
  // console.log(
  //   lazySeq
  //     .flip()
  //     .map(key => key.toUpperCase())
  //     .flip()
  //     .toJS()
  // )
  // const seq = Seq([1, 2, 3, 4, 5])
  //   .map(n => n + 1)
  //   .filter(n => n % 2 === 0)
  //   .take(2)
  //   .reduce((acc, cur) => acc + cur)
  // console.log('seq:', seq)

  // const map = fromJS({
  //   first: {
  //     firstString: 'first',
  //     second: {
  //       secondString: 'second',
  //     },
  //   },
  // })
  // const map2 = fromJS({
  //   first: {
  //     firstString: 'first',
  //     second: {
  //       secondString: 'second',
  //     },
  //   },
  // })

  // const map1 = Map()
  // const map2 = map1.withMutations(map => {
  //   console.log('map:', map.toJS())
  //   map.set('a', 1).set('b', 2).set('c', 3)
  //   console.log('map:', map.toJS())
  // })
  // console.log('map1.size:', map1.size)
  // console.log('map2.size:', map2.size)

  // console.log(object === object2)
  // console.log(Object.is(object, object2))
  // console.log(is(object, object2))
  // console.log(object.equals(object2))

  // console.log(object.mergeDeep(object2).toJS())
  // const result = object.mergeDeepWith((oldVal, newVal) => {
  //   console.log('oldVal:', oldVal)
  //   console.log('newVal:', newVal)
  // }, object2)
  // console.log('result:', result.toJS())

  // const first = object.get('first')
  // console.log('first:', first.toJS())
  // const second = object.getIn(['first', 'second'])
  // const second = getIn(object, ['first', 'seconds'], null)
  // console.log('second:', second)
  // const first2 = object.set('firstString', 'first2')
  // console.log('first2', first2.toJS())
  // const second2 = object.set('second', 'second2')
  // console.log('second2', second2.toJS())
  // const secondString = object.setIn(['first', 'second', 'secondString'], 'second2')
  // console.log('secondString:', secondString.toJS())
  // const first = object.update('first', first => {
  //   return first.update('second', second => {
  //     return second.update('third', third => {
  //       return third.set('thirdString', 'third2')
  //     })
  //   })
  // })
  // console.log('first:', first.toJS())

  return <div>Test</div>
}

export default ImmutableTest
