'use client';

import { HistoryItem } from '@/app/_components/cards/history-card';
import DynamicNav, { StateObject } from '@/app/_components/common/DetailNav';
import { DetailLoadingState } from '@/app/_components/common/detailsLoading';
import { ErrorComponent } from '@/app/_components/common/error';
import { NoItem } from '@/app/_components/common/no-item';
import axios from 'axios';
import { useEffect, useState } from 'react';

type DetailState = 'bids' | 'purchase-enquiries' | 'did-not-win';
export default function Page() {
  const [detailState, setDetailState] = useState<DetailState>('bids');
  const initialHistory: THistory = {
    bids: [],
    enquiries: [],
  };
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [history, setHistory] = useState<THistory>(initialHistory);

  const dynamicStates: StateObject[] = [
    { state: 'bids', label: 'Bids', id: 1 },
    { state: 'purchase-enquiries', label: 'Purchase Enquiries', id: 2 },
    { state: 'did-not-win', label: "Didn't win", id: 3 },
  ];

  const handleStateChange = (state: DetailState) => {
    setDetailState(state);
  };

  useEffect(() => {
    const fetchAllHistory = async () => {
      setLoading(true);
      try {
        const results = await Promise.all([
          axios.get('/api/purchase-enq/mine'),
          axios.get('/api/auctions/mine'),
        ]);
        const [enquiriesResult, bidsResult] = results;

        const newHistory: THistory = {
          ...initialHistory,
        };
        const errors = [];
        if (enquiriesResult.status === 200) {
          const enquiries = enquiriesResult.data.data.data;
          newHistory.enquiries = enquiries;
        } else {
          console.error('Failed to fetch enquiries');
          errors.push('Failed to fetch enquiries');
        }

        if (bidsResult.status === 200) {
          const bids = bidsResult.data.data.data;
          newHistory.bids = bids;
        } else {
          console.error('Failed to fetch bids');
          errors.push('Failed to fetch bids');
        }
        console.log('New history:', newHistory);

        setHistory(newHistory);
        if (errors.length > 0) {
          setError(new Error(`Some data failed to load: ${errors.join(', ')}`));
        }
      } catch (error) {
        console.error('Unexpected error:', error);
        setError(new Error('An unexpected error occurred'));
      } finally {
        setLoading(false);
      }
    };

    fetchAllHistory();
  }, []);

  return loading ? (
    <DetailLoadingState />
  ) : error ? (
    <ErrorComponent error={error} message="Error loading history" />
  ) : (
    <div className=" space-y-5">
      <main>
        <div className="space-y-5 bg-white p-5 rounded-lg shadow-md md:pb-8 ">
          <DynamicNav
            states={dynamicStates}
            initialState={detailState}
            onStateChange={handleStateChange}
          />
          {detailState === 'bids' ? (
            <div className="flex flex-col gap-3 ">
              {history.bids.map((bid) => (
                <HistoryItem key={bid.id} productType="auction" item={bid} />
              ))}
            </div>
          ) : detailState === 'purchase-enquiries' ? (
            <div className="flex flex-col gap-3 ">
              {history.enquiries.map((enquiry) => (
                <HistoryItem
                  key={enquiry.id}
                  productType="enquiry"
                  item={enquiry}
                />
              ))}
            </div>
          ) : (
            <NoItem />
          )}
        </div>
      </main>
    </div>
  );
}
