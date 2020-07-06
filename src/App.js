import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Ui from "./components/layout/Ui";
import AddBtn from "./components/layout/AddBtn";
import AddChange from "./components/change/AddChange";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/layout/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import WeatherState from "./context/weather/WeatherState";

const GlobalStyle = createGlobalStyle`
body {
  background: #fff;
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
}
`;

// Initialize GraphQl
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <ApolloProvider client={client}>
      <WeatherState>
        <Router>
          <div className="App">
            <GlobalStyle />
            <Navbar />
            <Switch>
              <Route path="/" />
            </Switch>
            <Ui />
            <AddBtn />
            <AddChange />
          </div>
        </Router>
      </WeatherState>
    </ApolloProvider>
  );
};

export default App;
