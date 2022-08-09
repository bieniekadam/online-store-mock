import { Dispatch, SetStateAction } from "react";
import { Product } from "../../interfaces/product.interface";

export interface SingleProductPageProps {
  allProducts: Product[];
  addToCart: (product: Product) => void;
}
