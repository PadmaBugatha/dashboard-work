import {
  HiOutlineViewGrid,
  HiOutlineUserAdd,
  HiOutlineCalendar,
  HiOutlineCreditCard,
  HiOutlineSupport,
  HiOutlineCog,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "patient",
    label: "Patient",
    path: "/patient",
    icon: <HiOutlineUserAdd />,
  },
  {
    key: "appointment",
    label: "Appointment",
    path: "/appointment",
    icon: <HiOutlineCalendar />,
  },
  {
    key: "billing",
    label: "Billing",
    path: "/billing",
    icon: <HiOutlineCreditCard />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <HiOutlineSupport />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];
