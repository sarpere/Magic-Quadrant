import { ReactElement } from 'react'
import ItemTypes from '../Types/Item'
import './style.scss';
function Item({ x, y, label, id }: ItemTypes.Item): ReactElement {
  const textX = x + 10, textY = y + 10;
  return (
    <g>
      <circle className='scatter-chart__point' cx={x} cy={y} r={6}>
      </circle>
      <text x={textX} y={textY}>{label}</text>
    </g>
  )
}

export default Item;
