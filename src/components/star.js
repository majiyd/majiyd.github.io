import React from 'react';

export function Star(props){
  let width = `${Math.floor(Math.random() * (5 - 2)) + 2}px`
  return (
    <div className='star' style={{
      width: width,
      height: width,
      position: 'absolute',
      top: `${Math.floor(Math.random() * (100 - 0)) + 0}%`,
      left: `${Math.floor(Math.random() * (100 - 0)) + 0}%`,
      borderRadius: `50%`,
      animationDuration: `${Math.random() * (5 - 2) + 2}s`,
      animationDelay: `${Math.floor(Math.random() * (6 - 1)) + 1}s`,
    }}>

    </div>
  )
}