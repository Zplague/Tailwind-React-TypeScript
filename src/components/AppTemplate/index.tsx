import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEmpire, faRebel } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faEmpire);

const AppTemplate = ({ children }: any) => {
  const [theme, setTheme] = React.useState(false);

  const toggleDark = () => {
    setTheme(!theme);
  };

  return (
    <div className={`${theme ? "dark" : " "} bg-sith-4`}>
      <button
        onClick={toggleDark}
        className="
          dark:text-sith-3
          dark:bg-blueGray-800
          dark:border-sith-3
          border-jedi-2
          border-b-4
          font-semibold
          shadow-xl
          transition-shadow
          bg-jedi-7 
          text-gray-50
          absolute
          right-10
          top-14
          px-4
          py-2"
      >
        {theme
          ? [<FontAwesomeIcon icon={faEmpire} />, " ", "Sith Mode"]
          : [<FontAwesomeIcon icon={faRebel} />, " ", "Jedi Mode"]}
      </button>
      <div className="dark:bg-sith-4 h-screen">{children}</div>
    </div>
  );
};

export default AppTemplate;
