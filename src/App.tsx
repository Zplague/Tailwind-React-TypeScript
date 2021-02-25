import React from "react";
import "./index.scss";
import { Starships } from "./pages/Home";
import { Planets } from "./pages/Planets";
import { Vehicles } from "./pages/Vehicles";
import { People } from "./pages/People";
import { Nav } from "./components/Nav";
import AppTemplate from "./components/AppTemplate";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeContext } from "./utils/ThemeContex";
import { Footer } from "./components/Footer";

const App = () => {
  const [theme] = React.useState(false);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <AppTemplate>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Starships} />
            <Route path="/people" component={People} />
            <Route path="/planets" component={Planets} />
            <Route path="/vehicles" component={Vehicles} />
          </Switch>
        </Router>
        <Footer />
      </AppTemplate>
    </ThemeContext.Provider>
  );
};

export default App;
