import React from "react";
import  {Link} from "react-router-dom";


//displays all facts and has a link to an individual page for each
//only goes through code once?
//Each child in a list should have a unique "key" prop. still shows even thoght they all have keys?
const Facts = data => {
    console.log(data.data)
  return (
    <div>
      {data.data.map(data => (
        <div key={data._id} id={data._id}>
          <Link to= {`/fact/${data._id}`}> {data._id} </Link>
          <h1>{data.when}</h1>
          <p>{data.text}</p>
        </div>
      ))}

      <p>{data.data[0].text}</p>
    </div>
  );
};

export default Facts;