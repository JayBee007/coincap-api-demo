import React, { useState, useCallback } from "react";

import { Exchanges } from "./Exchanges";
import { useExchanges } from "./hook/useExchanges";

import {
  ExchangeSortInput,
  SortDirection,
  Exchange,
} from "../../graphql/__generated__";

export function ExchangesContainer(): React.ReactElement {
  const [variables, setVariables] = useState({
    first: 20,
    sort: ExchangeSortInput["Rank"],
    direction: SortDirection["Asc"],
  });

  const { nodes, isLoading, fetchMore } = useExchanges(variables);

  function handleSortAndDirection(newSort: ExchangeSortInput) {
    const { sort, direction } = variables;

    if (sort === newSort) {
      const newDirection =
        direction === SortDirection["Desc"]
          ? SortDirection["Asc"]
          : SortDirection["Desc"];

      const newVariables = {
        ...variables,
        first: 20,
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
      first: 20,
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
      first: variables.first + 40,
    };

    fetchMore({
      variables: {
        first: variables.first + 40,
      },
    });

    setVariables({ ...newVariables });
  }

  return (
    <Exchanges
      sortFilter={variables.sort}
      direction={variables.direction}
      data={nodes}
      isLoading={isLoading}
      handleSortAndDirection={handleSortAndDirection}
      handlePagination={handlePagination}
    />
  );
}
