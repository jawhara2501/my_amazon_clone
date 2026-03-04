// 

// import { products } from "../../data/products";
import ProductCard from "../molecules/ProductCard";
// import { Product } from "../../types/Product";
import type { Product } from "../../types/Product";


type Props = {
  products: Product[];
};
// type Props = {
//   products: any[];
// };

// const ProductGrid = () => {
const ProductGrid = ({products}: Props) => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
