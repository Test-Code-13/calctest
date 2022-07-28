import React from 'react'

function Header(props) {

  const data="hello";
  const styleHeader = {color:props.color}

  return (
    <div>
      <h1 style={styleHeader}>{props.color}</h1>
      <h2>{data}</h2>
    
    </div>
  )
}

export default Header