import { ReactElement } from 'react'
import Grid from './Grid';
import Item from './Item';
import ItemTypes from './Types/Item'
import './style.scss';
interface Props {
  items: ItemTypes.Items;
  height: number;
  width: number;
}

function ScatterChart({ items, height, width }: Props): ReactElement {
  return (
    <svg className='scatter-chart' width={width} height={height}>
      <Grid height={height} width={width} />
      {items.map((item) =>
        <Item key={item.id} id={item.id} x={item.x} y={height - item.y} label={item.label} />
      )}
    </svg>
  )
}
ScatterChart.defaultProps = {
  height: 400,
  width: 400
}

export default ScatterChart
