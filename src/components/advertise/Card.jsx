import React from 'react'

const Card = ({ children, title, titleData, buttonTitle, onButton }) => {
  return (
    <div style={{ height: '100%', padding: 30, backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <b>{title}</b>
        {buttonTitle ? (
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              border: 0,
              color: 'gray',
              textDecoration: 'underline',
            }}>
            {buttonTitle}
          </button>
        ) : null}
      </div>
      <div style={{ fontSize: 40 }}>
        <b>{titleData}</b>
      </div>
      <div style={{ marginTop: 20 }}>
        {children}
      </div>
    </div>
  )
}

export default Card
