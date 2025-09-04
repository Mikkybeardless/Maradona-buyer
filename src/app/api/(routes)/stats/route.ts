import { NextResponse } from 'next/server';

import { AxiosError } from 'axios';
import statsService from '../../services/stats.service';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params: Record<string, string> = {};
  for (const [key, value] of Array.from(searchParams.entries())) {
    params[key] = value;
  }
  try {
    const [
      monthlySpendingResult,
      totalPurchasesResult,
      totalSpendingResult,
      purchasesByProductTypeResult,
      purchasesSummaryResult,
    ] = await Promise.all([
      statsService.getMonthlySpending(params),
      statsService.getTotalPurchases(params),
      statsService.getTotalSpending(params),
      statsService.getPurchasesByProductType(params),
      statsService.getTotalPurchasesSummary(params),
    ]);

    return NextResponse.json(
      {
        message: 'statistics retrieved successfully',
        data: {
          monthly_spending: monthlySpendingResult.data,
          total_purchases: totalPurchasesResult.data,
          total_spending: totalSpendingResult.data,
          purchases_by_product_type: purchasesByProductTypeResult.data,
          total_purchase_summary: purchasesSummaryResult.data,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('fetch statistics error:', error.response?.data);
      return NextResponse.json(
        { message: error.response?.statusText || 'Axios request failed' },
        { status: error.response?.status || 500 }
      );
    }

    // Fallback for non-Axios errors
    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
