import apiClient from '../apiClient';

const statsService = {
  getMonthlySpending: (params?: Record<string, string | number>) =>
    apiClient.get(
      `/buyer/stats/monthly-spending${params ? '' : '?all_time=1'}`,
      { params }
    ),
  getTotalPurchases: (params?: Record<string, string | number>) =>
    apiClient.get(
      `/buyer/stats/total-purchases${params ? '' : '?all_time=1'}`,
      { params }
    ),
  getTotalSpending: (params?: Record<string, string | number>) =>
    apiClient.get(`/buyer/stats/total-spending${params ? '' : '?all_time=1'}`, {
      params,
    }),
  getPurchasesByProductType: (params?: Record<string, string | number>) =>
    apiClient.get(
      `/buyer/stats/purchases-by-product-type${params ? '' : '?all_time=1'}`,
      { params }
    ),
  getTotalPurchasesSummary: (params?: Record<string, string | number>) =>
    apiClient.get(
      `/buyer/stats/total-purchases-summary${params ? '' : '?all_time=1'}`,
      { params }
    ),
};

export default statsService;
