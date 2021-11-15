import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacto from "../pages/Contacto/Contacto";

import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Detail from "../pages/Detail/Detail";
import Home from "../pages/Home/Home";
import Landing from "../pages/Landing/Landing";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:id" component={Detail} />
          <Route exact path="/recipe" component={CreateRecipe} />
          <Route exact path="/contacto" component={Contacto} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
