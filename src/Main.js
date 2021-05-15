import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import ResetPass from "./ResetPass";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPass} />
          <Route exact path="/resetpassword" component={ResetPass} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Main;
