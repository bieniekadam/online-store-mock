export interface SingleProductCardProps {
  category: string;
  title: string;
  description: string;
  image: string;
  rating: Rating;
  price: string;
  id: number;
}

export interface Rating {
  count: number;
  rate: number;
}
