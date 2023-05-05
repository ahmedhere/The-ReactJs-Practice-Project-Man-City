import React from "react";
import Layout from "./HOC/Layout";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Home from "./components/Home";
function Routes(props) {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
}

export default Routes;
