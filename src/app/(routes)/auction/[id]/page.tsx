// At the top
import { AuctionDetailsClient } from '@/app/_components/auction';

// const ProductDetailClient = dynamic(
//   () => import('@/app/_components/product/details'),
//   { ssr: false }
// );

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  // You can fetch data here if needed, e.g., using a database or API call

  return <AuctionDetailsClient id={id} />;
}
