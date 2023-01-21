import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";

export const config = {
  endpoint: `${ipConfig.workspaceIp}/api/v1`,
};

function App() {
  return (
    <div className="App">
        <Switch>
        {/* <Route path="/thanks" component={Thanks} /> */}
        {/* <Route path="/checkout" component={Checkout} /> */}
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
