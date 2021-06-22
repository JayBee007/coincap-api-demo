import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  useEffect(function () {
    router.replace("/exchanges");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
