import { endPoints } from "./Utils/routeEndPoints";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Help from "./Pages/Help";
import ContentArrengement from "./Components/ContentControl";

const routes = [
  {
    component: <Home />,
    path: endPoints.home,
    breadcrumb: "Home",
  },
  {
    component: <About />,
    path: endPoints.about,
    breadcrumb: "About-us",
  },
  {
    component: <ContactUs />,
    path: endPoints.contactUs,
    breadcrumb: "Contact-us",
  },
  {
    component: <Help />,
    path: endPoints.help,
    breadcrumb: "Help",
  },
];

export default routes;
