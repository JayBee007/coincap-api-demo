import React from "react";

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

export function Exchanges(): React.ReactElement {
  return (
    <table className="bg-gray-200 w-full text-sm opacity-60 font-semibold">
      <thead>
        <tr>
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
      <tbody></tbody>
    </table>
  );
}
