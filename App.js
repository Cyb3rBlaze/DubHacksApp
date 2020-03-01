import React from "react";

import { Router, Scene } from "react-native-router-flux";

import Login from "./screens/login";
import Show from "./screens/show";

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true} initial />
          <Scene key="show" component={Show} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}