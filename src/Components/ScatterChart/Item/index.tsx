import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { getMouseCoordinates } from '../../../Utils/Mouse';
import ItemTypes from '../Types/Item'
import './style.scss';
function Item({ x, y, label, id, isActive, svgRef, onPointDrag }: ItemTypes.ItemProps): ReactElement {

  const [move, setmove] = useState(false)
  const circleRef = useRef<SVGCircleElement>(null);
  const textX = x + 10, textY = y + 10;
  const mouseDown = useCallback(() => {
    setmove(true)
  }, [])
  const mouseUp = useCallback(() => {
    setmove(false)
  }, [])
  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (!move) { return false; }
      const coordinates = getMouseCoordinates(e, svgRef?.current);
      onPointDrag(coordinates, { x, y, label, id })
    },
    [move, x, y, label, id, onPointDrag, svgRef]
  )
  useEffect(() => {
    circleRef.current?.addEventListener('mousedown', mouseDown, true);
    window.addEventListener('mouseup', mouseUp, true);
    return () => {
      circleRef.current?.removeEventListener('mousedown', mouseDown, true);
      window.removeEventListener('mouseup', mouseUp, true);
    };
  }, [mouseDown, mouseUp])
  useEffect(() => {
    svgRef.current?.addEventListener('mousemove', mouseMove, true);
    return () => {
      svgRef.current?.removeEventListener('mousemove', mouseMove, true);
    };
  }, [move, mouseMove, svgRef])
  return (
    <g>
      <circle ref={circleRef}
        className={`${move ? "dragging" : ""} ${isActive ? "active" : ''} scatter-chart__point`}
        cx={x} cy={y} r={6}>
      </circle>
      <text x={textX} y={textY}>{label}</text>
    </g>
  )
}

export default Item;
