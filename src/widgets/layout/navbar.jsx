import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-bold"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/" className="flex bg-white text-gray-800 rounded-md pl-3 py-1">
          <img src="/public/img/cam.png" className="h-10" />
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden gap-2 lg:flex">
          <a
            href="http://103.59.94.161:90/admin"
            target="_blank"
          >
            <Button variant="outlined" size="sm" color="white" fullWidth>
              Coba Gratis
            </Button>
          </a>
          <a
            href="http://103.59.94.161:90/"
            target="_blank"
          >
            <Button variant="filled" size="sm" color="blue" fullWidth>
              Live Demo
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse
        open={openNav}
      >
      <div className="rounded-xl bg-white px-4 pt-2 pb-4 text-blue-gray-900">
        <div className="container mx-auto">
          {navList}
          <a
            href="https://www.material-tailwind.com/blocks/react?ref=mtkr"
            target="_blank"
            className="mb-2 block"
          >
            <Button variant="text" size="sm" fullWidth>
              pro version
            </Button>
          </a>
          {React.cloneElement(action, {
            className: "w-full block",
          })}
        </div>
      </div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "TN Studio",
  action: (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-kit-react"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
