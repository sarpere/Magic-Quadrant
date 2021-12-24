import { RefObject } from "react";

export type label = string;
export type x = number;
export type y = number;


export interface Item {
  id: number;
  label: label;
  x: x;
  y: y;
  isActive?: boolean;
}
export type onPointDrag = (coordinates: {x: number, y: number}, item) => void;
export interface ItemActions {
  onPointDrag: onPointDrag;
}
export interface ItemProps  extends Item, ItemActions{
  svgRef: RefObject<SVGSVGElement>
}

export type Items = Array<Item>;
