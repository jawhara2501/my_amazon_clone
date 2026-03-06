import axios from "axios";
import type { Product } from "../types/Product";

const API = axios.create({
    baseURL: "https://fakestoreapi.com",
});

export const getProducts = () => API.get<Product[]>("/products");
export const getCategories = () =>
  API.get<string[]>("/products/categories");

export const getProductsByCategory = (category: string) =>
  API.get<Product[]>(`/products/category/${category}`);
