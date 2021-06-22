import React, { useState } from "react";
import { useRouter } from "next/router";

import { useMarkets } from "./hooks/useMarkets";
import { Markets } from "./Markets";

import { Scalars } from "../../graphql/__generated__";

import {
  ExchangeMarketSortInput,
  SortDirection,
} from "../../graphql/__generated__";

const FIRST_COUNT = 25;
const NEXT_COUNT = 35;

export function MarketsContainer(): React.ReactElement {
  const router = useRouter();

  const { exchangeId } = router.query;

  const [variables, setVariables] = useState({
    first: FIRST_COUNT,
    sort: ExchangeMarketSortInput["VolumeUsd24Hr"],
    direction: SortDirection["Desc"],
    id: exchangeId as Scalars["ID"],
  });

  const { nodes, isLoading, fetchMore, hasNextPage } = useMarkets(variables);

  function handleSortAndDirection(newSort: ExchangeMarketSortInput) {
    const { sort, direction } = variables;

    if (sort === newSort) {
      const newDirection =
        direction === SortDirection["Desc"]
          ? SortDirection["Asc"]
          : SortDirection["Desc"];

      const newVariables = {
        ...variables,
        first: FIRST_COUNT,
        direction: newDirection,
      };

      fetchMore({
        variables: newVariables,
      });

      setVariables({ ...newVariables });
      return;
    }

    const newVariables = {
      ...variables,
      sort: newSort,
      first: FIRST_COUNT,
      direction: SortDirection["Desc"],
    };

    fetchMore({
      variables: newVariables,
    });

    setVariables({ ...newVariables });
  }

  function handlePagination() {
    const newVariables = {
      ...variables,
      first: variables.first + NEXT_COUNT,
    };

    fetchMore({
      variables: {
        first: variables.first + NEXT_COUNT,
      },
    });

    setVariables({ ...newVariables });
  }

  return (
    <Markets
      exchangeId={variables.id}
      hasNextPage={hasNextPage}
      sortFilter={variables.sort}
      direction={variables.direction}
      data={nodes}
      isLoading={isLoading}
      handleSortAndDirection={handleSortAndDirection}
      handlePagination={handlePagination}
    />
  );
}
