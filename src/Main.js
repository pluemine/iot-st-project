import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import ResetPass from "./ResetPass";
import Dashboard from "./Dashboard";
import Device from "./Device";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPass} />
          <Route exact path="/resetpassword" component={ResetPass} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/device" component={Device} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;
