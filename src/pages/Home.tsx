//import Header from "../components/organisms/Header";
import { useEffect, useState } from "react";
import Hero from "../components/organisms/Hero";
import ProductGrid from "../components/organisms/ProductGrid";
import { getProducts, getCategories, getProductsByCategory } from "../utils/api";
import type { Product } from "../types/Product";

const Home = () => {
  // const [products, setProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // useEffect(() => {
  //   getProducts()
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.log("Error fetching products:", err));
  // }, []);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data));
    getCategories().then((res) => setCategories(res.data));
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    if (category === "all") {
      getProducts().then((res) =>
        setProducts(res.data)
      );
    } else {
      getProductsByCategory(category).then((res) =>
        setProducts(res.data)
      );
    }
  };

  return (
    <>
      <Hero /> 

      {/* Category Section */}
      <div className="flex gap-3 p-4 flex-wrap">
        <button
          onClick={() => handleCategoryClick("all")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "all"
              ? "bg-yellow-400"
              : "bg-gray-500"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              handleCategoryClick(cat)
            }
            className={`px-4 py-2 rounded capitalize ${
              selectedCategory === cat
                ? "bg-yellow-400"
                : "bg-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
     
      <ProductGrid products={products}/>
    </>
  );
};

export default Home;
      //<Header />
// useEffect(() => {
//   getProducts().then(res => setProducts(res.data));
// }, []);