import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeScreen from "../screens/World";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MapBox from "../screens/MapBox";
import IndiaHome from "../screens/India";
import IndianStateScreen from "../screens/India/IndiaStateWiseScreen";
import CountrySpecificData from "../screens/World/CountryWiseScreen";
import WIP from "../Views/WIP";


function Routes(props) {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/country/:name" component={CountrySpecificData}/>
          <Route exact path="/mapbox" component={MapBox}/>
          <Route exact path="/india" component={IndiaHome}/>
          <Route exact path="/india/state/:name" component={IndianStateScreen}/>
          <Route exact path="/about" component={WIP}/>
          <Route exact path="/links" component={WIP}/>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default Routes;
