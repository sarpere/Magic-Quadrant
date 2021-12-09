export type label = string;
export type x = number;
export type y = number;

export interface ItemProps {
  label: label;
  x: x;
  y: y;
}

export interface Item extends ItemProps {
  id: number;
}

export type Items = Array<Item>;
