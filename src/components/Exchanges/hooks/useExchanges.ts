import {
  useExchangesQuery,
  ExchangesQueryVariables,
  PageInfo,
} from "../../../graphql/__generated__";

import {
  makePair,
  getPercentVolume,
  formatVolume,
  getStatus,
} from "../../../utils";

export function useExchanges(variables: ExchangesQueryVariables) {
  const {
    data,
    loading: isLoading,
    fetchMore,
  } = useExchangesQuery({
    fetchPolicy: "cache-first",
    variables,
  });

  const { edges = [], pageInfo = {} as PageInfo } = data?.exchanges || {};

  const nodes = edges?.map((edge) => {
    const node = edge?.node;

    const newEdge = {
      ...node,
      percentTotalVolume: getPercentVolume(node?.percentTotalVolume!),
      topPair: makePair(node?.topPairBaseSymbol!, node?.topPairQuoteSymbol!),
      volumeUsd24Hr: formatVolume(node?.volumeUsd24Hr!),
      status: getStatus(node?.updatedAt),
    };

    return newEdge;
  });

  return {
    isLoading,
    nodes,
    pageInfo,
    fetchMore,
    hasNextPage: pageInfo.hasNextPage,
  };
}
