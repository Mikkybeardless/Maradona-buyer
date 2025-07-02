'use client';

import { useEffect, useState } from 'react';

export type StateObject = {
  state: State;
  label: string;
  id: number;
};
interface DynamicNavProps {
  onStateChange: (state: State) => void;
  initialState: State;
  states: StateObject[];
  textColor?: string;
  borderColor?: string;
}

type State =
  | 'about'
  | 'summary'
  | 'bids'
  | 'history'
  | 'did-not-win'
  | 'orders'
  | 'info'
  | 'payment'
  | 'security';

export default function DynamicNav({
  states,
  onStateChange,
  initialState,
  textColor = 'text-darkBlue',
  borderColor = 'border-[#4345AA]',
}: DynamicNavProps) {
  const [detailState, setDetailState] = useState<State>(initialState);
  useEffect(() => {
    onStateChange(detailState);
  }, [detailState, onStateChange]);

  return (
    <nav className=" border-gray-200 border-b-2 flex items-center gap-20">
      {states.map((state) => (
        <button
          key={state.id}
          onClick={() => setDetailState(state.state)}
          className={`${detailState === state.state ? `${textColor} font-bold ${borderColor} border-b-4` : ''}`}
        >
          {state.label}
        </button>
      ))}
    </nav>
  );
}
