import React, { useState, useEffect } from "react";
import Nav from "./nav.js";
import Home from "./home.js";
import Facts from "./facts.js";
import Fact from "./fact.js";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([0]);

  //use hook to fetch from /facts setDate sets the state for data
  useEffect(() => {
    const getData = async () => {
      // fetch returns a promise. If you are not familiar with promises, see
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
      await fetch("/facts")
        .then(data => data.json())
        .then(res => {
          console.log(res);
          setData(res);
        });
    };
    getData();
  }, []);

  
  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <Switch>
            <Route path="/facts" render={() => <Facts data={data} />} />
            <Route path="/fact/:post" render={(props) => <Fact {...props} data={data} />} />
            <Route exact path="/" component={Home} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
