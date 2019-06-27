import React from 'react';

export function Star(props){
  return (
    <div className='star' style={{
      width: `${Math.floor(Math.random() * (4 - 2)) + 2}px`,
      height: `${Math.floor(Math.random() * (4 - 2)) + 2}px`,
      position: 'absolute',
      top: `${Math.floor(Math.random() * (100 - 0)) + 0}%`,
      left: `${Math.floor(Math.random() * (100 - 0)) + 0}%`,
      borderRadius: `50%`,
      animationDuration: `${Math.floor(Math.random() * (5 - 2)) + 2}s`,
      animationDelay: `${Math.floor(Math.random() * (10 - 1)) + 1}s`,
    }}>

    </div>
  )
}