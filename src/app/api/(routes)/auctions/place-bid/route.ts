import { NextResponse, NextRequest } from 'next/server';

import { AxiosError } from 'axios';
import productService from '@/app/api/services/product.service';

export async function POST(req: NextRequest) {
  try {
    const { productId, amount } = await req.json();
    const response = await productService.createBid(productId, amount);
    if (response.status !== 200) {
      return NextResponse.json(
        { message: response.statusText },
        { status: response.status }
      );
    }
    return NextResponse.json(
      { message: 'Bid placed successfully', data: response.data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('bid creation error:', error.response?.data);
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
