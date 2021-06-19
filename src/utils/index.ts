import numeral from "numeral";
import differenceInHours from "date-fns/differenceInHours";

export const volumeFormat = "($0.00a)";
export const priceFormat = "$0,0[.]00000000";
export const countFormat = "0,0";

export function nullCheck(value: any) {
  return value === null;
}

export function makePair(base: string, quote: string) {
  if (nullCheck(base) || nullCheck(quote)) return "-";

  return `${base}/${quote}`;
}

export function getPercentVolume(value: null | string) {
  return nullCheck(value) ? "" : `${parseFloat(value!).toFixed(2)}%`;
}

export function formatVolume(volume: null | string | number) {
  return nullCheck(volume) ? "" : numeral(volume).format(volumeFormat);
}

export function getStatus(date: Date | string | number) {
  return nullCheck(date)
    ? false
    : differenceInHours(new Date(), new Date(date)) <= 24;
}

export function formatPrice(price: string) {
  return nullCheck(price) ? " - " : `$${parseFloat(price).toFixed(4)}`;
}

export function formatCount(count: string) {
  return nullCheck(count) ? " 0 " : numeral(count).format(countFormat);
}
