import { IBanner, Product } from "../../types";

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
};

export const fetchProducts = () =>
  fetchData<Product[]>("https://igor-lab-git.github.io/my-mock-api/db.json");

export const fetchBannerImages = () =>
  fetchData<IBanner[]>(
    "https://igor-lab-git.github.io/my-mock-api/banners.json"
  );
