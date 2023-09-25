import { TypeCart, TypeCartAction } from "../models/Cart";

export function cartsReducer(
  carts: Array<TypeCart>,
  action: TypeCartAction
): Array<TypeCart> {
  switch (action.type) {
    case "added": {
      return carts.find((item) => item.id === action.id)
        ? carts.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          )
        : [
            ...carts,
            {
              id: action.id,
              title: action.title,
              price: action.price,
              qty: action.qty,
              image: action.image,
            },
          ];
    }
    case "remove": {
      return carts.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function initialState(initialValue: Array<TypeCart> = []): Array<TypeCart> {
  const storage = localStorage.getItem("carts");
  return storage ? JSON.parse(storage) : [];
}
