import React from 'react'

export function Header(props){
  let style = {
    margin: 50,
    lineHeight: 1.5,
    fontSize: '13pt',
    fontFamily: 'segoe ui',

  }
  return(
    <div style={style}>
      <p><strong>Suleiman Abdulmajeed</strong> </p>
      <p>Software Developer & Programmer</p>
    </div>
  )
}