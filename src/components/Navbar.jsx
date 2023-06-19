
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center container mx-auto">
        <h1 className="text-xl font-semibold">My Next App</h1>
        <ul className="flex items-center justify-center">
          {navLinks.map(({ path, title }) => (
            <li key={path} className="mx-2">
              <NavLink exact={path === "/"} activeClassName="text-blue-500" href={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
