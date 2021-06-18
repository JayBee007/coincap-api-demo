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
