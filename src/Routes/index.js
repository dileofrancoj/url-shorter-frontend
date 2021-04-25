import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";

const Routes = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Router>
);

export default Routes;
