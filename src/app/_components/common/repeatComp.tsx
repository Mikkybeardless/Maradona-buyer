import React from 'react';

export const repeatedComponents = (
  n: number,
  component: React.ReactElement
) => {
  return Array.from({ length: n }).map((_, i) => (
    <div key={i} className="w-full">
      {React.cloneElement(component, { key: i })}
    </div>
  ));
};
