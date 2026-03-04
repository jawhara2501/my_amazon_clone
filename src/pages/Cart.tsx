// // 

// import CartItem from "../components/molecules/CartItem";
// import CheckoutSummary from "../components/organisms/CheckoutSummary";
// import { useCart } from "../context/useCart";

// const Cart = () => {
//   const { state } = useCart();

//   return (
//     <div className="bg-[#EAEDED] min-h-screen p-6">
//       <div className="max-w-6xl mx-auto flex gap-6">

//         <div className="flex-1 bg-white p-6">
//           <div className="flex justify-between items-end border-b pb-3">
//             <h1 className="text-2xl font-medium">
//               Shopping Cart
//             </h1>
//             <span className="text-sm text-gray-600">
//               Price
//             </span>
//           </div>

//           {state.cart.length === 0 ? (
//             <p className="py-10 text-center">
//               Your Amazon Cart is empty.
//             </p>
//           ) : (
//             state.cart.map(item => (
//               <CartItem key={item.id} product={item} />
//             ))
//           )}
//         </div>

//         {state.cart.length > 0 && <CheckoutSummary />}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import CartItem from "../components/molecules/CartItem";
import CheckoutSummary from "../components/organisms/CheckoutSummary";
import { useCart } from "../context/useCart";

const Cart = () => {
  const { state } = useCart();

  return (
    <div className="bg-[#EAEDED] min-h-screen p-6">
      <div className="max-w-6xl mx-auto flex gap-6">

        <div className="flex-1 bg-white p-6">
          <div className="flex justify-between items-end border-b pb-3">
            <h1 className="text-2xl font-medium text-black">
              Shopping Cart
            </h1>
            <span className="text-sm text-gray-600 text-black">
              Price
            </span>
          </div>

          {/* Cart Items */}
          {state.cart.length === 0 ? (
            <p className="py-10 text-center text-black">
              Your Amazon Cart is empty.
            </p>
          ) : (
            state.cart.map(item => (
              <CartItem key={item.id} product={item} />
            ))
          )}

          {/* Bottom Subtotal */}
          <div className="flex justify-end border-t pt-4 mt-6">
            <p className="text-lg text-black">
              Subtotal (
              {state.cart.reduce((t,i) => t + i.quantity, 0)} items
              ):{" "}
              <span className="font-semibold">
                $
                {state.cart
                  .reduce((t, i) => t + i.price * i.quantity, 0)
                  .toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {state.cart.length > 0 && <CheckoutSummary />}
      </div>
    </div>
  );
};

export default Cart;