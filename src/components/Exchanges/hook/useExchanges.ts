import {
  useExchangesQuery,
  ExchangesQueryVariables,
} from "../../../../generated";

import numeral from "numeral";
import differenceInHours from "date-fns/differenceInHours";

const currencyFormat = "($0.00a)";

function nullCheck(value: any) {
  return value === null;
}

function getPercentTotalVolume(value: null | string) {
  return nullCheck(value) ? "" : `${parseFloat(value!).toFixed(2)}%`;
}

function getTopPair(base: string, quote: string) {
  if (nullCheck(base) || nullCheck(quote)) return "-";

  return `${base}/${quote}`;
}

function getVolumeUsd24hr(volume: null | string | number) {
  return nullCheck(volume) ? "" : numeral(volume).format(currencyFormat);
}

function getStatus(date: Date | string | number) {
  return nullCheck(date)
    ? ""
    : differenceInHours(new Date(), new Date(date)) <= 24;
}

export function useExchanges(variables: ExchangesQueryVariables) {
  const { data, loading: isLoading } = useExchangesQuery({
    variables,
  });

  const { edges = [], pageInfo = {} } = data?.exchanges || {};

  const nodes = edges?.map((edge) => {
    const node = edge?.node;

    const newEdge = {
      ...node,
      percentTotalVolume: getPercentTotalVolume(node?.percentTotalVolume!),
      topPair: getTopPair(node?.topPairBaseSymbol!, node?.topPairQuoteSymbol!),
      volumeUsd24Hr: getVolumeUsd24hr(node?.volumeUsd24Hr!),
      status: getStatus(node?.updatedAt),
    };

    return newEdge;
  });

  return {
    isLoading,
    nodes,
    pageInfo,
  };
}
