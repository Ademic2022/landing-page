import { FiHome, FiMessageCircle, FiSettings } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

export const navigationLinks = [
  {
    name: "Dashboard",
    icon: <FiHome />,
    url: "./",
  },
  {
    name: "Chats",
    icon: <FiMessageCircle />,
    url: "/dashboard/chats",
  },
  {
    name: "Playground",
    icon: <FaRobot />,
    url: "/dashboard/playground",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    url: "/dashboard/settings",
  },
];
