import React from "react";
import { useRouter } from "next/router";

const HEADINGS = [
  {
    title: "Rank",
    sort: true,
    alignClass: "text-center",
  },
  {
    title: "Name",
    sort: true,
    alignClass: "text-left",
  },
  {
    title: "Trading Pairs",
    sort: true,
    alignClass: "text-center",
  },
  {
    title: "Top Pair",
    sort: false,
    alignClass: "text-right",
  },
  {
    title: "Volume(24hr)",
    sort: true,
    alignClass: "text-right",
  },
  {
    title: "Total(%)",
    sort: true,
    alignClass: "text-right",
  },
  {
    title: "Status",
    sort: true,
    alignClass: "text-center",
  },
];
interface ExchangeProps {
  data?: any[];
}
export function Exchanges(props: ExchangeProps): React.ReactElement {
  const { data } = props;
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
              className={`text-left py-2 ${heading.alignClass} ${
                heading.sort ? "cursor-pointer" : "cursor-default"
              }`}
              key={heading.title}
            >
              {heading.title}
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
            <td className="py-4 text-center">{node.tradingPairs}</td>
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
      </tbody>
    </table>
  );
}
