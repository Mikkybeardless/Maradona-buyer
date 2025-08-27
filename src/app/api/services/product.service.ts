import apiClient from '../apiClient';

const productService = {
  getAllProducts: (params?: Record<string, string | number>) =>
    apiClient.get('/products/published', { params }),
  getProduct: (id: number) => apiClient.get(`/products/published/${id}`),
  getProductsByCategory: (categoryId: number) =>
    apiClient.get(`/products/category/${categoryId}/published`),

  //   auction products
  getRunningAuctionProducts: (params?: Record<string, string | number>) =>
    apiClient.get('/auctions/running', { params }),
  getAuctionProduct: (id: number) => apiClient.get(`/auctions/${id}/public`),

  // bids
  createBid: (productId: number, amount: number) =>
    apiClient.post(`/auctions/${productId}/make-bid`, { amount }),
  getMyPlacedBids: () => apiClient.get(`/auctions/my-auction-bids`),
};

export default productService;
