import React from 'react';

export function Star(props){
  return (
    <div style={{
      width: `${Math.floor(Math.random() * (4 - 2)) + 2}px`,
      height: `${Math.floor(Math.random() * (4 - 2)) + 2}px`,
      backgroundColor: 'white',
      position: 'absolute',
    }}>

    </div>
  )
}