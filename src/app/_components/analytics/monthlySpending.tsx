'use client';

import { formatCurrency } from '@/app/Utils/util';

import {
  LineChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';

const MonthlySpending = ({ data }: { data: MonthlySpending[] }) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Monthly Spending Trend
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis tickFormatter={(value) => `N${(value / 1000).toFixed(0)}K`} />
          <Tooltip
            formatter={(value) => [formatCurrency(value), '']}
            labelStyle={{ color: '#374151' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="direct_sales_spending"
            stroke="#3B82F6"
            strokeWidth={3}
            name="Direct Sales"
          />
          <Line
            type="monotone"
            dataKey="auction_sales_spending"
            stroke="#10B981"
            strokeWidth={3}
            name="Auction Sales"
          />
          <Line
            type="monotone"
            dataKey="total_spending"
            stroke="#F59E0B"
            strokeWidth={3}
            name="Total Spending"
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default MonthlySpending;
