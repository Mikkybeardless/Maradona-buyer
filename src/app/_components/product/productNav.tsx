'use client';

import { useEffect, useState } from 'react';

type DetailState = 'about' | 'summary';
interface ProductNavProps {
  onStateChange: (state: DetailState) => void;
}

export default function ProductNav({ onStateChange }: ProductNavProps) {
  const [detailState, setDetailState] = useState<DetailState>('about');
  useEffect(() => {
    onStateChange(detailState);
  }, [detailState, onStateChange]);

  return (
    <section
      id="product-nav"
      className=" border-gray-200 border-b-2 flex items-center gap-20"
    >
      <button
        onClick={() => setDetailState('about')}
        className={`${detailState === 'about' ? 'text-darkBlue font-bold border-[#4345AA] border-b-4' : ''}`}
      >
        About this Item
      </button>
      <button
        onClick={() => setDetailState('summary')}
        className={`${detailState === 'summary' ? 'text-darkBlue font-bold border-[#4345AA] border-b-4' : ''}`}
      >
        Inspection Summary
      </button>
    </section>
  );
}
