import React, { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Login from "pages/Login";
import Rooms from "pages/Rooms";
import Actions from "pages/Actions";
import Expenses from "pages/Expenses";
import Profile from "pages/Profile";
import MoveDate from "pages/MoveDate";
import PropertyDetails from "pages/PropertyDetails";
import Estimation from "pages/Estimation";
import Signup from "pages/Signup";
import Room from "pages/Room";

const Page = () => {
  const [user, setUser] = useState({});
  const [property, setProperty] = useState({
    address: {},
    isFullyFurnished: undefined,
  });
  const [estimation, setEstimation] = useState({
    rent: undefined,
    electricity: undefined,
    gas: undefined,
    councilTax: undefined,
    water: undefined,
    internet: undefined,
    food: undefined,
    misc: undefined,
    total: undefined,
  });
  const [moveDate, setMoveDate] = useState();

  return (
    <Router>
      <Switch>
          <Route path="/" exact={true}>
            <Login />
          </Route>
      </Switch>
       <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
      </Switch>
      <Switch>
      <Route path="/move-date" exact={true}>
          <MoveDate onMoveDateChange={setMoveDate}/>
        </Route>
      </Switch>
       <Switch>
       <Route path="/property-details" exact={true}>
          <PropertyDetails onPropertyChange={setProperty} />
        </Route>
       </Switch>
        <Switch>
        <Route path="/estimation" exact={true}>
          <Estimation 
            property={property}
            onEstimationSubmit={setEstimation}
          />
        </Route>
        </Switch>
        <Switch>
        <Route path="/rooms" exact={true}>
          <Rooms />
        </Route>
        </Switch>
        <Switch>
        <Route path="/rooms/:id" exact={true}> 
        <Room />
      </Route>
        </Switch>
        <Switch>
        <Route path="/actions" exact={true}>
          <Actions />
        </Route>
        </Switch>
        <Switch>
        <Route path="/expenses" exact={true}>
          <Expenses />
        </Route>
        </Switch>
        <Switch>

        <Route path="/profile" exact={true}>
          <Profile />
        </Route>
        </Switch>
    </Router>
  );
};

export default Page;
