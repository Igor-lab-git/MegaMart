export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  inDetail: string;
  brand: string;
  imageUrl: string[];
}
export interface CartItem {
  product: Product;
  quantity: number;
}

export interface IBanner {
  id: number;
  url: string;
  alt: string;
  width: number;
  height: number;
  link: string;
}

export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export type Comment = {
  id: number;
  productId: number;
  username: string;
  text: string;
};
