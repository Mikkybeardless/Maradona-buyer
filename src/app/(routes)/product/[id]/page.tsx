// At the top
import { ProductDetailsClient } from '@/app/_components/product';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  // You can fetch data here if needed, e.g., using a database or API call

  return <ProductDetailsClient id={id} />;
}
