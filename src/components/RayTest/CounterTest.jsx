import React, { useEffect, useReducer } from 'react'

function CounterTest() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
      // setCount((c) => c + step);
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [dispatch])

  return (
    <div>
      <h1>{count}</h1>
      <input
        value={step}
        onChange={e => {
          dispatch({
            type: 'step',
            step: Number(e.target.value),
          })
          // setStep(Number(e.target.value));
        }}
      />
    </div>
  )
}

const initialState = {
  count: 0,
  step: 1,
}

function reducer(state, action) {
  const { count, step } = state
  if (action.type === 'tick') {
    return {
      count: count + step,
      step,
    }
  } else if (action.type === 'step') {
    return {
      count,
      step: action.step,
    }
  } else {
    throw new Error()
  }
}

export default CounterTest
