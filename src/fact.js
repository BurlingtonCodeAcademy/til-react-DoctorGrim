import React from "react";

//finds matching fact and displays 
const Fact = ({ match, data }) => {
  const test = data.find(function(fact) {
    return fact._id === match.params.post;
  });

  return (
    <div>
      <p>{match.params.post}</p>
      <p>{`${data}`}</p>
      <p>{`${test.text}`}</p>
      <button>update</button>
      <button>delete</button>
    </div>
  );
};

export default Fact;