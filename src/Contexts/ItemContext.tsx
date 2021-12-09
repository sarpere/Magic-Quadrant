import { createContext, ReactElement, useState } from 'react';
import ItemTypes from '../Components/ScatterChart/Types/Item'
interface ItemContextType {
  items: ItemTypes.Items;
  itemOnUpdate: (id: number, newItem: ItemTypes.Item) => void;
  remove: (id: number) => void;
  add: () => void;
}


interface ItemContextProviderProps {
  children: ReactElement;
}

export const ItemContext = createContext<ItemContextType>({
  items: [],
  itemOnUpdate: (id: number, newItem: ItemTypes.Item) => { },
  remove: (id: number) => { },
  add: () => {}
});

export const ItemContextProvider = ({
  children,
}: ItemContextProviderProps) => {
  const getNewItem = ():ItemTypes.Item => ({ x: 50, y: 50, label: 'New', id: new Date().getTime() })
  const [items, setItems] = useState([{ x: 20, y: 20, label: 'sarper', id: 0 }, { x: 60, y: 70, label: 'sarper2', id: 1 }, { x: 120, y: 30, label: 'sarper3', id: 2 }])
  const itemOnUpdate = (id: number, newItem: ItemTypes.Item) => {
    setItems(prevState => {
      const currentItemIndex = prevState.findIndex(item => item.id === id)
      prevState[currentItemIndex] = newItem;
      return [...prevState]
    })
  }
  const remove = (id: number) => {
    setItems(prevState => prevState.filter(item => item.id !== id))
  }
  const add = () => {
    setItems(prevState => prevState.concat([getNewItem()]))
  }
  return (
    <ItemContext.Provider
      value={{
        items,
        itemOnUpdate,
        remove,
        add
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};
