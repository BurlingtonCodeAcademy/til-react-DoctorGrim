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
 useEffect( () => {
   const getData = async ()=>{
    // fetch returns a promise. If you are not familiar with promises, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
     await fetch('/facts')
      .then(data => data.json())
      .then((res) => {
        console.log(res)
       setData(res);
       
      });
    }
    getData();
  },[]);


  
  console.log(data)
  
  //warning wants me to make a key for each child?
  return (
    <div className="App">
      
      <BrowserRouter>
      <React.Fragment>
        <Nav />
        <Switch>
          <Route path="/facts" component={Facts} />
          <Route path="/facts/:post" component={Fact} />
          <Route exact path="/" component={Home} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
    
{data.map((data) =>
  <div key={data._id} id={data._id}>
      <a href={`#${data._id}`}>{data._id}</a>
      <h1>{data.when}</h1>
      <p>{data.text}</p>
  </div>
  )}

      <p>{data[0].text}</p>
    </div>
  );
}

export default App;