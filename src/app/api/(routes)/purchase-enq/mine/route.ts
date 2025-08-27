import { NextResponse } from 'next/server';

import { AxiosError } from 'axios';
import purchaseEnquiryService from '@/app/api/services/purchaseEnq.service';

export async function GET() {
  try {
    const response = await purchaseEnquiryService.getMyEnquiries();
    if (response.status !== 200) {
      return NextResponse.json(
        { message: response.statusText },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        message: 'purchase enquiries retrieved successfully',
        data: response.data,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('fetch purchase enquiries error:', error.response?.data);
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
