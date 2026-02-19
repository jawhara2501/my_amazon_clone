//import Card from "../atoms/Card";
//import Button from "../atoms/Button";
// import type { Product } from "../../context/CartContext";
// import { useCart } from "../../context/useCart";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }: { product: Product }) => {
//   const { dispatch } = useCart();

//   return (
//     <Card>
//       <img src={product.image} className="h-40 mx-auto object-contain" />
//       <h2 className="font-semibold mt-2">{product.title}</h2>
//       <p className="font-bold">₹{product.price}</p>

//       <div className="flex gap-2 mt-2">
//         <Link to={`/product/${product.id}`}>
//           <Button>View</Button>
//         </Link>

//         <Button onClick={() => dispatch({ type: "ADD", payload: product })}>
//           Add to Cart
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default ProductCard;

import type { Product } from "../../context/CartContext";
import { useCart } from "../../context/useCart";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white p-4 shadow hover:shadow-lg transition rounded">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          className="h-48 mx-auto object-contain"
        />
      </Link>

      <h2 className="text-sm mt-3 text-blue-600 cursor-pointer">
        {product.title}
      </h2>

      <div className="text-yellow-500 text-sm">
        ★★★★☆
      </div>

      <p className="font-bold mt-2 text-black">₹{product.price}</p>

      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: product })
        }
        className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded text-black"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
