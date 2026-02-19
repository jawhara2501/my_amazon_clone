//import Header from "../components/organisms/Header";
import { useCart } from "../context/useCart";
import CartItem from "../components/molecules/CartItem";
import CheckoutSummary from "../components/organisms/CheckoutSummary";

const Cart = () => {
  const { state } = useCart();

  return (
    <>
      <div className="p-50">
        {state.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CheckoutSummary />
      </div>
    </>
  );
};

export default Cart;

//      <Header />