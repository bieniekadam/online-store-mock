export interface Product {
  id: number;
  category: string;
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
