import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "./AuthProvider";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const { user, logOut } = useContext(Authcontext);

  const Logout = () => {
    logOut()
      .then((result) => {})
      .catch(() => {});
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          className="svg-icon"
          style={{
            width: "26px",
            height: "26px",
            verticalAlign: "middle",
            fill: "currentColor",
            overflow: "hidden",
          }}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M128 554.666667h341.333333V128H128v426.666667z m0 341.333333h341.333333V640H128v256z m426.666667 0h341.333333V469.333333H554.666667v426.666667z m0-768v256h341.333333V128H554.666667z" />
        </svg>

        <NavLink to="/dashboard" className="flex items-center cursor-pointer">
          Dashboard
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar className="mx-auto max-w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <NavLink to="/">
          <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
            Time Tracking
          </Typography>
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {user?.uid ? (
            <Button
              onClick={Logout}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign Out</span>
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/signin">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Nav;
