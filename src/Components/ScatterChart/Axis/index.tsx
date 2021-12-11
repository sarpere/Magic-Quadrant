import { ReactElement } from 'react'
import './style.scss';
function Axis(): ReactElement {
  return (
    <div className='scatter-axis'>
      <span className='axis-y'>Ability to execute &#8594;</span>
      <span className='axis-x'>Completeness of vision &#8594;</span>
      <span className='axis-Challangers'>Challangers</span>
      <span className='axis-Leaders'>Leaders</span>
      <span className='axis-NichePlayers'>Niche Players</span>
      <span className='axis-Visionaries'>Visionaries</span>
    </div>
  )
}

export default Axis
