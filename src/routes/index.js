import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/World";
import Header from "../Views/Header";
import Footer from "../Views/Footer";

function Routes(props) {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default Routes;
