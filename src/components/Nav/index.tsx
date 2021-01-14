import React from "react";
import { NavLink } from "react-router-dom";
import './animation.styles.scss'

export const Nav = () => {
  const [theme] = React.useState(false)

  return (
    <>
      <div className={`${theme ? "dark" : ""}`}>
        <div className="soldier"></div>
        <nav className="p-5">
          <h1 className="px-3 py-1 -my-0 text-6xl text-jedi-2 dark:text-sith-1 font-bold">Welcome to StarWiki!</h1>
          <h3 className="px-3 py-2 text-3xl dark:text-trueGray-50">
            The ultimate guide for Starwars Assets & characters
          </h3>
          <hr className="border-jedi-2 dark:border-sith-1 my-2" />
          <ul className="flex justify-start px-5 my-2">
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1 dark:text-sith-1"
                className="transition-all hover:text-jedi-3 text-coolGray-500 font-semibold dark:text-blueGray-300 dark:hover:text-sith-1"
                exact
                to="/"
              >
                Starships
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1 dark:text-sith-1"
                className="transition-all hover:text-jedi-3 text-coolGray-500 font-semibold dark:text-blueGray-300 dark:hover:text-sith-1"
                to="/people"
              >
                People
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1 dark:text-sith-1"
                className="transition-all hover:text-jedi-3 text-coolGray-500 font-semibold dark:text-blueGray-300 dark:hover:text-sith-1"
                to="/planets"
              >
                Planets
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1 dark:text-sith-1"
                className="transition-all hover:text-jedi-3 text-coolGray-500 font-semibold dark:text-blueGray-300 dark:hover:text-sith-1"
                to="/vehicles"
              >
                Vehicles
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
