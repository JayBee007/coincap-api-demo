import React from "react";
import { useRouter } from "next/router";

import { ArrowDown } from "../../assets/icons/ArrowDown";
import { ArrowUp } from "../../assets/icons/ArrowUp";

import { ExchangeSortInput, SortDirection } from "../../graphql/__generated__";

const HEADINGS = [
  {
    title: "Rank",
    sort: true,
    sortName: ExchangeSortInput["Rank"],
    alignClass: "text-center",
  },
  {
    title: "Name",
    sort: true,
    sortName: ExchangeSortInput["Name"],
    alignClass: "text-left",
  },
  {
    title: "Trading Pairs",
    sort: true,
    sortName: ExchangeSortInput["TradingPairs"],
    alignClass: "text-right",
  },
  {
    title: "Top Pair",
    sort: false,
    alignClass: "text-right",
  },
  {
    title: "Volume(24hr)",
    sort: true,
    sortName: ExchangeSortInput["VolumeUsd24Hr"],
    alignClass: "text-right",
  },
  {
    title: "Total(%)",
    sort: true,
    sortName: ExchangeSortInput["PercentTotalVolume"],
    alignClass: "text-right",
  },
  {
    title: "Status",
    sort: true,
    sortName: ExchangeSortInput["UpdatedAt"],
    alignClass: "text-center",
  },
];
interface ExchangeProps {
  isLoading: boolean;
  data?: any[];
  sortFilter: ExchangeSortInput;
  direction: SortDirection;
  handleSortAndDirection: (newSort: ExchangeSortInput) => void;
  handlePagination: () => void;
}
export function Exchanges(props: ExchangeProps): React.ReactElement {
  const {
    data,
    handleSortAndDirection,
    sortFilter,
    direction,
    handlePagination,
  } = props;
  const router = useRouter();

  function handleNavigation(target: string) {
    router.push(`/exchanges/${target}`);
  }
  return (
    <table className="w-full text-sm opacity-60 font-semibold">
      <thead>
        <tr className="bg-gray-200">
          {HEADINGS.map((heading) => (
            <td
              onClick={
                heading.sortName
                  ? () => handleSortAndDirection(heading.sortName)
                  : () => {}
              }
              className={`text-left py-2 ${heading.alignClass} ${
                heading.sort ? "cursor-pointer" : "cursor-default"
              }`}
              key={heading.title}
            >
              <span>{heading.title} </span>
              <span className="inline-block">
                {sortFilter === heading.sortName &&
                  (direction === SortDirection["Asc"] ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  ))}
              </span>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((node: any) => (
          <tr
            onClick={() => handleNavigation(node.id)}
            key={node.id}
            className="table-row bg-white hover:bg-gray-400 transition-all ease-in duration-150 font-semibold text-xs cursor-pointer border-b-2"
          >
            <td className="py-4 text-center">{node.rank}</td>
            <td className="py-4 text-left">{node.name}</td>
            <td className="py-4 text-right">{node.tradingPairs}</td>
            <td className="py-4 text-right">{node.topPair}</td>
            <td className="py-4 text-right">{node.volumeUsd24Hr}</td>
            <td className="py-4 text-right">{node.percentTotalVolume}</td>
            <td className="py-4 text-center">
              <span
                className={`h-4 w-4 rounded-full inline-block ${
                  node.status ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <button type="button" onClick={handlePagination}>
              Load More
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
