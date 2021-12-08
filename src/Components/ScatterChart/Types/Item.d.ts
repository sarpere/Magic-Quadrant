export type label = string;
export type x = number; 
export type y = number;


export interface Item {
  label: label;
  x: x;
  y: y;
}

export type Items = Array<Item>;