export const formatAmount = (
  amount: number,
  currency: string = 'NGN'
): string => {
  return amount.toLocaleString('en-NG', {
    style: 'currency',
    currency: currency,
  });
};

export const buildCleanParams = (
  filters: Record<string, string | string[]>,
  query?: string,
  queryTitle?: string
): URLSearchParams => {
  const params = new URLSearchParams();

  // Add search query if it exists
  if (query && query.trim() !== '') {
    params.set(queryTitle || 'search', query);
  }

  // Add filters with proper cleaning
  Object.entries(filters).forEach(([key, value]) => {
    // Skip if value is falsy or empty
    if (!value || value === '' || value === 'all' || value === 'any') {
      return;
    }

    // Handle arrays (for multi-select filters)
    if (Array.isArray(value)) {
      if (value.length > 0) {
        params.set(key, value.join(','));
      }
      return;
    }

    // Handle objects (for complex filters like price ranges)
    if (typeof value === 'object') {
      // Skip if all properties are empty
      const hasValue = Object.values(value).some(
        (v) => v !== '' && v !== null && v !== undefined
      );
      if (hasValue) {
        params.set(key, JSON.stringify(value));
      }
      return;
    }

    // Handle primitive values
    params.set(key, String(value));
  });

  return params;
};

// Example: inside a guard or click handler

export function nairaToUsd(nairaAmount: number, rate = 0.00065) {
  if (typeof nairaAmount !== 'number' || isNaN(nairaAmount)) {
    throw new Error('Invalid naira amount: must be a number');
  }
  const dollars = nairaAmount * rate;
  return parseFloat(dollars.toFixed(2)); // Rounded to 2 decimal places by default
}
