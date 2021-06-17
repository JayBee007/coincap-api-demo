import React, { useEffect, useState } from "react";

import { ChildrenProp } from "../../types";

interface ClientOnlyProps {
  children: React.ReactElement;
}

export function ClientOnly(props: ClientOnlyProps) {
  const { children, ...restProps } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return React.cloneElement(children, restProps);
}
