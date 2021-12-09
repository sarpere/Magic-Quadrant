import { ReactElement } from 'react'
import Header from '../Header';
import HeaderTypes from '../Types/Header';
import BodyTypes from '../Types/Body';
import Body from '../Body';
interface Props {
  data: BodyTypes.Rows;
  columns: HeaderTypes.Columns;
  uniqueKey?: string;
}

function Table({ columns, data, uniqueKey }: Props): ReactElement {
  return (
    <table>
        <Header columns={columns} />
        <Body data={data} columns={columns} uniqueKey={uniqueKey}/>
    </table>
  )
}

export default Table
