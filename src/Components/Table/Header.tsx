import React, { ReactElement } from 'react'

interface Props<columnType> {
  columns: columnType
}

function Header<columnType>({ columns }: Props<columnType>): ReactElement {
  return (
    <th>
      <tr>
        <td>

        </td>
      </tr>
    </th>
  )
}

export default Header
