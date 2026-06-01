import React from 'react'

export const Title = ({text,color = 'secundary-purple'}) => {
  return (
    <h2 className={`text-${color} text-lg font-normal uppercase`}>{text}</h2>
  )
}
