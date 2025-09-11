export interface Review {
  id: number;
  author: string;
  rating: number;
  title: string;
  body: string;
  date: string;   // ISO string
  likes: number;
  product: string;
}
