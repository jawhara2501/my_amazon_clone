import Button from "../atoms/Button";
import { useCart } from "../../context/useCart";
import type { CartItem as CartItemType } from "../../context/CartContext";

//const CartItem = ({ item }: any) => {
const CartItem = ({item,}: { item: CartItemType}) => {
  const { dispatch } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-3">
      <div>
        <h2 className="font-semibold">{item.title}</h2>
        <p>Qty: {item.quantity}</p>
      </div>

      <div>
        ₹{item.price * item.quantity}
        <Button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
