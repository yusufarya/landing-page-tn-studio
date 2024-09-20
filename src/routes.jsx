import { Home, AllFeature, Profile, SignIn, SignUp } from "@/pages";

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
    name: "Personal Profil",
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
