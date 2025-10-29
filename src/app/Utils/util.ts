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

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-NG').format(value);
};

export function formatDateToYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const formatIsoString = (
  isoString: string
): { formattedDate: string; formattedTime: string } => {
  const date = new Date(isoString);
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
  // Format the date and time
  let formattedDate = date.toLocaleDateString('en-GB');
  // Format time with AM/PM
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Ensures AM/PM format
  });
  formattedDate = `${dayName}, ${formattedDate}`;

  return { formattedDate, formattedTime };
};

export function appendField(
  formData: FormData,
  key: string,
  value: string | number | boolean | File | null | undefined
) {
  if (value === null || value === undefined) {
    throw new Error(`The field "${key}" cannot be null or undefined.`);
  }

  if (value instanceof File) {
    formData.append(key, value);
  } else {
    formData.append(key, String(value));
  }
}

export function reorderProducts(
  products: (ApiProductDetails & {
    id: number;
    is_promoted: boolean;
    belongs_to_admin: boolean;
    seller: { name: string };
  })[]
) {
  // Separate promoted and non-promoted
  const promoted = products.filter((p) => p.is_promoted);
  const others = products.filter((p) => !p.is_promoted);

  // Shuffle promoted using Fisher–Yates algorithm
  for (let i = promoted.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [promoted[i], promoted[j]] = [promoted[j], promoted[i]];
  }

  // Merge them back: promoted first, then others
  return [...promoted, ...others];
}
