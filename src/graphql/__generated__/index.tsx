// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents Epoch timestamps. */
  Date: any;
};



export type AddToWatchlistPayload = {
  __typename?: 'AddToWatchlistPayload';
  asset?: Maybe<Asset>;
};

export type Asset = Node & {
  __typename?: 'Asset';
  /** Unique slug for asset */
  id: Scalars['ID'];
  /** 24 hour percent change in market cap */
  changePercent24Hr?: Maybe<Scalars['String']>;
  /** Display name */
  name: Scalars['String'];
  /** Market cap in USD */
  marketCapUsd?: Maybe<Scalars['String']>;
  /** Price in USD */
  priceUsd?: Maybe<Scalars['String']>;
  /** Rank by market cap */
  rank?: Maybe<Scalars['Int']>;
  /** Asset symbol */
  symbol: Scalars['String'];
  /** Total supply in circulation */
  supply?: Maybe<Scalars['String']>;
  /** 24 hour exchange volume in USD */
  volumeUsd24Hr?: Maybe<Scalars['String']>;
  /** 24 hour Volume Weighted Average Price in USD */
  vwapUsd24Hr?: Maybe<Scalars['String']>;
  /** Link to the asset's website */
  website?: Maybe<Scalars['String']>;
  /** Link to the asset's block explorer */
  explorer?: Maybe<Scalars['String']>;
  /** A list of markets an asset is traded on. The max limit for first and last is 2000. */
  assetMarkets?: Maybe<AssetMarketConnection>;
  priceHistory?: Maybe<Array<Maybe<AssetHistory>>>;
};


export type AssetAssetMarketsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type AssetPriceHistoryArgs = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  interval: Interval;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AssetConnection = Connection & {
  __typename?: 'AssetConnection';
  /** A list of edges */
  edges?: Maybe<Array<Maybe<AssetEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
  /** The total number of records */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AssetEdge = Edge & {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Asset>;
};

export type AssetHistory = {
  __typename?: 'AssetHistory';
  /** Price of asset in USD */
  priceUsd?: Maybe<Scalars['String']>;
  /** Human-readable date */
  date?: Maybe<Scalars['String']>;
  /** Timestamp (milliseconds since epoch) */
  timestamp?: Maybe<Scalars['Date']>;
};

export type AssetMarket = Node & {
  __typename?: 'AssetMarket';
  /** Machine-readable name */
  id: Scalars['ID'];
  /** Exchange slug */
  exchangeId?: Maybe<Scalars['ID']>;
  /** Exchange display name */
  exchangeName?: Maybe<Scalars['String']>;
  /** Base symbol */
  baseSymbol?: Maybe<Scalars['String']>;
  /** Base slug */
  baseId?: Maybe<Scalars['ID']>;
  /** Quote symbol */
  quoteSymbol?: Maybe<Scalars['String']>;
  /** Quote slug */
  quoteId?: Maybe<Scalars['ID']>;
  /** Price in USD */
  priceUsd?: Maybe<Scalars['String']>;
  /** Volume in USD */
  volumeUsd24Hr?: Maybe<Scalars['String']>;
  /** Percent 24hr volume */
  percentVolume?: Maybe<Scalars['String']>;
  /** Last updated */
  updatedAt?: Maybe<Scalars['Date']>;
};

export type AssetMarketConnection = Connection & {
  __typename?: 'AssetMarketConnection';
  /** A list of edges */
  edges?: Maybe<Array<Maybe<AssetMarketEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
  /** The total number of records */
  totalCount?: Maybe<Scalars['Int']>;
};

export type AssetMarketEdge = Edge & {
  __typename?: 'AssetMarketEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<AssetMarket>;
};

export enum AssetMarketSortInput {
  ExchangeName = 'exchangeName',
  BaseSymbol = 'baseSymbol',
  QuoteSymbol = 'quoteSymbol',
  PriceUsd = 'priceUsd',
  VolumeUsd24Hr = 'volumeUsd24Hr',
  PercentVolume = 'percentVolume',
  UpdatedAt = 'updatedAt'
}

export enum AssetSortInput {
  ChangePercent24Hr = 'changePercent24Hr',
  Name = 'name',
  MarketCapUsd = 'marketCapUsd',
  PriceUsd = 'priceUsd',
  Rank = 'rank',
  Symbol = 'symbol',
  Supply = 'supply',
  VolumeUsd24Hr = 'volumeUsd24Hr',
  VwapUsd24Hr = 'vwapUsd24Hr'
}

export type AssetWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  name_starts_with?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<AssetWhereInput>>>;
};

