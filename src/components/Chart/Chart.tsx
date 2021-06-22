import React, { useEffect, useRef } from "react";
import { createChart } from "lightweight-charts";
import isEmpty from "lodash/isEmpty";

import { chartConfig, candleStickConfig } from "./chartConfig";

import { Spinner } from "../Spinner";

import { OHLCData, Interval } from "../../rest";

interface ChartProps {
  data: OHLCData[];
  selectedInterval: Interval;
  loading: boolean;
  handleIntervalChange: (value: Interval) => void;
}

const INTERVALS = [
  {
    value: "m1",
    display: "M1",
  },
  {
    value: "m5",
    display: "M5",
  },
  {
    value: "m15",
    display: "M15",
  },
  {
    value: "m30",
    display: "M30",
  },
  {
    value: "h1",
    display: "H1",
  },
  {
    value: "h2",
    display: "H2",
  },
  {
    value: "h4",
    display: "H4",
  },
  {
    value: "h8",
    display: "H8",
  },
  {
    value: "h12",
    display: "H12",
  },
  {
    value: "d1",
    display: "D",
  },
  {
    value: "w1",
    display: "W",
  },
];

export function Chart(props: ChartProps): React.ReactElement {
  const chartRef = useRef(null);
  const { data, selectedInterval, handleIntervalChange, loading } = props;

  function handleIntervalSelect(e: React.SyntheticEvent<HTMLSelectElement>) {
    // @ts-ignore
    handleIntervalChange(e.target.value);
  }

  useEffect(
    function () {
      if (chartRef.current && !isEmpty(data)) {
        // @ts-ignore
        chartRef.current!.innerHTML = "";
        const chart = createChart(chartRef.current!, chartConfig);

        const candleSeries = chart.addCandlestickSeries(candleStickConfig);

        // @ts-ignore
        candleSeries.setData(data);
      }
    },
    [data]
  );

  return (
    <div className="relative">
      <div className="flex py-4">
        <span className="pr-4">Change interval</span>
        <select onChange={handleIntervalSelect} defaultValue={selectedInterval}>
          {INTERVALS.map((interval) => (
            <option key={interval.value} value={interval.value}>
              {interval.display}
            </option>
          ))}
        </select>
      </div>
      {loading && (
        <div
          style={{ width: "960px", height: "500px", top: "56px" }}
          className="absolute z-20 flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-gray-50 bg-opacity-80"
        >
          <Spinner />
        </div>
      )}
      <div ref={chartRef}></div>
    </div>
  );
}
