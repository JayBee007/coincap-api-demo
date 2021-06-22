import { CrosshairMode } from "lightweight-charts";
export const chartConfig = {
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
};

export const candleStickConfig = {
  upColor: "rgb(107, 165, 131)",
  downColor: "rgb(215, 84, 66)",
  borderDownColor: "rgb(91, 26, 19)",
  borderUpColor: "rgb(34, 84, 55)",
  wickDownColor: "rgb(115, 115, 117)",
  wickUpColor: "rgb(115, 115, 117)",
};
