export interface Product {
  id: number;
  category: ProductCategory;
  title: string;
  description: string;
  image: string;
  rating: Rating;
  price: string;
}

export interface Rating {
  count: number;
  rate: number;
}

export type ProductCategory =
  | "men's clothing"
  | "women's clothing"
  | "jewelery"
  | "electronics";

export enum ProductCategoryPaths {
  jewelery = "jewelery",
  electronics = "electronics",
  women = "women's clothing",
  men = "men's clothing",
}

export type PathCategory = keyof typeof ProductCategoryPaths;
