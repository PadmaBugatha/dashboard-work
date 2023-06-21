import React from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "./navigation";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-violet-400 hover:no-underline active:bg-neutral-700 rounded-md text-base";

export default function Sidebar() {
  return (
    <div className="bg-indigo-900 w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <span className="text-neutral-200 ml-4 text-3xl font-bold">LOGO</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5 border-b pt-2 border-gray-300">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 ">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link.path}
      className={classNames(
        pathname === link.path
          ? "bg-indigo-300 text-white font-medium"
          : "text-indigo-100",
        linkClass
      )}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
