//import Header from "../components/organisms/Header";
import { useEffect, useState } from "react";
import Hero from "../components/organisms/Hero";
import ProductGrid from "../components/organisms/ProductGrid";
import { getProducts } from "../utils/api";
import type { Product } from "../types/Product";

const Home = () => {
  // const [products, setProducts] = useState<any[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  return (
    <>
      <Hero />      
      <ProductGrid products={products}/>
    </>
  );
};

export default Home;
      //<Header />
// useEffect(() => {
//   getProducts().then(res => setProducts(res.data));
// }, []);