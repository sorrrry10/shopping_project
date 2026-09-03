export interface category {
  id: string;
  name: string;
  picture: string;
  children: child[];
  goods: [];
}
export interface child {
  id: string;
  name: string;
  picture: string;
}
