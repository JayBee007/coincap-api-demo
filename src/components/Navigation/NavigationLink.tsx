import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { ChildrenProp } from "../../types";

interface NavigationLinkProps extends LinkProps, ChildrenProp {
  className?: string;
}

export function NavigationLink(props: NavigationLinkProps): React.ReactElement {
  const { children, href, className } = props;
  const router = useRouter();

  const activeLinkClassnames = "bg-gray-700";

  let previousClassName = className || "";

  let newClassName = router.pathname.includes(href as string)
    ? `${previousClassName} ${activeLinkClassnames}`
    : previousClassName;

  return (
    <Link href={href}>
      <a className={newClassName}>{children}</a>
    </Link>
  );
}
