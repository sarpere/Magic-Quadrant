import { ReactElement } from 'react'
import './style.scss';
interface Props {
  width: number;
  height: number;
}

function Grid({ width, height }: Props): ReactElement {
  const top = height / 2;
  const left = width / 2;
  return (
    <>
      <line className='scatter-grid' x1="0" x2={width} y1={top} y2={top} />
      <line className='scatter-grid' x1={left} x2={left} y1="0" y2={height} />
    </>
  )
}


export default Grid
