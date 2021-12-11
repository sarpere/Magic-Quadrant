import { createContext, ReactElement, useEffect, useState } from 'react';
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
  add: () => { }
});

export const ItemContextProvider = ({
  children,
}: ItemContextProviderProps) => {
  const getIntleItems = () => {
    let defaultItem = [{ x: 10, y: 10, label: '1', id: 0 }, { x: 40, y: 40, label: '2', id: 1 }, { x: 80, y: 80, label: '3', id: 2 }];
    let localItem: ItemTypes.Items | undefined = JSON.parse(localStorage.getItem('Items')!)
    const item = localItem || defaultItem;
    return item;
  }
  const getNewItem = (): ItemTypes.Item => ({ x: 50, y: 50, label: 'New', id: new Date().getTime() })
  const [items, setItems] = useState(getIntleItems());
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

  const updateLocalStorage = () => {
    localStorage.setItem('Items', JSON.stringify(items))
  }
  useEffect(() => {
    updateLocalStorage();
  }, [items])

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
