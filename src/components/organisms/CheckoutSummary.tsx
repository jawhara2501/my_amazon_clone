import { useCart } from "../../context/useCart";
//import type { CartItem as CartItemType } from "../../context/CartContext";

const CheckoutSummary = () => {
  const { state } = useCart();

  const total = state.cart.reduce(
    //(sum: number, item: any) => sum + item.price * item.quantity,
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-300 p-1 rounded mt-2">
      <h2 className="text-lg font-bold text-black">Subtotal: ₹{total}</h2>
      <button className="bg-yellow-400 mt-3 px-4 py-2 rounded text-black">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CheckoutSummary;
