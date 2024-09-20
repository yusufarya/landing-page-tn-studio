import { Home, AllFeature, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Features",
    path: "/all-feature",
    element: <AllFeature />,
  },
  {
    name: "Profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
