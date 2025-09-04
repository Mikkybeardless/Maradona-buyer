import { formatCurrency, formatNumber } from '@/app/Utils/util';

export const PeriodComparism = ({ data }: { data: TotalPurchaseSummary }) => {
  return (
    <section className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Period Comparison
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Current Period</h3>
          <p className="text-sm text-gray-600 mb-2">
            {data.period.description}
          </p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-blue-600">
              {formatCurrency(data.current_period.total_amount)}
            </p>
            <p className="text-sm text-gray-600">
              {formatNumber(data.current_period.total_units)} units
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Previous Period</h3>
          <p className="text-sm text-gray-600 mb-2">
            {data.comparison_period.description}
          </p>
          <div className="space-y-1">
            <p className="text-lg font-bold text-gray-600">
              {formatCurrency(data.previous_period.total_amount)}
            </p>
            <p className="text-sm text-gray-600">
              {formatNumber(data.previous_period.total_units)} units
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Change</h3>
          <p className="text-sm text-gray-600 mb-2">Period over Period</p>
          <div className="space-y-1">
            <p
              className={`text-lg font-bold ${data.changes.amount_change > 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {data.changes.amount_percentage_change > 0 ? '+' : ''}
              {data.changes.amount_percentage_change.toFixed(1)}%
            </p>
            <p
              className={`text-sm ${data.changes.unit_change > 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              {data.changes.unit_change > 0 ? '+' : ''}
              {formatNumber(data.changes.unit_change)} units
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
