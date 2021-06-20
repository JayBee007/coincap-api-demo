import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import isEmpty from "lodash/isEmpty";

import { Interval, getCandleUrl } from "../../rest";

// @ts-ignore
const Chart = dynamic(() => import("./Chart").then((mod) => mod.Chart), {
  ssr: false,
});

import { getCandles, CandleApiVariables, CandleApiResponse } from "../../rest";

export function ChartContainer(): React.ReactElement {
  const [candleData, setCandleData] = useState<CandleApiResponse>({
    data: [],
    timestamp: -1,
  });

  const [currentTab, setCurrentTab] = useState<number>(1);
  const router = useRouter();

  const { exchange, baseId, quoteId, interval } =
    router.query as unknown as CandleApiVariables;

  useEffect(
    function () {
      async function getData() {
        const candleData = await getCandles({
          exchange,
          baseId,
          quoteId,
          interval,
        });

        setCandleData({
          timestamp: candleData.timestamp,
          data: candleData.data.map((candle) => ({
            ...candle,
            time: candle.period,
          })),
        });
      }

      getData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [interval]
  );

  function handleTabClick(tabId: number) {
    if (tabId === currentTab) return;
    setCurrentTab(tabId);
  }

  function handleIntervalChange(newInterval: Interval) {
    const newUrl = getCandleUrl({
      baseId,
      quoteId,
      exchange,
      interval: newInterval,
    });

    router.push(newUrl);
  }

  const commonTabClassNames = "text-gray-800 font-semibold rounded-t";
  const activeTabClassNames = "border-t border-r border-l -mb-px ";

  return (
    <main className="mx-auto w-3/4">
      <ul className="inline-flex pt-2 px-1 w-full border-b">
        <li
          className={`${commonTabClassNames} ${
            currentTab === 1 && activeTabClassNames
          }`}
        >
          <button
            onClick={() => handleTabClick(1)}
            className="focus:outline-none px-8 py-2"
          >
            {`${baseId}/${quoteId}`}
          </button>
        </li>
        <li
          className={`${commonTabClassNames} ${
            currentTab === 2 && activeTabClassNames
          }`}
        >
          <button
            onClick={() => handleTabClick(2)}
            className="focus:outline-none px-8 py-2"
          >
            Tab 2
          </button>
        </li>
      </ul>
      <div>
        {currentTab === 1 && (
          <Chart
            /** @ts-ignore */
            data={candleData.data}
            selectedInterval={interval}
            handleIntervalChange={handleIntervalChange}
          />
        )}
        {currentTab === 2 && <div className="p-4">Second tab</div>}
      </div>
    </main>
  );
}
