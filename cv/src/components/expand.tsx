import React, { useState } from 'react'

interface Props {
    children : string
    maxChars?: number;
}

const Expand = ({children, maxChars = 100} : Props) => {
    const[isExpanded, setExpanded] = useState(false)
    if(children.length <= maxChars)
  return (
    <div>{children}</div>
  )
  const text = isExpanded ? children : children.substring(0, maxChars)
  return<p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'less' : 'more' }</button></p>
}

export default Expand