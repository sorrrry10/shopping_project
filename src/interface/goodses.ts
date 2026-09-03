export interface goodses {
  id: string;
  picture: string;
  saleInfo: string;
  children: [];
  goods: goods[];
  name: string;
}
export interface goods {
  id: string;
  picture: string;
  desc: string;
  price: string;
  name: string;
  orderNum: number;
}
export interface goodss {
  id: string;
  picture: string;
  desc: string;
  price: string;
  name: string;
  orderNum: number;
  mainPictures: string[];
}
export interface orderGoods {
  attrsText: string;
  count: number;
  id: string;
  name: string;
  payPrice: string;
  picture: string;
  price: string;
  skuId: string;
  totalPayPrice: string;
  totalPrice: string;
}
