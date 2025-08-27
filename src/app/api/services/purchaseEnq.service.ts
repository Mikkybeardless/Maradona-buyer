import apiClient from '../apiClient';

interface PurchaseEnquiry {
  message: string;
}

const purchaseEnquiryService = {
  makeEnquiry: async (id: number, data: PurchaseEnquiry) =>
    apiClient.post(`/products/${id}/purchase-enquiries`, data),
  getMyEnquiries: async () => apiClient.get('/my-purchase-enquiries'),
  getSingleEnquiry: async (id: number) =>
    apiClient.get(`/my-purchase-enquiries/${id}`),
};

export type { PurchaseEnquiry };
export default purchaseEnquiryService;
