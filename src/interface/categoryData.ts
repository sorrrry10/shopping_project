export interface categoryData {
  picture: null;
  name: string;
  id: string;
  children: child[];
}
export interface child {
  picture: string;
  name: string;
  id: string;
  goods: good[];
}
export interface good {
  picture: string;
  name: string;
  id: string;
  price: string;
  desc: string;
  orderNum: number;
}
