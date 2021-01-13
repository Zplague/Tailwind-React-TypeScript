import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Starships } from "./pages/Home";
import { Planets } from "./pages/Planets";
import { Vehicles } from "./pages/Vehicles";
import { People } from "./pages/People";
import { Nav } from "./components/Nav";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContex";

const App = () => {
  const [theme] = React.useState(false)

  return (
    <div>
      <Router>
        <ThemeContext.Provider value={{ theme }}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Starships} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planets} />
            <Route path="/vehicles" component={Vehicles} />
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
};

export default App;
