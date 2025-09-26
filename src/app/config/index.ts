export const HouseFiltersConfig = [
  {
    key: 'min_price',
    label: 'Minimum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'max_price',
    label: 'Maximum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'house_type',
    label: 'House Type',
    type: 'checkbox',
    options: [
      { id: 'detached', label: 'Detached' },
      { id: 'semi_detached', label: 'Semi detached' },
      { id: 'duplex', label: 'Duplex' },
      { id: 'terrace', label: 'Terrace' },
      { id: 'bungalow', label: 'Bungalow' },
      { id: 'studio_apartment', label: 'Studio apartment' },
    ],
  },

  {
    key: 'house_size',
    label: 'House size',
    type: 'checkbox',
    options: [
      { id: '150', label: '150 x 150' },
      { id: '200', label: '200 x 200' },
      { id: '300', label: '300 x 300' },
      { id: '400', label: '400 x 400' },
    ],
  },
  {
    key: 'house_furnished',
    label: 'Furnished Status',
    type: 'checkbox',
    options: [
      { id: 'Fully furnished', label: 'Fully furnished' },
      { id: 'Semi furnished', label: 'Semi furnished' },
      { id: 'Unfurnished', label: 'Unfurnished' },
    ],
  },
  // {
  //   key: 'accessibility',
  //   label: 'Accessibility',
  //   type: 'checkbox',
  //   options: [
  //     { id: 'Main road', label: 'Main road' },
  //     { id: 'Inner road', label: 'Inner road' },
  //   ],
  // },
  {
    key: 'topography',
    label: 'Topography',
    type: 'checkbox',
    options: [
      { id: 'dry_land', label: 'Dry land' },
      { id: 'swampy', label: 'Swampy' },
      { id: 'water_logged', label: 'Water logged' },
    ],
  },
  {
    key: 'fencing',
    label: 'Fencing',
    type: 'checkbox',
    options: [
      { id: 'fenced', label: 'Fenced' },
      { id: 'not_fenced', label: 'Not fenced' },
    ],
  },
  {
    key: 'condition',
    label: 'Condition',
    type: 'checkbox',
    options: [
      { id: 'Used', label: 'Nigerian used' },
      { id: 'New', label: 'Brand new' },
    ],
  },
  {
    key: 'direction',
    label: 'Filter Direction',
    type: 'range',
    options: [
      { id: 'asc', label: 'Ascending' },
      { id: 'desc', label: 'Descending' },
    ],
  },
];

export const CarFiltersConfig = [
  {
    key: 'min_price',
    label: 'Minimum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'max_price',
    label: 'Maximum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'condition',
    label: 'Condition',
    type: 'checkbox',
    options: [
      { id: 'Used', label: 'Nigerian used' },
      { id: 'New', label: 'Brand new' },
    ],
  },
  // {
  //   key: 'transmission',
  //   label: 'Transmission',
  //   type: 'checkbox',
  //   options: [
  //     { id: 1, label: 'Tokunbo' },
  //     { id: 2, label: 'Nigerian used' },
  //     { id: 3, label: 'Brand new' },
  //   ],
  // },
  {
    key: 'fuel_type',
    label: 'Fuel type',
    type: 'checkbox',
    options: [
      { id: 'gasoline', label: 'Gasoline' },
      { id: 'petrol', label: 'Petrol' },
      { id: 'diesel', label: 'Diesel' },
    ],
  },

  {
    key: 'body_type',
    label: 'Body type',
    type: 'checkbox',
    options: [
      { id: 'sedan', label: 'Sedan' },
      { id: 'SUV', label: 'SUV' },
      { id: 'truck', label: 'Truck' },
      { id: 'bus', label: 'Bus' },
      { id: 'coupe', label: 'Coupe' },
    ],
  },
  {
    key: 'mileage',
    label: 'Mileage',
    type: 'range',
    options: [
      { id: '3000', label: 'Less than 50,000 km/L' },
      { id: '5000', label: '50,000 to 100,000 km/L' },
      // { id: '10000', label: '100,000 to 150,000 km/L' },
      // { id: '15000', label: '150,000 to 200,000 km/L' },
      // { id: '20000', label: '200,000 km/L and above' },
    ],
  },

  {
    key: 'gear_type',
    label: 'Gear type',
    type: 'checkbox',
    options: [
      { id: 'automatic', label: 'Automatic' },
      { id: 'manual', label: 'Manual' },
    ],
  },
  {
    key: 'direction',
    label: 'Filter Direction',
    type: 'range',
    options: [
      { id: 'asc', label: 'Ascending' },
      { id: 'desc', label: 'Descending' },
    ],
  },
];

export const LandFiltersConfig = [
  {
    key: 'min_price',
    label: 'Minimum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'max_price',
    label: 'Maximum Price',
    type: 'checkbox',
    options: [
      { id: '1000000', label: 'Less than ₦4,500,000' },
      { id: '4500000', label: '₦4.5 to 10 million' },
      { id: '10000000', label: '₦10 to 15 million' },
      { id: '15000000', label: '₦15 to 20 million' },
      { id: '20000000', label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'land_type',
    label: 'Land Type',
    type: 'checkbox',
    options: [
      { id: 'residential', label: 'Residential' },
      { id: 'commercial', label: 'Commercial' },
      { id: 'agricultural', label: 'Agricultural' },
      { id: 'industrial', label: 'Industrial' },
    ],
  },

  {
    key: 'accessibility',
    label: 'Accessibility',
    type: 'checkbox',
    options: [
      { id: 'road_access', label: 'Road access' },
      { id: 'inner_road', label: 'Inner road' },
    ],
  },
  {
    key: 'topography',
    label: 'Topography',
    type: 'checkbox',
    options: [
      { id: 'dry land', label: 'Dry land' },
      { id: 'swampy', label: 'Swampy' },
      { id: 'water logged', label: 'Water logged' },
    ],
  },
  {
    key: 'fencing',
    label: 'Fencing',
    type: 'checkbox',
    options: [
      { id: 'fenced', label: 'Fenced' },
      { id: 'not_fenced', label: 'Not fenced' },
    ],
  },
  {
    key: 'direction',
    label: 'Filter Direction',
    type: 'range',
    options: [
      { id: 'asc', label: 'Ascending' },
      { id: 'desc', label: 'Descending' },
    ],
  },
];

export const linksWitOutIcons = [
  { name: 'Shipping Address', href: '/addresses' },
  { name: 'Pending reviews', href: '/pending-reviews' },
  { name: 'Recently Viewed', href: '/recently-viewed' },
  { name: 'History', href: '/history' },
  { name: 'Return&refund policy', href: '/forms/refund' },
];
