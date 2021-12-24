import React, { ReactElement } from 'react'

interface Props {
  x: number;
  y: number;
  svgHeight: number;
  svgWidth: number;
}

function Tracker({ x, y, svgHeight, svgWidth }: Props): ReactElement {
  return (
    <>
      <path stroke-dasharray="5,5" d={`M ${x} ${y} h -${svgWidth} `} stroke="red"
        stroke-width="3" fill="none" />
      <path stroke-dasharray="5,5" d={`M ${x} ${y} v ${svgHeight}`} stroke="red"
        stroke-width="3" fill="none" />
    </>
  )
}

export default Tracker
