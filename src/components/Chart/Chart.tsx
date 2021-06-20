import React, { useEffect, useRef } from "react";
import { createChart, CrosshairMode, isBusinessDay } from "lightweight-charts";
import isEmpty from "lodash/isEmpty";

import { OHLCData, Interval } from "../../rest";

interface ChartProps {
  data: OHLCData[];
  selectedInterval: Interval;
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
  const { data, selectedInterval, handleIntervalChange } = props;

  function handleIntervalSelect(e: React.SyntheticEvent<HTMLSelectElement>) {
    // @ts-ignore
    handleIntervalChange(e.target.value);
  }

  useEffect(
    function () {
      if (chartRef.current && !isEmpty(data)) {
        // @ts-ignore
        chartRef.current!.innerHTML = "";
        const chart = createChart(chartRef.current!, {
          width: 960,
          height: 500,
          localization: {
            timeFormatter: (businessDayOrTimestamp: string) => {
              return new Date(businessDayOrTimestamp).toLocaleString();
            },
          },
          timeScale: {
            borderColor: "rgba(197, 203, 206, 0.8)",
            tickMarkFormatter: (time: number) => {
              const year = new Date(time).toLocaleTimeString();
              return String(year);
            },
          },
          layout: {
            backgroundColor: "rgb(242,242,242)",
            textColor: "#000000",
            fontSize: 12,
            fontFamily: "Lato",
          },
          grid: {
            vertLines: {
              visible: false,
            },
            horzLines: {
              visible: false,
            },
          },
          crosshair: {
            mode: CrosshairMode.Normal,
          },
          rightPriceScale: {
            borderColor: "rgba(197, 203, 206, 0.8)",
          },
        });

        const candleSeries = chart.addCandlestickSeries({
          upColor: "rgb(107, 165, 131)",
          downColor: "rgb(215, 84, 66)",
          borderDownColor: "rgb(91, 26, 19)",
          borderUpColor: "rgb(34, 84, 55)",
          wickDownColor: "rgb(115, 115, 117)",
          wickUpColor: "rgb(115, 115, 117)",
        });

        // @ts-ignore
        candleSeries.setData(data);
      }
    },
    [data]
  );
  return (
    <div>
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
      <div ref={chartRef}></div>
    </div>
  );
}
