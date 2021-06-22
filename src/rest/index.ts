import axios, { AxiosResponse } from "axios";

export type Interval =
  | "m1"
  | "m5"
  | "m15"
  | "m30"
  | "h1"
  | "h2"
  | "h4"
  | "h8"
  | "h12"
  | "d1"
  | "w1";

export interface CandleApiVariables {
  exchange: string;
  interval: Interval;
  baseId: string;
  quoteId: string;
}

export interface OHLCData {
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  period: number;
  time: number;
}

export interface CandleApiResponse {
  data: OHLCData[];
  timestamp: number;
}

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CANDLE_URL,
});

export function getCandleUrl(variables: CandleApiVariables): string {
  const { exchange, interval, baseId, quoteId } = variables;
  return `?exchange=${exchange}&interval=${interval}&baseId=${baseId}&quoteId=${quoteId}`;
}

export async function getCandles(
  variables: CandleApiVariables
): Promise<CandleApiResponse> {
  const url = getCandleUrl(variables);

  const response = await request.get<CandleApiResponse>(url);

  return response.data;
}
