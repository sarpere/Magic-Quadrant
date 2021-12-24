import { ReactElement } from "react";
export interface ColumnBase {
  label: string;
  dataKey: string;
}
export type render<T> = (
  value: any,
  row: T,
  key: string
) => ReactElement | Element | JSX.Element;
export interface Column extends ColumnBase {
  render?: render;
  width?:  string;
}

export type Columns = Array<Column>;
