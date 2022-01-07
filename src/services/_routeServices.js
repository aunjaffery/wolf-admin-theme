import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";
import Messages from "../pages/messages/Messages";

const Routservices = [
  {
    id: 1,
    route: "/",
    component: <Dashboard />,
    layout: true,
  },
  {
    id: 2,
    route: "/settings",
    component: <Settings />,
    layout: true,
  },
  {
    id: 3,
    route: "/settings/messages",
    component: <Messages />,
    layout: true,
  },
];
export default Routservices;
