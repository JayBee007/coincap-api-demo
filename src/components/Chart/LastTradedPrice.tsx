import React, { useEffect, useState } from "react";

import { Spinner } from "../Spinner";

import { formatPrice } from "../../utils";
import { useTradesSubscription } from "../../graphql/__generated__";

const HEADINGS = [
  {
    title: "Pair",
    alignClass: "text-center",
  },
  {
    title: "Rate",
    alignClass: "text-center",
  },
  {
    title: "Price",
    alignClass: "text-center",
  },
];

enum Directions {
  Buy = "buy",
  Sell = "sell",
}

interface LastTradedPriceProps {
  baseId: string;
  quoteId: string;
}

export function LastTradedPrice(
  props: LastTradedPriceProps
): React.ReactElement {
  const { baseId, quoteId } = props;
  const [tradeData, setTradeData] = useState({
    rate: "",
    price: "",
  });

  const [tradeClass, setTradeClass] = useState("");

  const { loading, data } = useTradesSubscription({
    fetchPolicy: "network-only",
    variables: {
      exchangeId: "binance",
      pairs: [`${baseId}_${quoteId}`],
    },
  });

  useEffect(
    function () {
      const newRate = data?.trades?.price;
      const newPrice = data?.trades?.priceUsd;

      setTradeData({
        rate: newRate!,
        price: formatPrice(newPrice!),
      });
    },
    [data]
  );

  useEffect(
    function () {
      const direction = data?.trades?.direction;

      if (direction === Directions.Buy) {
        setTradeClass("bg-green-400");
        setTimeout(() => {
          setTradeClass("");
        }, 150);
      }

      if (direction === Directions.Sell) {
        setTradeClass("bg-red-400");
        setTimeout(() => {
          setTradeClass("");
        }, 150);
      }
    },
    [data?.trades?.direction]
  );

  return (
    <div>
      {loading ? (
        <div className="w-full flex justify-center">
          <Spinner />
        </div>
      ) : (
        <table className="w-full text-sm opacity-60 font-semibold">
          <thead>
            <tr className="bg-gray-200">
              {HEADINGS.map((heading) => (
                <td
                  key={heading.title}
                  className={`text-left py-2 w-1/3 ${heading.alignClass}`}
                >
                  {heading.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr
              className={`table-row bg-white hover:bg-gray-400 transition-all ease-in duration-150 font-semibold text-xs border-b-2 ${tradeClass}`}
            >
              <td className="py-4 text-center">{`${baseId}/${quoteId}`}</td>
              <td className="py-4 text-center">{tradeData.rate}</td>
              <td className="py-4 text-center">{tradeData.price}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
