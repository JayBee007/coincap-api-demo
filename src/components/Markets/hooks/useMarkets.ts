import {
  useExchangeMargetsQuery,
  ExchangeMargetsQueryVariables,
  PageInfo,
} from "../../../graphql/__generated__";

import {
  makePair,
  getPercentVolume,
  formatVolume,
  getStatus,
  formatPrice,
  formatCount,
} from "../../../utils";

export function useMarkets(variables: ExchangeMargetsQueryVariables) {
  const {
    data,
    loading: isLoading,
    fetchMore,
  } = useExchangeMargetsQuery({
    fetchPolicy: "cache-first",
    variables,
  });

  const { edges = [], pageInfo = {} as PageInfo } = data?.exchangeMarkets || {};

  const nodes = edges?.map((edge) => {
    const node = edge?.node;

    const newEdge = {
      ...node,
      volumeUsd24Hr: formatVolume(node?.volumeUsd24Hr!),
      percentExchangeVolume: getPercentVolume(node?.percentExchangeVolume!),
      pair: makePair(node?.baseSymbol!, node?.quoteSymbol!),
      status: getStatus(node?.updatedAt),
      priceUsd: formatPrice(node?.priceUsd!),
      rate: parseFloat(node?.rate!),
      tradesCount24Hr: formatCount(node?.tradesCount24Hr!),
    };

    return newEdge;
  });

  return {
    nodes,
    isLoading,
    fetchMore,
    pageInfo,
    hasNextPage: pageInfo.hasNextPage,
  };
}
