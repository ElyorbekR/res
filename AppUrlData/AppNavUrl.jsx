import React from "react";
import { IconCalendarStats } from "@tabler/icons-react";

const data = [
  {
    label: "Dashboard",
    icon: IconCalendarStats,
    defaultOpened: true,
    links: [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Prouct", link: "/product" },
      { label: "Users", link: "/users" },
    ],
  },
];

const AppNavUrl = () => {
  return data;
};

export default AppNavUrl;
