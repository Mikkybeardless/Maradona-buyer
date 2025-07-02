'use client';
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 6.5244, // sample latitude (e.g., Lagos)
  lng: 3.3792, // sample longitude
};

export default function ProductMap() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Marker for product location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
