import { useRouter } from "next/router";
export default function ExchangePage(): React.ReactElement {
  const router = useRouter();

  console.log("rotuer => ,", router);

  return <p>Exchange Page</p>;
}
