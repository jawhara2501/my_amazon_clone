// 


import { createContext } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface State {
  cart: CartItem[];
}

export type Action =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number };

export interface CartContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
