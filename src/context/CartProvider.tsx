//import { useReducer, ReactNode } from "react";
import { useReducer } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { State } from "./CartContext";
import type { Action } from "./CartContext";


const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case "ADD":
//       const existing = state.cart.find(i => i.id === action.payload.id);

//       if (existing) {
//         return {
//           cart: state.cart.map(i =>
//             i.id === action.payload.id
//               ? { ...i, quantity: i.quantity + 1 }
//               : i
//           ),
//         };
//       }

//       return {
//         cart: [...state.cart, { ...action.payload, quantity: 1 }],
//       };

//     case "REMOVE":
//       return {
//         cart: state.cart.filter(i => i.id !== action.payload),
//       };

//     default:
//       return state;
//   }
// }; 

  switch (action.type) {
    case "ADD": {
      const existing = state.cart.find(
        i => i.id === action.payload.id
      );

      if (existing) {
        return {
          cart: state.cart.map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE": {
      return {
        cart: state.cart.filter(i => i.id !== action.payload),
      };
    }

    default:
      return state;
    }
  };

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};