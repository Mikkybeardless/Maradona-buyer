/* eslint-disable @typescript-eslint/no-explicit-any */

// product types
declare type ProductType = 'LAND' | 'CAR' | 'HOUSE';
declare type ProductStatus = 'draft' | 'published';
declare type ProductBodyType = 'SUV' | 'Sedan' | 'Coupe' | 'Truck' | 'Bus';
declare type ProductFurnishedStatus = 'furnished' | 'unfurnished';
declare type ProductAccessibility = 'main-road' | 'inner-road';
declare type ProductFencing = 'fenced' | 'not-fenced';
declare type ProductTopography = 'dry-land' | 'water-logged' | 'swampy';
declare type ProductLandType = 'residential' | 'commercial' | 'agricultural';
declare type ProductDuration = 'days' | 'weeks' | 'months';
declare type ProductAuctionType = 'auctioned' | 'non-auctioned';
declare type ProductCondition = 'new' | 'old';
declare type ProductGearType = 'manual' | 'automatic';
declare type WeightUnit = 'kg' | 'g';
declare type Media = File[];
declare type HouseCondition = 'newly-built' | 'old' | 'needs-renovation';
declare type Category_id = '1' | '2' | '3';

declare type HomeState = 'distress' | 'HOUSE' | 'CAR' | 'LAND';

declare interface ApiRes {
  id: number;
  created_at: string;
  updated_at: string;
}
declare interface Product {
  name: string;
  type: ProductType;
  description: string;
  category_id: Category_id;
  price: number;
  address: string;
  city: string;
  sale_price: number;
  continue_selling: boolean;
  state: string;
  weight_unit: WeightUnit;
  sku: string;
  media: string[];
  documents: string[];
  status: ProductStatus;
  tags: number[];
  inventory: number;
  // weight: number;
  // duration: ProductDuration | null;
  auction_duration: number | null;
  condition: ProductCondition | null;
  auction_type: ProductAuctionType;
}

declare interface Auction {
  name: string;
  type: string;
  description: string;
  category_id: Category_id;
  sku: string;
  price: string;
  // sale_price: string;
  inventory: number;
  media: string[];
  documents: string[];
  status: ProductStatus;
  starting_bid: string;
  reserve_price: string;
  start_time: string;
  end_time: string;
  tags: string[];
  incremental_bid_amount: string;
  minimum_bid_increment: string;
  auto_extend: string;
  data?: Record<string, string | number>[];
}

declare interface ApiAuction extends Auction, ApiRes {
  winning_bid_id: string;
  seller_id: string;
  approved_by: string;
  approved_at: string;
  time_left: string;
}

declare interface House extends Product {
  house_type: string;
  house_beds: number;
  house_furnished: ProductFurnishedStatus;
  house_condition: HouseCondition;
  house_size: number;
  accessibility: ProductAccessibility;
  topography: ProductTopography;
  fencing: ProductFencing;
}

declare interface Land extends Product {
  land_type: ProductLandType;
  land_size: number;
  accessibility: ProductAccessibility;
  topography: ProductTopography;
  fencing: ProductFencing;
}
declare interface Car extends Product {
  body_type: ProductBodyType;
  engine_type: string;
  transmission: string;
  mileage: string;
  gear_type: ProductGearType;
}
declare type ProductDetails = House | Land | Car;

interface User {
  name: string;
  email: string;
  email_verified_at: string | null;
  type: string;
}

declare interface ApiUser extends User, ApiRes {}
declare interface Agent extends User {
  agent_profile: {
    id: number;
    user_id: string;
    created_at: string;
    updated_at: string;
  };
}
declare interface ApiAgent extends Agent, ApiRes {}

declare interface Seller extends User {
  created_at: string;
  seller_profile: {
    id: number;
    user_id: string;
    shop_name: string | null;
    email: string | null;
    phone: string | null;
    profile_pic: string | null;
    is_approved: boolean;
    created_at: string;
    updated_at: string;
  };
}

declare interface ApiSeller extends Seller, ApiRes {}

declare interface Buyer extends User {
  buyer_profile: {
    id: number;
    user_id: string;
    created_at: string;
    updated_at: string;
  };
}

