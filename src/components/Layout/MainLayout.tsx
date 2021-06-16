import React from "react";

import { Navigation } from "../Navigation";

import { ChildrenProp } from "../../types";

export function MainLayout(props: ChildrenProp): React.ReactElement {
  const { children } = props;
  return (
    <div>
      <Navigation />
      <div className="container mx-auto pt-24">{children}</div>
    </div>
  );
}
