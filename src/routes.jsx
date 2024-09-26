import { Home, AllFeature, Profile, SignIn, SignUp } from "@/pages";
import ContactUs from "./pages/contact-us";

export const routes = [
  {
    name: "Beranda",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Fitur",
    path: "/all-feature",
    element: <AllFeature />,
  },
  {
    name: "Hubungi Kami",
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    name: "Personal Profil",
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
