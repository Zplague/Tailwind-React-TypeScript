import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [theme, setTheme] = React.useState(false)
  const toggleDark = () => { setTheme(!theme) }

  return (
    <>
      <div className={`${theme ? "dark" : ""}`}>
        <button
          onClick={toggleDark}
          className="
          dark:text-sith-3
          dark:bg-sith-4 
          shadow-sm
          bg-white 
          text-gray-900 
          p-5"
        >
          Sith Mode
        </button>
        <nav className="m-1">
          <h1 className="px-3 text-6xl">Welcome to Star Wiki!</h1>
          <h3 className="px-3 text-3xl">
            The ultimate guide for Starwars Assets & characters
          </h3>
          <hr className="border-jedi-2" />
          <ul className="flex justify-center my-8">
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1"
                className="transition-all"
                exact
                to="/"
              >
                Starships{" "}
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1"
                className="transition-all"
                to="/people"
              >
                People{" "}
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1"
                className="transition-all"
                to="/planets"
              >
                Planets{" "}
              </NavLink>
            </li>
            <li className="text-base p-2">
              <NavLink
                activeClassName="text-jedi-2 hover:text-jedi-1"
                className="transition-all"
                to="/vehicles"
              >
                Vehicles{" "}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
