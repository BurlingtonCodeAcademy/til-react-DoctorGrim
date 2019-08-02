import React, { useState, useEffect } from "react";
import "./App.css";
//import { BrowserRouter, Route } from "react-router-dom";

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
  
  
  return (
    <div className="App">
      <h1>Today I Learned</h1>
      <li>
        <a href="/facts">List all entries (JSON)</a>
      </li>
      <h2>Add a fact</h2>
      <form method="POST" action="/facts">
        <input type="text" name="text" />
        <input type="submit" />
      </form>


{data.map((data, index) =>
  <div key={data.name + index}>
      <h1>{data.when}</h1>
      <p>{data.text}</p>
      <hr/>
  </div>
  )}

      <p>{data[0].text}</p>
    </div>
  );
}

export default App;