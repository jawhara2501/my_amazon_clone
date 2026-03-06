//import Button from "../atoms/Button";
import { useCart } from "../../context/useCart";
import type { CartItem as CartItemType } from "../../context/CartContext";

type Props = {
  product: CartItemType;
}

//const CartItem = ({ item }: any) => {
//const CartItem = ({item,}: { item: CartItemType}) => {
const CartItem = ({ product }: Props) => {
  const { dispatch } = useCart();

  return (
    //<div className="flex justify-between items-center border-b py-3">
    <div className="flex flex-col md:flex-row items-start gap-6 py-6 border-b">
      {/* LEFT: IMAGE */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* MIDDLE: DETAILS */}
      {/* <div className="flex-1">
        
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

export default CartItem; */}

      {/* MIDDLE: DETAILS */}
      <div className="flex-1 w-full">
        {/* Title */}
        {/* <h2 className ="text-lg hover:text-blue-600 cursor-pointer text-black"> */}
        <h2 className ="text-lg cursor-pointer text-black">
          {product.title}
        </h2>

        {/* Stock */}
        <p className="text-green-600 text-sm mt-1">In stock</p>

        {/* Fullfilled badge */}
        <span className="inline-block bg-gray-800 text-white text-xs px-2 py-0.5 mt-1 rounded">
          Fulfilled
        </span>

        {/* Gift Option */}
        {/* <div className="mt-2 text-sm flex items-center">
          <input type="checkbox" className="mr-1 bg-white border-gray-400" />
          <span className="text-black ml-1 cursor-pointer">
            This will be a gift
          </span>
          <span className="text-blue-600 ml-1 cursor-pointer">
            Learn more 
          </span>
        </div> */}
        {/* Gift Option */}
        <div className="mt-2 text-sm flex items-center">
          <input
            type="checkbox"
            className="mr-2 w-4 h-4 bg-white border-gray-400"
          />
          <span className="text-black">
            This will be a gift
          </span>
          <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
            Learn more
          </span>
        </div>

        {/* Quantity + Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-3">

          {/* Quantity Button */}
         <div className="flex items-center border border-yellow-500 rounded-full px-2 h-8 text-sm font-semibold">

            <button
              onClick={() =>
                dispatch({ type: "DECREASE_QTY", payload: product.id })
              }
              className="px-2 text-black"
            >
              -
            </button>

            <span className="px-2 text-black">{product.quantity}</span>

            <button
              onClick={() =>
                dispatch({ type: "INCREASE_QTY", payload: product.id })
              }
              className="px-2 text-black"
            >
              +
            </button>

          </div>

          {/* Action Links*/}
          <div className="flex flex-wrap item-center text-sm text-blue-600">
            <span
              className="cursor-pointer hover:underline"
              onClick={() =>
                dispatch({ type: "REMOVE", payload: product.id })
              }
            >
              Delete
            </span>

            <span className="mx-2 text-gray-400">|</span>

            <span className="cursor-pointer hover:underline">
              Save for later
            </span>

            <span className="mx-2 text-gray-400">|</span>

            <span className="cursor-pointer hover:underline">
              See more like this
            </span>

            <span className="mx-2 text-gray-400">|</span>

            <span className="cursor-pointer hover:underline">
              Share
            </span>
          </div>
        </div>
      </div>
      

      {/* RIGHT: PRICE */}
      <div className="w-full md:w-auto md:text-right text-black">
        <div className="text-lg font-semibold mt-4 md:mt-0">
          ${(product.price ?? 0).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

// ₹