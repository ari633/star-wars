import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { TypeCart } from "../models/Cart";
import { cartsReducer, initialState } from "../reducers/reducer";

type ProviderProps = {
  children: ReactNode;
};

const CartContext = createContext<Array<TypeCart> | null>(null);
const CartDispatchContext = createContext<any>(null);

export function CartProvider({ children }: ProviderProps) {
  const [carts, dispatch] = useReducer(cartsReducer, [], initialState);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  return (
    <CartContext.Provider value={carts}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCarts() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

