import React, { useState, useCallback } from "react";

import { Exchanges } from "./Exchanges";
import { useExchanges } from "./hook/useExchanges";

import { ExchangeSortInput, SortDirection, Exchange } from "../../../generated";

export function ExchangesContainer(): React.ReactElement {
  const [variables, setVariables] = useState({
    first: 20,
    sort: ExchangeSortInput["Rank"],
    direction: SortDirection["Asc"],
  });

  const { nodes, isLoading } = useExchanges(variables);

  function handleSortAndDirection(newSort: ExchangeSortInput) {
    const { sort, direction } = variables;

    if (sort === newSort) {
      const newDirection =
        direction === SortDirection["Desc"]
          ? SortDirection["Asc"]
          : SortDirection["Desc"];

      const newVariables = {
        ...variables,
        direction: newDirection,
      };

      setVariables({ ...newVariables });
      return;
    }

    const newVariables = {
      ...variables,
      sort: newSort,
      direction: SortDirection["Desc"],
    };

    setVariables({ ...newVariables });
  }

  return (
    <Exchanges
      sortFilter={variables.sort}
      direction={variables.direction}
      data={nodes}
      isLoading={isLoading}
      handleSortAndDirection={handleSortAndDirection}
    />
  );
}
