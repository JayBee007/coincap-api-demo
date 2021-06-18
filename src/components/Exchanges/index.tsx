import React, { useState, useCallback } from "react";

import { Exchanges } from "./Exchanges";
import { useExchanges } from "./hook/useExchanges";

import {
  ExchangeSortInput,
  SortDirection,
  Exchange,
} from "../../graphql/__generated__";

const FIRST_COUNT = 25;
const NEXT_COUNT = 35;

export function ExchangesContainer(): React.ReactElement {
  const [variables, setVariables] = useState({
    first: FIRST_COUNT,
    sort: ExchangeSortInput["Rank"],
    direction: SortDirection["Asc"],
  });

  const { nodes, isLoading, fetchMore, hasNextPage } = useExchanges(variables);

  function handleSortAndDirection(newSort: ExchangeSortInput) {
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
    <Exchanges
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
