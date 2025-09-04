import { TrendingDown, TrendingUp } from 'lucide-react';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

interface StatsCardProps {
  title: string;
  value: string;
  change?: number;
  changePercent?: number | string;
  icon: React.ElementType;
  isPositive: boolean;
}

export const StatCard = ({
  title,
  value,
  change,
  changePercent,
  icon: Icon,
  isPositive,
}: StatsCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {change && (
          <div
            className={`flex items-center mt-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}
          >
            {isPositive ? (
              <TrendingUp className="w-4 h-4 mr-1" />
            ) : (
              <TrendingDown className="w-4 h-4 mr-1" />
            )}
            <span>
              {changePercent}% ({formatCurrency(change)})
            </span>
          </div>
        )}
      </div>
      <div
        className={`p-3 rounded-lg ${isPositive ? 'bg-orange-100' : 'bg-blue-100'}`}
      >
        <Icon
          className={`w-6 h-6 ${isPositive ? 'text-orange-600' : 'text-blue-600'}`}
        />
      </div>
    </div>
  </div>
);
