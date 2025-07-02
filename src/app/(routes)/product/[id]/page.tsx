// At the top
import dynamic from 'next/dynamic';

const ProductDetailClient = dynamic(
  () => import('@/app/_components/product/productDetailClient'),
  { ssr: false }
);

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  // You can fetch data here if needed, e.g., using a database or API call
  // const product = await fetchProductById(id);
  // const product = {
  //   id: id,
  //   name: '2003 Toyota SR5 1 OWNER FL TITLE 31 SERVICES',
  //   description:
  //     '1 OWNER, FL TITLE, BED LINER, SALT RUST FREE 31 services NON SMOKERS, POWER WINDOWS, POWER MIRRORS 4.7 V8',
  //   price: 20000000,
  //   keyfeatures: {
  //     transmission: 'Automatic',
  //     fuelType: 'Gasoline',
  //     mileage: '150,000 miles',
  //     color: 'Silver',
  //     acceleration: '120 km/h',
  //     enginePower: '4.7L V8',
  //     condition: 'Used',
  //   },
  //   images: [
  //     'https://example.com/image1.jpg',
  //     'https://example.com/image2.jpg',
  //     'https://example.com/image3.jpg',
  //   ],
  //   category: 'Vehicles',
  //   location: 'Miami, FL',
  //   seller: {
  //     id: 'seller123',
  //     name: 'John Doe',
  //     rating: 4.5,
  //     reviewsCount: 120,
  //   },
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // };

  return <ProductDetailClient productId={id} />;
}
