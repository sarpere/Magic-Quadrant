import React, { ReactElement } from 'react'
import BodyTypes from '../Types/Body'
import HeaderTypes from '../Types/Header'
interface Props {
  uniqueKey: string;
  data: BodyTypes.Rows;
  columns: HeaderTypes.Columns
}

function Body({ uniqueKey, data, columns }: Props): ReactElement {
  return (
    <tbody>
      {
        data.map(row =>
          <tr key={row[uniqueKey]}>
            {
              columns.map(column =>
                <td key={column.dataKey}>
                  {columnRender(column, row)}
                </td>
              )
            }
          </tr>
        )
      }
    </tbody>
  )
}
const columnRender = (column: HeaderTypes.Column, props: BodyTypes.Row) => {
  if (column.render) {
    return (
      column.render(props[column.dataKey], props, column.dataKey)
    )
  } else {
    return props[column.dataKey]
  }
}

Body.defaultProps = {
  uniqueKey: 'key'
}
export default Body
