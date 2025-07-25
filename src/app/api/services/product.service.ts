import apiClient from '../apiClient';

interface Product {
  name: string;
  category_id: number;
  price: number;
  inventory: string;
  type: 'HOUSE' | 'CAR' | 'LAND' | 'OTHER';
  sku: string;
  tags: number[];
  documents: File[];
  media: File[];
  description: string;
}

type House = {
  house_beds: number;
  house_size: number;
  house_condition: string;
  house_furnished: string;
  accessibility: string;
};

type Car = {
  body_type: string;
  gear_type: string;
  engine_type: string;
  mileage: string;
};

type Land = {
  land_size: number;
  land_type: string;
  topography: string;
  fencing: string;
  accessibility: string;
};

type GenProduct = Product & (House | Car | Land);

const productService = {
  getAllProducts: () => apiClient.get('/products/published'),
  getProduct: (id: number) => apiClient.get(`/products/${id}/show`),
  productSearch: (query: string) =>
    apiClient.get(`/products/published?type=${query}`),
  getProductsByTag: (tagId: number) =>
    apiClient.get(`/products/tag/${tagId}/published`),
  getProductsByCategory: (categoryId: number) =>
    apiClient.get(`/products/category/${categoryId}/published`),

  //   auction products
  getRunningAuctionProducts: () => apiClient.get('/auctions/running'),
  getAuctionProduct: (id: number) => apiClient.get(`/auctions/${id}/public`),
};

export default productService;
export type { GenProduct, Product, House, Car, Land };