declare interface ApiBuyer extends Buyer, ApiRes {}
declare interface Inspection {
  product_type: string;
  product_id: string;
  seller_id: string;
  agent_id: string;
  scheduled_at: string;
  status: string;
  notes: string;
  assigned_at: string;
  completed_at: string;
  auction_product: null;
  product: Product;
  agent: Agent;
  seller: Seller;
}
declare interface ApiInspection extends Inspection, ApiRes {}

declare interface ApiProduct extends ProductDetails {
  id: number;
  created_at: string;
  updated_at: string;
  seller: Seller;
  belongs_to_admin: boolean;
}

declare interface Bid extends ApiRes {
  auction_product_id: string;
  buyer_id: string;
  amount: string;
  status: string;
  agent_id: string | null;
  qty_sold: string | null;
  sold_price: string | null;
  sold_at: string | null;
  accepted_at: string | null;
  rejected_at: string | null;
  auction_product: ApiAuction;
}

declare interface Enquiry extends ApiRes {
  product_id: string;
  buyer_id: string;
  message: string;
  status: string;
  agent_id: string | null;
  qty_sold: number | string | null;
  sold_price: number | string | null;
  sold_at: string | null;
  product: ProductDetails | null;
  buyer: ApiBuyer | null;
  agent: ApiAgent | null;
  inspection_request: ApiInspection | null;
}

declare interface THistory {
  bids: Bid[];
  enquiries: Enquiry[];
}

// stats
declare interface Period {
  start: string;
  end: string;
  description: string;
}
interface MonthlySpending {
  month: string;
  month_key: string;
  direct_sales_spending: number;
  auction_sales_spending: number;
  total_spending: number;
}

interface TotalPurchase {
  direct_sales_purchases: number;
  auction_sales_purchases: number;
  total_purchases: number;
  period: Period;
}

interface TotalSpending {
  direct_sales_spending: string;
  auction_sales_spending: string;
  total_spending: number;
  period: Period;
}

interface PurchasesByProductType {
  product_type: ProductType;
  direct_sales_qty: string;
  direct_sales_spending: string;
  auction_sales_qty: number;
  auction_sales_spending: number;
  total_qty: string;
  total_spending: string;
}

declare interface TotalPurchaseSummary {
  current_period: {
    direct_sales_units: number;
    direct_sales_amount: number;
    auction_sales_units: number;
    auction_sales_amount: number;
    total_units: number;
    total_amount: number;
  };
  previous_period: {
    direct_sales_units: number;
    direct_sales_amount: number;
    auction_sales_units: number;
    auction_sales_amount: number;
    total_units: number;
    total_amount: number;
  };
  changes: {
    unit_change: number;
    amount_change: number;
    unit_percentage_change: number;
    amount_percentage_change: number;
  };
  period: Period;
  comparison_period: {
    start: string;
    end: string;
    description: string;
  };
}

declare interface Stats {
  monthly_spending: { data: MonthlySpending[]; period: Period };
  total_purchases: TotalPurchase;
  total_spending: TotalSpending;
  purchases_by_product_type: { data: PurchasesByProductType[]; period: Period };
  total_purchase_summary: TotalPurchaseSummary;
}

// profile
declare interface Profile {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | string;
    type: string;
    created_at: string;
    updated_at: string;
    buyer_profile: {
      id: number;
      user_id: number;
      created_at: string;
      updated_at: string;
    };
  };
  profile: {
    id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    profile_pic_url: null | string;
  };
  user_type: string;
}

//  Notification Types
// */
declare interface NotificationStats {
  total: number;
  unread: number;
  read: number;
}

declare interface NotificationData {
  id: string | number;
  title?: string;
  message?: string;
  data?: any;
  humanized_data?: any;
  read_at?: string | null;
  created_at: string;
}

declare interface PaginationInfo {
  current_page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

declare interface NotificationsState {
  notifications: NotificationData[];
  unreadNotifications: NotificationData[];
  stats: NotificationStats | null;
  pagination: PaginationInfo;
  loading: boolean;
  statsLoading: boolean;
  error: string | null;
}

// search and filter types
declare interface FilterData {
  price_range: string[];
  house_type: string[];
  car_type: string[];
  land_type: string[];
  doc_type: string[];
  furnished_status: string[];
  accessibility: string[];
  topography: string[];
  fencing: string;
  condition: string;
  transmission: string[];
  body_type: string[];
  type: string;
}
