import { NextResponse } from 'next/server';
import { AxiosError } from 'axios';

import productService from '@/app/api/services/product.service';

export async function POST(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const productId = (await params).id;

  try {
    const response = await productService.toggleLikeAuctionProduct(
      Number(productId)
    );
    if (response.status !== 200) {
      return NextResponse.json(
        { message: response.statusText },
        { status: response.status }
      );
    }
    return NextResponse.json(
      { message: 'Product liked successfully', data: response.data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('toggle Product like error:', error.response?.data);
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
