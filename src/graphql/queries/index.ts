import { gql } from "@apollo/client";

export const EXCHANGES_QUERY = gql`
  query exchanges(
    $first: Int
    $sort: ExchangeSortInput
    $direction: SortDirection
  ) {
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

export const MARKETS_QUERY = gql`
  query exchangeMargets(
    $first: Int
    $sort: ExchangeMarketSortInput
    $direction: SortDirection
    $id: ID!
  ) {
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
