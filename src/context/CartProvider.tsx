import { useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { State, Action } from "./CartContext";

const reducer = (state: State, action: Action): State => {

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

    case "INCREASE_QTY": {
      return {
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREASE_QTY": {
      return {
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    default:
      return state;
    }
  };

export const CartProvider = ({ children }: { children: ReactNode }) => {

  // Load cart from localStorage
  const initialState: State = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  };

  //const [state, dispatch] = useReducer(reducer, { cart: [] });
  const [state, dispatch] = useReducer(reducer, initialState);

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

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