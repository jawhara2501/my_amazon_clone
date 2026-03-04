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
 
// import type { Products } from "../../context/CartContext";
import { useCart } from "../../context/useCart";
import { Link } from "react-router-dom";
import type { Product } from "../../types/Product";

type Props = {
  product: Product;
};

// type Props = {
//   product: any;
// };

// const ProductCard = ({ product }: Props) => {
//   return (
//     <div>
//       <img src={product.image} alt={product.title} width="150" />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
//       <button
//          onClick={() =>
//            dispatch({ type: "ADD", payload: product })
//          }
//          className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded text-black"
//         >
//          Add to Cart
//       </button>

//     </div>
//   );
// };

const ProductCard = ({ product }: Props) => {
  const { dispatch } = useCart();

  return (
    <div className="bg-white p-4 shadow hover:shadow-lg transition rounded">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain"
        />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="mt-3 text-sm font-medium text-blue-600 cursor-pointer hover:underline">
          {product.title}
        </h3>
      </Link>
    
      {/* Rating Section */}
      <div className="flex items-center mt-2 text-yellow-500 text-sm">
        {[1,2,3,4,5].map((star) => (
          <span key={star}>
            {star <= Math.round(product.rating.rate) ? "★" : "☆"}
          </span>
        ))}
        <span className="text-gray-600 ml-2">
          {product.rating.rate} ({product.rating.count})
        </span>
      </div>

      <p className="font-bold mt-2 text-black">
        ${product.price}
      </p>

      <button
        onClick={() =>
          dispatch({ type: "ADD", payload: product })
        }
        className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded text-black"
      >
        Add to Cart
      </button>
    </div>
  );
};



// const ProductCard = ({ product }: { product: Product }) => {
  
  // const { dispatch } = useCart();

  // return (
  //   <div className="bg-white p-4 shadow hover:shadow-lg transition rounded">
  //     <Link to={`/product/${product.id}`}>
  //       <img
  //         src={product.image}
  //         className="h-48 mx-auto object-contain"
  //       />
  //     </Link>

  //     <h2 className="text-sm mt-3 text-blue-600 cursor-pointer">
  //       {product.title}
  //     </h2>

  //     <div className="text-yellow-500 text-sm">
  //       ★★★★☆
  //     </div>

  //     <p className="font-bold mt-2 text-black">₹{product.price}</p>

  //     <button
  //       onClick={() =>
  //         dispatch({ type: "ADD", payload: product })
  //       }
  //       className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded text-black"
  //     >
  //       Add to Cart
  //     </button>
  //   </div>
  // );
// };

export default ProductCard;
