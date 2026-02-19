import { useParams } from "react-router-dom";
import { products } from "../data/products";
//import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import { useCart } from "../context/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <div className="p-6 text-red-500">
          Product not found.
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-60 grid md:grid-cols-2 gap-10">
        
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[400px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-3xl font-bold mb-6">
            ₹{product.price}
          </p>

          <Button
            onClick={() =>
              dispatch({ type: "ADD", payload: product })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

//        <Header />
