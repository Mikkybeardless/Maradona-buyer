'use client';

import { formatCurrency } from '@/app/Utils/util';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export const ProductTypeDistribution = ({
  data,
}: {
  data: PurchasesByProductType[];
}) => {
  const COLORS = [
    '#fdba74',
    '#e65800',
    '#F59E0B',
    '#EF4444',
    '#8B5CF6',
    '#06B6D4',
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Product Type Expenditure
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data.map((item) => ({
              name: item.product_type,
              value: parseInt(item.total_spending),
            }))}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip formatter={(value) => formatCurrency(value)} />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};
