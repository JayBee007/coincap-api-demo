import React from "react";

import { ExchangesContainer } from "../../src/components/Exchanges";
import { ClientOnly } from "../../src/components/ClientOnly";

export default function ExchangeIndexPage(): React.ReactElement {
  return (
    <div>
      <ClientOnly>
        <ExchangesContainer />
      </ClientOnly>
    </div>
  );
}
