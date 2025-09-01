import purchaseEnquiryService from '@/app/api/services/purchaseEnq.service';
import { AxiosError } from 'axios';
import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: number | string }> }
) {
  try {
    const body = await request.json();
    const id = (await params).id;
    const response = await purchaseEnquiryService.makeEnquiry(Number(id), body);
    if (response.status !== 200) {
      return NextResponse.json(
        { message: response.statusText },
        { status: response.status }
      );
    }
    return NextResponse.json(
      { message: 'Made enquiry successfully', data: response.data },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('purchase enquiry error:', error.response?.data);
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
