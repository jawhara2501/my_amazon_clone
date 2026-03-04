import { useParams } from "react-router-dom";
//import { products } from "../data/products";
//import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import { useCart } from "../context/useCart";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState<Product | null>(null);

  // const product = products.find(
  //   (p) => p.id === Number(id)
  // );
    useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
}, [id]);


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

          <p className="text-gray-600 mb-4 text-black">
            {product.description}
          </p>

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
