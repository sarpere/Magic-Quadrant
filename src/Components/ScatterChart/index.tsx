import { ReactElement, useRef } from 'react'
import Grid from './Grid';
import Item from './Item';
import ItemTypes from './Types/Item'
import './style.scss';
import Axis from './Axis';
interface Props extends ItemTypes.ItemActions {
  items: ItemTypes.Items;
  height: number;
  width: number;
}

function ScatterChart({ items, height, width, onPointDrag }: Props): ReactElement {
  const getX = (x: number) => x * width / 100
  const getY = (y: number) => height - (y * height / 100)
  const svgRef = useRef(null);
  const onPointUpdate: ItemTypes.onPointDrag = (coordinates, item) => {
    const xPos = parseFloat((coordinates.x / width  * 100).toFixed(2));
    const yPos = parseFloat(((height - coordinates.y) / height * 100).toFixed(2));
    onPointDrag({ x: xPos, y: yPos }, item)
  }
  return (
    <div className='scatter-container'>
      <svg ref={svgRef} className='scatter-chart' width={width} height={height}>
        <Grid height={height} width={width} />
        {items.map((item) =>
          <Item key={item.id} onPointDrag={onPointUpdate} 
          svgWidth={width}
          svgHeight={height}
          svgRef={svgRef} id={item.id} isActive={item.isActive} x={getX(item.x)} y={getY(item.y)} label={item.label} />
        )}
      </svg>
      <Axis />
    </div>
  )
}
ScatterChart.defaultProps = {
  height: 400,
  width: 400
}

export default ScatterChart
