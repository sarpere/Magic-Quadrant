import { createContext, ReactElement, useState } from 'react';
import ItemTypes from '../Components/ScatterChart/Types/Item'
interface ItemContextType  {
  items: ItemTypes.Items
}


interface ItemContextroviderProps {
  children: ReactElement;
}

export const ParamContext = createContext<ItemContextType>({
  items: []
});

export const ItemContextrovider = ({
  children,
}: ItemContextroviderProps) => {
 const [items, setItems] = useState([{ x: 20, y: 20, label:'sarper' },  {x: 60, y: 70, label:'sarper2' },{x: 120, y: 30, label:'sarper3' }])

  return (
    <ParamContext.Provider
      value={{
        items
      }}
    >
      {children}
    </ParamContext.Provider>
  );
};
