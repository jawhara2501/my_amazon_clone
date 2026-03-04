// // 


// import { createContext } from "react";

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
//   description: string;
// }

// export interface CartItem extends Product {
//   quantity: number;
// }

// export interface State {
//   cart: CartItem[];
// }

// export type Action =
//   | { type: "ADD"; payload: Product }
//   | { type: "REMOVE"; payload: number }
//   | { type: "INCREASE_QTY"; payload: number }
//   | { type: "DECREASE_QTY"; payload: number };

// export interface CartContextType {
//   state: State;
//   dispatch: React.Dispatch<Action>;
// }

// export const CartContext = createContext<CartContextType | undefined>(undefined);


import { createContext } from "react";
import type { Product } from "../types/Product";

export interface CartItem extends Product {
  quantity: number;
}

export interface State {
  cart: CartItem[];
}

export type Action =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number };

export interface CartContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);