import { formatCurrency, formatNumber } from '@/app/Utils/util';
import { Package } from 'lucide-react';

export const ProductTypeDetailsTable = ({
  data,
}: {
  data: PurchasesByProductType[];
}) => {
  return (
    <section className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Product Type Activity
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 font-semibold text-gray-900">
                Product Type
              </th>
              <th className="text-right py-3 px-2 font-semibold text-gray-900">
                Direct Units
              </th>
              <th className="text-right py-3 px-2 font-semibold text-gray-900">
                Auction Units
              </th>
              <th className="text-right py-3 px-2 font-semibold text-gray-900">
                Total Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50"
                >
                  <td className="py-3 px-2 font-medium text-gray-900 flex items-center">
                    <Package className="w-4 h-4 mr-2 text-gray-500" />
                    {item.product_type}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-600">
                    {formatNumber(parseInt(item.direct_sales_qty))}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-600">
                    {formatNumber(item.auction_sales_qty)}
                  </td>
                  <td className="py-3 px-2 text-right font-semibold text-gray-900">
                    {formatCurrency(parseInt(item.total_spending))}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-4 px-2 text-center text-gray-500">
                  No activity yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
