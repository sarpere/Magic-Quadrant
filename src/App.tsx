import { useContext } from "react";
import { Table, HeaderTypes } from "./Components/ItemTable";
import ScatterChart from "./Components/ScatterChart";
import { ItemContext } from "./Contexts/ItemContext";
import ItemTypes from './Components/ScatterChart/Types/Item'
import './style/global.scss'
function App() {
  const { items, itemOnUpdate, remove, add } = useContext(ItemContext);
  const renderOpacityUpdate: HeaderTypes.render<ItemTypes.Item> = (value: boolean, row, key: string) => <input type={'checkbox'} checked={value} onChange={(e) => itemOnUpdate(row.id, { ...row, [key]: e.currentTarget.checked })} />;
  const renderInput: HeaderTypes.render<ItemTypes.Item> = (value: string | number, row, key: string) => <input value={value} onChange={(e) => itemOnUpdate(row.id, { ...row, [key]: e.currentTarget.value })} />;
  const renderNumberInput: HeaderTypes.render<ItemTypes.Item> = (value: string | number, row, key: string) => <input type={"number"} step='0.01' value={value}
    onChange={(e) => itemOnUpdate(row.id, { ...row, [key]: !e.currentTarget.value ? 0 : Math.min(parseFloat(parseFloat(e.currentTarget.value).toFixed(2)), 100) })} />;
  const removebtn: HeaderTypes.render<ItemTypes.Item> = (value, row) => <button onClick={() => remove(row.id)}>Delete</button>;
  const columns: HeaderTypes.Columns = [
    { label: '', dataKey: 'isActive', render: renderOpacityUpdate, width: '5%' },
    { label: 'Label', dataKey: 'label', render: renderInput, width: '50%' },
    { label: 'Vision', dataKey: 'x', render: renderNumberInput, width: '20%' },
    { label: 'Ability', dataKey: 'y', render: renderNumberInput, width: '20%' },
    { label: 'Delete', dataKey: '', render: removebtn, width: '5%' }
  ]
  const onPointDrag: ItemTypes.onPointDrag = (coordinates, item) => {
    itemOnUpdate(item.id, {
      ...item,
      x: coordinates.x,
      y: coordinates.y
    })
  }
  return (
    <div className="App">
      <ScatterChart
        items={items}
        onPointDrag={onPointDrag}
      />
      <div className="scatter-table">
        <button onClick={() => add()}>Add</button>
        <Table data={items} columns={columns} uniqueKey={"id"} />
      </div>
    </div>
  );
}






export default App;
