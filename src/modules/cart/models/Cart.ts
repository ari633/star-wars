export type TypeCart = {
  title: string,
  image: string,
  price: number,
  id: number,
  qty: number
}

export type TypeCartAction = TypeCart & {
  type: string;
}