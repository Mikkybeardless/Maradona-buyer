export const filtersConfig = [
  {
    key: 'bedrooms',
    label: 'Bedrooms',
    type: 'button',
    options: [
      { id: 1, label: '1-3' },
      { id: 2, label: '4-6' },
      { id: 3, label: '7-9' },
      { id: 4, label: '10-13' },
      { id: 5, label: '14 and above' },
    ],
  },
  {
    key: 'bathrooms',
    label: 'Bathrooms',
    type: 'button',
    options: [
      { id: 1, label: '1-3' },
      { id: 2, label: '4-6' },
      { id: 3, label: '7-9' },
      { id: 4, label: '10-13' },
      { id: 5, label: '14 and above' },
    ],
  },
  {
    key: 'priceRange',
    label: 'Price range',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Less than ₦4,500,000' },
      { id: 2, label: '₦4.5 to 10 million' },
      { id: 3, label: '₦10 to 15 million' },
      { id: 4, label: '₦15 to 20 million' },
      { id: 5, label: '₦20 to 25 million' },
    ],
  },
  {
    key: 'houseType',
    label: 'House Type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Detached' },
      { id: 2, label: 'Semi detached' },
      { id: 3, label: 'Duplex' },
      { id: 4, label: 'Terrace' },
      { id: 5, label: 'Bungalow' },
      { id: 6, label: 'Studio apartment' },
    ],
  },
  {
    key: 'landType',
    label: 'Land Type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Residential' },
      { id: 2, label: 'Commercial' },
      { id: 3, label: 'Agricultural' },
      { id: 4, label: 'Industrial' },
    ],
  },
  {
    key: 'docType',
    label: 'Documentation Type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Residential' },
      { id: 2, label: 'Commercial' },
      { id: 3, label: 'Agricultural' },
      { id: 4, label: 'Industrial' },
    ],
  },
  {
    key: 'furnishedStatus',
    label: 'Furnished Status',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Fully furnished' },
      { id: 2, label: 'Semi furnished' },
      { id: 3, label: 'Unfurnished' },
    ],
  },
  {
    key: 'accessibility',
    label: 'Accessibility',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Main road' },
      { id: 2, label: 'Inner road' },
    ],
  },
  {
    key: 'topography',
    label: 'Topography',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Dry land' },
      { id: 2, label: 'Swampy' },
      { id: 3, label: 'Water logged' },
    ],
  },
  {
    key: 'fencing',
    label: 'Fencing',
    type: 'checkbox',
    options: [
      { id: 'yes', label: 'Fenced' },
      { id: 'no', label: 'Not fenced' },
    ],
  },
  {
    key: 'condition',
    label: 'Condition',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Tokunbo' },
      { id: 2, label: 'Nigerian used' },
      { id: 3, label: 'Brand new' },
    ],
  },
  {
    key: 'transmission',
    label: 'Transmission',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Tokunbo' },
      { id: 2, label: 'Nigerian used' },
      { id: 3, label: 'Brand new' },
    ],
  },
  {
    key: 'fuelType',
    label: 'Fuel type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Gasoline' },
      { id: 2, label: 'Petrol' },
      { id: 3, label: 'Diesel' },
    ],
  },

  {
    key: 'bodyType',
    label: 'Body type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Sedan' },
      { id: 2, label: 'SUV' },
      { id: 3, label: 'Truck' },
      { id: 4, label: 'Van' },
      { id: 5, label: 'Coupe' },
      { id: 6, label: 'Hatchback' },
    ],
  },
  {
    key: 'mileage',
    label: 'Mileage',
    type: 'range',
    options: [
      { id: 1, label: 'Less than 50,000 km' },
      { id: 2, label: '50,000 to 100,000 km' },
      { id: 3, label: '100,000 to 150,000 km' },
      { id: 4, label: '150,000 to 200,000 km' },
      { id: 5, label: '200,000 km and above' },
    ],
  },

  {
    key: 'driveType',
    label: 'Drive type',
    type: 'checkbox',
    options: [
      { id: 1, label: 'Front-wheel drive' },
      { id: 2, label: 'Rear-wheel drive' },
      { id: 3, label: 'All-wheel drive' },
      { id: 4, label: 'Four-wheel drive' },
    ],
  },
];
