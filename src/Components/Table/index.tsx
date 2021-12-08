import React, { ReactElement } from 'react'
import Header from './Header';
import Body from './Body';

interface Props<dataType, columnType> {
  data: dataType;
  columns: columnType;
}

function Table<dataType, columntType>({data, columns}: Props<dataType, columntType>): ReactElement {
  return (
    <table>
      {/* <Header columns={columns} />
      <Body data={data} columns={columns} /> */}
    </table>
  )
}

export default Table
