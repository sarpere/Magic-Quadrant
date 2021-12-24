import { ReactElement } from 'react'
import HeaderTypes from '../Types/Header'
interface Props {
  columns: HeaderTypes.Columns
}

function Header({ columns }: Props): ReactElement {
  return (
    <>
      <thead>
        <tr>
          {
            columns.map(column => <th style={{ width: column.width || 'auto' }}  key={column.dataKey}>{column.label}</th>)
          }
        </tr>
      </thead>
    </>
  )
}

export default Header
