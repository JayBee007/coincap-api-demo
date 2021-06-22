import React from "react";

import { ChartContainer } from "../../src/components/Chart";
import { ClientOnly } from "../../src/components/ClientOnly";

export default function ChartIndexPage(): React.ReactElement {
  return (
    <div>
      <ClientOnly>
        <ChartContainer />
      </ClientOnly>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
