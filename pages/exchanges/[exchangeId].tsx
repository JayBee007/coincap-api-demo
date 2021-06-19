import React from "react";

import { MarketsContainer } from "../../src/components/Markets";
import { ClientOnly } from "../../src/components/ClientOnly";

export default function ExchangePage(): React.ReactElement {
  return (
    <div>
      <ClientOnly>
        <MarketsContainer />
      </ClientOnly>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
