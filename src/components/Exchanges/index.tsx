import React from "react";

import { Exchanges } from "./Exchanges";
import { useExchanges } from "./hook/useExchanges";

import { ExchangeSortInput, SortDirection, Exchange } from "../../../generated";

export function ExchangesContainer(): React.ReactElement {
  const { nodes, isLoading } = useExchanges({
    first: 20,
    sort: ExchangeSortInput["Rank"],
    direction: SortDirection["Asc"],
  });

  if (isLoading) return <div>Loading....</div>;

  return <Exchanges data={nodes} />;
}
