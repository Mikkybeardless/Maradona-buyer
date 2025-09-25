'use client';

import { formatCurrency, formatNumber } from '@/app/Utils/util';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const PurchaseChannel = ({ data }: { data: TotalPurchaseSummary }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Purchase Channel Comparison
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={[
            {
              channel: 'Direct Products',
              units: data.current_period.direct_sales_units,
              purchase: data.current_period.direct_sales_amount,
            },
            {
              channel: 'Auction Products',
              units: data.current_period.auction_sales_units,
              purchase: data.current_period.auction_sales_amount,
            },
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="channel" />
          <YAxis
            yAxisId="left"
            tickFormatter={(value) => formatNumber(value)}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickFormatter={(value) => `N${(value / 1000).toFixed(0)}K`}
          />
          <Tooltip
            formatter={(value, name) => [
              name === 'Units' ? formatNumber(value) : formatCurrency(value),
              name,
            ]}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="units" fill="#fdba74" name="Units" />
          <Bar
            yAxisId="right"
            dataKey="purchase"
            fill="#e65800"
            name="Purchase"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default PurchaseChannel;
