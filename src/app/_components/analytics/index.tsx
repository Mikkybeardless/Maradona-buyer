'use client';
import React, { useEffect, useState } from 'react';
import { DollarSign, ShoppingCart, Calendar } from 'lucide-react';
import { StatCard } from './statCard';
import dynamic from 'next/dynamic';
import {
  buildCleanParams,
  formatCurrency,
  formatNumber,
} from '@/app/Utils/util';

import { ProductTypeDetailsTable } from './productTypeTable';
import { fetchFn } from '@/app/api/fetchFn';
import CustomPeriodModal from '../modals/customPeriodModal';
import { PeriodComparism } from './periodComparism';
import { DetailLoadingState } from '../common/detailsLoading';
const MonthlySpending = dynamic(() => import('./monthlySpending'), {
  ssr: false,
});
const PurchaseChannel = dynamic(() => import('./PurchaseChannel'), {
  ssr: false,
});

const ProductTypeDistribution = dynamic(
  () => import('./productTypeDistribution'),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  const initialStats: Stats = {
    monthly_spending: {
      data: [],
      period: {
        start: '',
        end: '',
        description: '',
      },
    },
    total_purchases: {
      direct_sales_purchases: 0,
      auction_sales_purchases: 0,
      total_purchases: 0,
      period: {
        start: '',
        end: '',
        description: '',
      },
    },
    total_spending: {
      direct_sales_spending: '',
      auction_sales_spending: '',
      total_spending: 0,
      period: {
        start: '',
        end: '',
        description: '',
      },
    },
    purchases_by_product_type: {
      data: [],
      period: {
        start: '',
        end: '',
        description: '',
      },
    },
    total_purchase_summary: {
      current_period: {
        direct_sales_units: 0,
        direct_sales_amount: 0,
        auction_sales_units: 0,
        auction_sales_amount: 0,
        total_units: 0,
        total_amount: 0,
      },
      previous_period: {
        direct_sales_units: 0,
        direct_sales_amount: 0,
        auction_sales_units: 0,
        auction_sales_amount: 0,
        total_units: 0,
        total_amount: 0,
      },
      changes: {
        unit_change: 0,
        amount_change: 0,
        unit_percentage_change: 0,
        amount_percentage_change: 0,
      },
      period: {
        start: '',
        end: '',
        description: '',
      },
      comparison_period: {
        start: '',
        end: '',
        description: '',
      },
    },
  };
  const [stats, setStats] = useState<Stats>(initialStats);
  const [customDate, setCustomDate] = useState({
    start_date: '',
    end_date: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   const [selectedPeriod, setSelectedPeriod] = useState('H1 2024');
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const params = buildCleanParams(customDate).toString();
        const response = await fetchFn(`/api/stats?${params}`);
        // console.log('Stats Data:', response.data.data);
        setStats(response.data.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, [customDate.start_date, customDate.end_date]);

  const handleCustomPeriodApply = (customDate: {
    start_date: string;
    end_date: string;
  }) => {
    setCustomDate(customDate);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <CustomPeriodModal
        Modal={isModalOpen}
        setModal={setIsModalOpen}
        onApply={handleCustomPeriodApply}
      />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between">
          {/* <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sales Analytics Dashboard
          </h1> */}
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="text-xs md:text-base">
              Current Period: {stats.total_purchase_summary.period.description}
            </span>
            <span className="mx-2">•</span>
            <span className="hidden md:block">
              {stats.total_purchase_summary.period.start} to{' '}
              {stats.total_purchase_summary.period.end}
            </span>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primaryOrange text-white text-xs md:text-base px-1.5 md:px-3 py-1 md:py-2 rounded-sm md:rounded-md"
          >
            Custom period
          </button>
        </div>

        {isLoading ? (
          <DetailLoadingState message="Loading.." />
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Expenditure"
                value={formatCurrency(
                  stats.total_purchase_summary.current_period.total_amount
                )}
                change={stats.total_purchase_summary.changes.amount_change}
                changePercent={stats.total_purchase_summary.changes.amount_percentage_change.toFixed(
                  1
                )}
                icon={DollarSign}
                isPositive={
                  stats.total_purchase_summary.changes.amount_change > 0
                }
              />
              <StatCard
                title="Total Units Bought"
                value={formatNumber(
                  stats.total_purchase_summary.current_period.total_units
                )}
                change={stats.total_purchase_summary.changes.unit_change}
                changePercent={stats.total_purchase_summary.changes.unit_percentage_change.toFixed(
                  1
                )}
                icon={ShoppingCart}
                isPositive={
                  stats.total_purchase_summary.changes.unit_change > 0
                }
              />
              <StatCard
                title="Direct Sales Expenditure"
                value={formatCurrency(
                  stats.total_purchase_summary.current_period
                    .direct_sales_amount
                )}
                icon={DollarSign}
                isPositive={true}
              />
              <StatCard
                title="Auction Sales Expenditure"
                value={formatCurrency(
                  stats.total_purchase_summary.current_period
                    .auction_sales_amount
                )}
                icon={DollarSign}
                isPositive={true}
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Monthly Spending Trend */}
              <MonthlySpending data={stats.monthly_spending.data} />

              {/* Sales Channel Comparison */}
              <PurchaseChannel data={stats.total_purchase_summary} />
            </div>

            {/* Product Type Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Type Revenue Distribution */}
              <ProductTypeDistribution
                data={
                  stats.purchases_by_product_type
                    .data as PurchasesByProductType[]
                }
              />

              {/* Product Type Details Table */}
              <ProductTypeDetailsTable
                data={
                  stats.purchases_by_product_type
                    .data as PurchasesByProductType[]
                }
              />
            </div>

            {/* Period Comparison */}
            <PeriodComparism data={stats.total_purchase_summary} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
