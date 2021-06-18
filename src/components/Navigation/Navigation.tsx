import React from "react";
import Link from "next/link";
import { NavigationLink } from "./NavigationLink";

const Menu = [
  {
    href: "/exchanges",
    title: "Exchanges",
  },
  {
    href: "/chart",
    title: "Chart",
  },
];

export function Navigation(): React.ReactElement {
  return (
    <div className="bg-blue-600 text-white fixed w-full z-10">
      <nav className="container h-16 mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold tracking-wide">Coincap Demo</a>
        </Link>
        <ul className="flex h-full items-center">
          {Menu.map((menuItem) => (
            <li key={menuItem.title} className="h-full flex items-center">
              <NavigationLink
                href={menuItem.href}
                className="h-full flex items-center px-5 text-xl"
              >
                {menuItem.title}
              </NavigationLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
