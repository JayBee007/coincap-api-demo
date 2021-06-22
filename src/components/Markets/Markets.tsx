import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import debounce from "lodash/debounce";
import Link from "next/link";

import { ArrowDown } from "../../assets/icons/ArrowDown";
import { ArrowUp } from "../../assets/icons/ArrowUp";
import { ExternalLink } from "../../assets/icons/ExternalLink";

import {
  ExchangeMarketSortInput,
  SortDirection,
} from "../../graphql/__generated__";

const DEBOUNCED_INTERVAL = 300;

const HEADINGS = [
  {
    title: "Pair",
    sort: true,
    sortName: ExchangeMarketSortInput["BaseSymbol"],
    alignClass: "text-center",
  },
  {
    title: "Rate",
    sort: true,
    sortName: ExchangeMarketSortInput["Rate"],
    alignClass: "text-right",
  },
  {
    title: "Price",
    sort: true,
    sortName: ExchangeMarketSortInput["PriceUsd"],
    alignClass: "text-right",
  },
  {
    title: "Volume (24Hr)",
    sort: true,
    sortName: ExchangeMarketSortInput["VolumeUsd24Hr"],
    alignClass: "text-right",
  },
  {
    title: "Volume (%)",
    sort: true,
    sortName: ExchangeMarketSortInput["PercentExchangeVolume"],
    alignClass: "text-right",
  },
  {
    title: "Trades (24Hr)",
    sort: true,
    sortName: ExchangeMarketSortInput["TradesCount24Hr"],
    alignClass: "text-right",
  },
  {
    title: "Charts",
    sort: false,
    alignClass: "text-right",
  },
  {
    title: "Status",
    sort: false,
    alignClass: "text-center",
  },
];

interface MarketProps {
  exchangeId: string;
  hasNextPage: boolean;
  isLoading: boolean;
  sortFilter: ExchangeMarketSortInput;
  direction: SortDirection;
  data?: any[];
  handleSortAndDirection: (newSort: ExchangeMarketSortInput) => void;
  handlePagination: () => void;
}

export function Markets(props: MarketProps): React.ReactElement {
  const {
    data,
    sortFilter,
    handlePagination,
    handleSortAndDirection,
    direction,
    isLoading,
    hasNextPage,
    exchangeId,
  } = props;

  const debouncedHandlePagination = debounce(
    handlePagination,
    DEBOUNCED_INTERVAL
  );

  const [infiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: debouncedHandlePagination,
    rootMargin: "0px 0px 100px 0px",
  });

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
            key={node.id}
            className="table-row bg-white hover:bg-gray-400 transition-all ease-in duration-150 font-semibold text-xs border-b-2"
          >
            <td className="py-4 text-center">{node.pair}</td>
            <td className="py-4 text-right">{node.rate}</td>
            <td className="py-4 text-right">{node.priceUsd}</td>
            <td className="py-4 text-right">{node.volumeUsd24Hr}</td>
            <td className="py-4 text-right">{node.percentExchangeVolume}</td>
            <td className="py-4 text-right">{node.tradesCount24Hr}</td>
            <td className="py-4 text-right">
              <Link
                href={`/chart?exchange=${exchangeId}&baseId=${node.baseId}&quoteId=${node.quoteId}&interval=h1`}
              >
                <a className="inline-block">
                  <ExternalLink />
                </a>
              </Link>
            </td>
            <td className="py-4 text-center">
              <span
                className={`h-4 w-4 rounded-full inline-block ${
                  node.status ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
            </td>
          </tr>
        ))}
        {hasNextPage && (
          <tr ref={infiniteRef}>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