export type AveragePriceUpdate = {
  __typename?: 'AveragePriceUpdate';
  /** Unique slug for asset */
  asset?: Maybe<Asset>;
  assetId: Scalars['ID'];
  /** Price in USD */
  priceUsd?: Maybe<Scalars['String']>;
};

export enum ComparableCoin {
  Btc = 'BTC',
  Eth = 'ETH',
  Bch = 'BCH',
  Ltc = 'LTC',
  Usdc = 'USDC',
  Usdt = 'USDT',
  Tusd = 'TUSD'
}

/** A connection type */
export type Connection = {
  /** A list of connection edges */
  edges?: Maybe<Array<Maybe<Edge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};


/** An edge in a connection. */
export type Edge = {
  /** An opaque pointer to the object */
  cursor: Scalars['String'];
  /** An object with an ID */
  node?: Maybe<Node>;
};

export type Exchange = Node & {
  __typename?: 'Exchange';
  /** Unique slug for exchange */
  id: Scalars['ID'];
  /** Display name */
  name: Scalars['String'];
  /** Rank by 24 hour volume */
  rank?: Maybe<Scalars['Int']>;
  /** Number of trading pairs on exchange */
  tradingPairs?: Maybe<Scalars['String']>;
  /** List of pairs trading on exchange. The max limit for first and last is 2000. */
  exchangeMarkets?: Maybe<ExchangeMarketConnection>;
  /** Base symbol with most volume on exchange */
  topPairBaseSymbol?: Maybe<Scalars['String']>;
  /** Base slug with most volume on exchange */
  topPairBaseId?: Maybe<Scalars['ID']>;
  /** Quote symbol with most volume on exchange */
  topPairQuoteSymbol?: Maybe<Scalars['String']>;
  /** Quote slug with most volume on exchange */
  topPairQuoteId?: Maybe<Scalars['ID']>;
  /** Total 24 hour exchange volume in USD */
  volumeUsd24Hr?: Maybe<Scalars['String']>;
  /** Percent of Total Market Volume in USD */
  percentTotalVolume?: Maybe<Scalars['String']>;
  /** Is there a graphql subscription for this exchange's trades */
  subscription?: Maybe<Scalars['Boolean']>;
  /** Exchange Website */
  exchangeUrl?: Maybe<Scalars['String']>;
  /** Date last updated */
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ExchangeExchangeMarketsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type ExchangeConnection = Connection & {
  __typename?: 'ExchangeConnection';
  /** A list of edges */
  edges?: Maybe<Array<Maybe<ExchangeEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
  /** The total number of records */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExchangeEdge = Edge & {
  __typename?: 'ExchangeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Exchange>;
};

export type ExchangeMarket = Node & {
  __typename?: 'ExchangeMarket';
  /** Machine-readable name */
  id: Scalars['ID'];
  /** Exchange slug */
  exchangeId?: Maybe<Scalars['ID']>;
  /** Base symbol */
  baseSymbol?: Maybe<Scalars['String']>;
  /** Base slug */
  baseId?: Maybe<Scalars['ID']>;
  /** Quote symbol */
  quoteSymbol?: Maybe<Scalars['String']>;
  /** Quote slug */
  quoteId?: Maybe<Scalars['ID']>;
  /** Number of trades in last 24 hours */
  tradesCount24Hr?: Maybe<Scalars['String']>;
  /** Price in quote */
  rate?: Maybe<Scalars['String']>;
  /** Price in USD */
  priceUsd?: Maybe<Scalars['String']>;
  /** Total 24 hour exchange volume in USD */
  volumeUsd24Hr?: Maybe<Scalars['String']>;
  /** Percent of exchange's total volume */
  percentExchangeVolume?: Maybe<Scalars['String']>;
  /** Date last updated */
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ExchangeMarketConnection = Connection & {
  __typename?: 'ExchangeMarketConnection';
  /** A list of edges */
  edges?: Maybe<Array<Maybe<ExchangeMarketEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
  /** The total number of records */
  totalCount?: Maybe<Scalars['Int']>;
};

export type ExchangeMarketEdge = Edge & {
  __typename?: 'ExchangeMarketEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<ExchangeMarket>;
};

export enum ExchangeMarketSortInput {
  BaseSymbol = 'baseSymbol',
  QuoteSymbol = 'quoteSymbol',
  TradesCount24Hr = 'tradesCount24Hr',
  Rate = 'rate',
  PriceUsd = 'priceUsd',
  VolumeUsd24Hr = 'volumeUsd24Hr',
  PercentExchangeVolume = 'percentExchangeVolume'
}

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  /** Exchange */
  exchange: Scalars['String'];
  /** Rate */
  rate: Scalars['Float'];
  /** Timestamp */
  timestamp: Scalars['Date'];
};

export enum ExchangeSortInput {
  Name = 'name',
  Rank = 'rank',
  TradingPairs = 'tradingPairs',
  TopPairBaseSymbol = 'topPairBaseSymbol',
  TopPairQuoteSymbol = 'topPairQuoteSymbol',
  VolumeUsd24Hr = 'volumeUsd24Hr',
  PercentTotalVolume = 'percentTotalVolume',
  UpdatedAt = 'updatedAt'
}

export type ExchangeWhereInput = {
  id_in?: Maybe<Array<Scalars['ID']>>;
  name_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ExchangeWhereInput>>>;
};

export type Hodling = {
  __typename?: 'Hodling';
  /** Current balance */
  balance?: Maybe<Scalars['String']>;
  /** Asset */
  asset: Asset;
  /** Transactions */
  transactions: Array<Transaction>;
};

export type HodlingCreateOrUpdateInput = {
  portfolioId: Scalars['ID'];
  assetId: Scalars['ID'];
  balance: Scalars['String'];
};

export type HodlingCreateOrUpdatePayload = {
  __typename?: 'HodlingCreateOrUpdatePayload';
  hodling?: Maybe<Hodling>;
};

export type HodlingDeleteInput = {
  assetId: Scalars['ID'];
  portfolioId: Scalars['ID'];
};

export type HodlingDeletePayload = {
  __typename?: 'HodlingDeletePayload';
  hodling?: Maybe<Hodling>;
};

export type HodlingWhereInput = {
  portfolioId: Scalars['ID'];
  assetId: Scalars['ID'];
};

export type HodlingsWhereInput = {
  portfolioId: Scalars['ID'];
};

/** Time intervals */
export enum Interval {
  /** 1 minute */
  M1 = 'm1',
  /** 5 minute */
  M5 = 'm5',
  /** 15 minute */
  M15 = 'm15',
  /** 30 minute */
  M30 = 'm30',
  /** 1 hour */
  H1 = 'h1',
  /** 2 hour */
  H2 = 'h2',
  /** 6 hour */
  H6 = 'h6',
  /** 12 hour */
  H12 = 'h12',
  /** 1 day */
  D1 = 'd1'
}

export type MarketTotal = {
  __typename?: 'MarketTotal';
  /** Total market cap in USD */
  marketCapUsd?: Maybe<Scalars['String']>;
  /** Total 24 hour exchange volume in USD */
  exchangeVolumeUsd24Hr?: Maybe<Scalars['String']>;
  /** Total number of assets */
  assets?: Maybe<Scalars['String']>;
  /** Total number of exchanges */
  exchanges?: Maybe<Scalars['String']>;
  /** Total number of markets */
  markets?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrUpdateHodling: HodlingCreateOrUpdatePayload;
  deleteHodling: HodlingDeletePayload;
  createPortfolio: PortfolioCreatePayload;
  updatePortfolio: PortfolioUpdatePayload;
  deletePortfolio: PortfolioDeletePayload;
  createTransaction: TransactionCreatePayload;
  updateTransaction: TransactionUpdatePayload;
  deleteTransaction: TransactionDeletePayload;
  createUser: UserCreatePayload;
  addToWatchlist: AddToWatchlistPayload;
  removeFromWatchlist: RemoveFromWatchlistPayload;
};


export type MutationCreateOrUpdateHodlingArgs = {
  data: HodlingCreateOrUpdateInput;
};


export type MutationDeleteHodlingArgs = {
  data: HodlingDeleteInput;
};


export type MutationCreatePortfolioArgs = {
  data: PortfolioCreateInput;
};


export type MutationUpdatePortfolioArgs = {
  data: PortfolioUpdateInput;
};


export type MutationDeletePortfolioArgs = {
  data: PortfolioDeleteInput;
};


export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationUpdateTransactionArgs = {
  data: TransactionUpdateInput;
};


export type MutationDeleteTransactionArgs = {
  data: TransactionDeleteInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationAddToWatchlistArgs = {
  assetId: Scalars['ID'];
};


export type MutationRemoveFromWatchlistArgs = {
  assetId: Scalars['ID'];
};

export type Node = {
  /** ID of the object. */
  id: Scalars['ID'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Portfolio = Node & {
  __typename?: 'Portfolio';
  /** Unique id for a portfolio */
  id: Scalars['ID'];
  /** Name of portfolio */
  name: Scalars['String'];
  /** Asset holdings */
  hodlings: Array<Hodling>;
  /** Created At */
  createdAt?: Maybe<Scalars['Date']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PortfolioCreateInput = {
  name: Scalars['String'];
};

export type PortfolioCreatePayload = {
  __typename?: 'PortfolioCreatePayload';
  portfolio?: Maybe<Portfolio>;
};

export type PortfolioDeleteInput = {
  id: Scalars['ID'];
};

export type PortfolioDeletePayload = {
  __typename?: 'PortfolioDeletePayload';
  portfolio?: Maybe<Portfolio>;
};

export type PortfolioHistory = {
  __typename?: 'PortfolioHistory';
  /** USD value of portfolio */
  amountUsd?: Maybe<Scalars['String']>;
  /** Human-readable date */
  date?: Maybe<Scalars['String']>;
  /** Timestamp (milliseconds since epoch) */
  timestamp?: Maybe<Scalars['Date']>;
};

export type PortfolioUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PortfolioUpdatePayload = {
  __typename?: 'PortfolioUpdatePayload';
  portfolio?: Maybe<Portfolio>;
};

export type PortfolioWhereInput = {
  userId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a single crypto asset */
  asset?: Maybe<Asset>;
  /** A list of assets. The max limit for first and last is 2000. */
  assets?: Maybe<AssetConnection>;
  /** A single history for a given day (daily average price) */
  assetHistory?: Maybe<AssetHistory>;
  /** A list of asset histories */
  assetHistories?: Maybe<Array<Maybe<AssetHistory>>>;
  /** A list of markets an asset is traded on. The max limit for first and last is 2000. */
  assetMarkets?: Maybe<AssetMarketConnection>;
  hodling?: Maybe<Hodling>;
  hodlings: Array<Hodling>;
  /** An exchange */
  exchange?: Maybe<Exchange>;
  /** A list of exchanges. The max limit for first and last is 2000. */
  exchanges?: Maybe<ExchangeConnection>;
  /** A list of exchange markets. The max limit for first and last is 2000. */
  exchangeMarkets?: Maybe<ExchangeMarketConnection>;
  /** Market totals of assets and exchanges tracked by CoinCap */
  marketTotal?: Maybe<MarketTotal>;
  portfolio?: Maybe<Portfolio>;
  portfolios: Array<Portfolio>;
  /** A list of portfolio histories */
  portfolioHistories: Array<PortfolioHistory>;
  /** Get a single conversion rate */
  rate?: Maybe<Rate>;
  /** A list of conversion rates. The max limit for first and last is 2000. */
  rates?: Maybe<RateConnection>;
  rateComparison: RateComparison;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  /** Get my information */
  me?: Maybe<User>;
};


export type QueryAssetArgs = {
  id: Scalars['ID'];
};


export type QueryAssetsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<AssetWhereInput>;
  sort?: Maybe<AssetSortInput>;
};


export type QueryAssetHistoryArgs = {
  assetId: Scalars['ID'];
  date: Scalars['Date'];
};


export type QueryAssetHistoriesArgs = {
  assetId: Scalars['ID'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  interval: Interval;
};


export type QueryAssetMarketsArgs = {
  assetId: Scalars['ID'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<AssetMarketSortInput>;
};


export type QueryHodlingArgs = {
  where: HodlingWhereInput;
};


export type QueryHodlingsArgs = {
  where: HodlingsWhereInput;
};


export type QueryExchangeArgs = {
  id: Scalars['ID'];
};


export type QueryExchangesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  where?: Maybe<ExchangeWhereInput>;
  sort?: Maybe<ExchangeSortInput>;
};


export type QueryExchangeMarketsArgs = {
  exchangeId: Scalars['ID'];
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<ExchangeMarketSortInput>;
};


export type QueryPortfolioArgs = {
  id: Scalars['ID'];
};


export type QueryPortfoliosArgs = {
  where: PortfolioWhereInput;
};


export type QueryPortfolioHistoriesArgs = {
  portfolioId: Scalars['ID'];
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
  interval: Interval;
};


export type QueryRateArgs = {
  id: Scalars['ID'];
};


export type QueryRatesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  direction?: Maybe<SortDirection>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  sort?: Maybe<RateSortInput>;
};


export type QueryRateComparisonArgs = {
  from: ComparableCoin;
  to: ComparableCoin;
  amount: Scalars['Int'];
};


export type QueryTransactionArgs = {
  id: Scalars['ID'];
};


export type QueryTransactionsArgs = {
  where: TransactionsWhereInput;
};

export type Rate = Node & {
  __typename?: 'Rate';
  /** Unique slug for rate */
  id: Scalars['ID'];
  /** Symbol */
  symbol?: Maybe<Scalars['String']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol (if available) */
  currencySymbol?: Maybe<Scalars['String']>;
  /** Price in USD */
  rateUsd?: Maybe<Scalars['String']>;
  /** Crypto or fiat */
  type?: Maybe<Scalars['String']>;
};

export type RateComparison = {
  __typename?: 'RateComparison';
  from: ComparableCoin;
  to: ComparableCoin;
  amount: Scalars['Int'];
  exchanges: Array<Maybe<ExchangeRate>>;
};

export type RateConnection = Connection & {
  __typename?: 'RateConnection';
  /** A list of edges */
  edges?: Maybe<Array<Maybe<RateEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
  /** The total number of records */
  totalCount?: Maybe<Scalars['Int']>;
};

export type RateEdge = Edge & {
  __typename?: 'RateEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node?: Maybe<Rate>;
};

export enum RateSortInput {
  Id = 'id',
  Symbol = 'symbol',
  CurrencySymbol = 'currencySymbol',
  RateUsd = 'rateUsd',
  Type = 'type'
}

export type RemoveFromWatchlistPayload = {
  __typename?: 'RemoveFromWatchlistPayload';
  asset?: Maybe<Asset>;
};

export enum SortDirection {
  /** Sort in ascending order */
  Asc = 'ASC',
  /** Sort in descending order */
  Desc = 'DESC'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Average Price Updates */
  averagePriceUpdates?: Maybe<Array<Maybe<AveragePriceUpdate>>>;
  /** Filter live trades by exchangeId, percentChangeFilter, or specific pairs */
  trades?: Maybe<Trade>;
};


export type SubscriptionAveragePriceUpdatesArgs = {
  assetIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type SubscriptionTradesArgs = {
  exchangeId: Scalars['ID'];
  percentChangeFilter?: Maybe<Scalars['Float']>;
  pairs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Trade = {
  __typename?: 'Trade';
  /** Exchange ID */
  exchangeId?: Maybe<Scalars['ID']>;
  /** Base slug */
  baseId?: Maybe<Scalars['ID']>;
  /** Quote slug */
  quoteId?: Maybe<Scalars['ID']>;
  /** Buy or sell */
  direction?: Maybe<Scalars['String']>;
  /** Price in quote */
  price?: Maybe<Scalars['String']>;
  /** Volume of transaction */
  volume?: Maybe<Scalars['String']>;
  /** Timestamp (milliseconds since epoch) */
  timestamp?: Maybe<Scalars['Date']>;
  /** Price in usd */
  priceUsd?: Maybe<Scalars['String']>;
};

export type Transaction = Node & {
  __typename?: 'Transaction';
  /** Unique id for a transaction */
  id: Scalars['ID'];
  /** Date of transaction */
  date?: Maybe<Scalars['Date']>;
  /** Transaction amount negative or positive */
  amount: Scalars['String'];
  /** Price in quote */
  price?: Maybe<Scalars['String']>;
  /** Base Asset */
  baseAsset: Asset;
  /** Quote Asset */
  quoteAsset?: Maybe<Asset>;
  /** Created At */
  createdAt?: Maybe<Scalars['Date']>;
  /** Updated At */
  updatedAt?: Maybe<Scalars['Date']>;
};

export type TransactionCreateInput = {
  portfolioId: Scalars['ID'];
  assetId: Scalars['ID'];
  quoteId?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['Date']>;
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type TransactionCreatePayload = {
  __typename?: 'TransactionCreatePayload';
  transaction?: Maybe<Transaction>;
};

export type TransactionDeleteInput = {
  id: Scalars['ID'];
};

export type TransactionDeletePayload = {
  __typename?: 'TransactionDeletePayload';
  transaction?: Maybe<Transaction>;
};

export type TransactionUpdateInput = {
  id: Scalars['ID'];
  assetId?: Maybe<Scalars['ID']>;
  quoteId?: Maybe<Scalars['ID']>;
  date?: Maybe<Scalars['Date']>;
  amount?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['String']>;
};

export type TransactionUpdatePayload = {
  __typename?: 'TransactionUpdatePayload';
  transaction?: Maybe<Transaction>;
};

export type TransactionsWhereInput = {
  portfolioId: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  /** Unique ID */
  id: Scalars['ID'];
  /** CoinCap v1 userId */
  legacyId?: Maybe<Scalars['ID']>;
  /** ShapeShift Id */
  shapeShiftId?: Maybe<Scalars['ID']>;
  /** My portfolios */
  portfolios?: Maybe<Array<Maybe<Portfolio>>>;
  /** My watchlist */
  watchlist: Array<Asset>;
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
};

export type UserCreateInput = {
  shapeShiftId?: Maybe<Scalars['ID']>;
};

export type UserCreatePayload = {
  __typename?: 'UserCreatePayload';
  user?: Maybe<User>;
};

export type ExchangesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<ExchangeSortInput>;
  direction?: Maybe<SortDirection>;
}>;


export type ExchangesQuery = (
  { __typename?: 'Query' }
  & { exchanges?: Maybe<(
    { __typename?: 'ExchangeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename?: 'ExchangeEdge' }
      & { node?: Maybe<(
        { __typename?: 'Exchange' }
        & Pick<Exchange, 'id' | 'name' | 'rank' | 'tradingPairs' | 'volumeUsd24Hr' | 'percentTotalVolume' | 'topPairBaseSymbol' | 'topPairQuoteSymbol' | 'updatedAt'>
      )> }
    )>>> }
  )> }
);

export type ExchangeMargetsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  sort?: Maybe<ExchangeMarketSortInput>;
  direction?: Maybe<SortDirection>;
  id: Scalars['ID'];
}>;


export type ExchangeMargetsQuery = (
  { __typename?: 'Query' }
  & { exchangeMarkets?: Maybe<(
    { __typename?: 'ExchangeMarketConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges?: Maybe<Array<Maybe<(
      { __typename?: 'ExchangeMarketEdge' }
      & { node?: Maybe<(
        { __typename?: 'ExchangeMarket' }
        & Pick<ExchangeMarket, 'id' | 'baseSymbol' | 'exchangeId' | 'baseId' | 'quoteSymbol' | 'quoteId' | 'rate' | 'priceUsd' | 'tradesCount24Hr' | 'volumeUsd24Hr' | 'percentExchangeVolume' | 'updatedAt'>
      )> }
    )>>> }
  )> }
);

export type TradesSubscriptionVariables = Exact<{
  exchangeId: Scalars['ID'];
  pairs?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type TradesSubscription = (
  { __typename?: 'Subscription' }
  & { trades?: Maybe<(
    { __typename?: 'Trade' }
    & Pick<Trade, 'baseId' | 'quoteId' | 'price' | 'direction' | 'priceUsd' | 'timestamp'>
  )> }
);


export const ExchangesDocument = gql`
    query exchanges($first: Int, $sort: ExchangeSortInput, $direction: SortDirection) {
  exchanges(first: $first, sort: $sort, direction: $direction) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        name
        rank
        tradingPairs
        volumeUsd24Hr
        percentTotalVolume
        topPairBaseSymbol
        topPairQuoteSymbol
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useExchangesQuery__
 *
 * To run a query within a React component, call `useExchangesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      sort: // value for 'sort'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useExchangesQuery(baseOptions?: Apollo.QueryHookOptions<ExchangesQuery, ExchangesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExchangesQuery, ExchangesQueryVariables>(ExchangesDocument, options);
      }
export function useExchangesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExchangesQuery, ExchangesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExchangesQuery, ExchangesQueryVariables>(ExchangesDocument, options);
        }
export type ExchangesQueryHookResult = ReturnType<typeof useExchangesQuery>;
export type ExchangesLazyQueryHookResult = ReturnType<typeof useExchangesLazyQuery>;
export type ExchangesQueryResult = Apollo.QueryResult<ExchangesQuery, ExchangesQueryVariables>;
export const ExchangeMargetsDocument = gql`
    query exchangeMargets($first: Int, $sort: ExchangeMarketSortInput, $direction: SortDirection, $id: ID!) {
  exchangeMarkets(
    first: $first
    sort: $sort
    direction: $direction
    exchangeId: $id
  ) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        id
        baseSymbol
        exchangeId
        baseId
        quoteSymbol
        quoteId
        rate
        priceUsd
        tradesCount24Hr
        volumeUsd24Hr
        percentExchangeVolume
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useExchangeMargetsQuery__
 *
 * To run a query within a React component, call `useExchangeMargetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExchangeMargetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExchangeMargetsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      sort: // value for 'sort'
 *      direction: // value for 'direction'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExchangeMargetsQuery(baseOptions: Apollo.QueryHookOptions<ExchangeMargetsQuery, ExchangeMargetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExchangeMargetsQuery, ExchangeMargetsQueryVariables>(ExchangeMargetsDocument, options);
      }
export function useExchangeMargetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExchangeMargetsQuery, ExchangeMargetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExchangeMargetsQuery, ExchangeMargetsQueryVariables>(ExchangeMargetsDocument, options);
        }
export type ExchangeMargetsQueryHookResult = ReturnType<typeof useExchangeMargetsQuery>;
export type ExchangeMargetsLazyQueryHookResult = ReturnType<typeof useExchangeMargetsLazyQuery>;
export type ExchangeMargetsQueryResult = Apollo.QueryResult<ExchangeMargetsQuery, ExchangeMargetsQueryVariables>;
export const TradesDocument = gql`
    subscription trades($exchangeId: ID!, $pairs: [String]) {
  trades(exchangeId: $exchangeId, pairs: $pairs) {
    baseId
    quoteId
    price
    direction
    priceUsd
    timestamp
  }
}
    `;

/**
 * __useTradesSubscription__
 *
 * To run a query within a React component, call `useTradesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useTradesSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTradesSubscription({
 *   variables: {
 *      exchangeId: // value for 'exchangeId'
 *      pairs: // value for 'pairs'
 *   },
 * });
 */
export function useTradesSubscription(baseOptions: Apollo.SubscriptionHookOptions<TradesSubscription, TradesSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<TradesSubscription, TradesSubscriptionVariables>(TradesDocument, options);
      }
export type TradesSubscriptionHookResult = ReturnType<typeof useTradesSubscription>;
export type TradesSubscriptionResult = Apollo.SubscriptionResult<TradesSubscription>;