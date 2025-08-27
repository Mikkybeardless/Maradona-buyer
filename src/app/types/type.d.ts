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
