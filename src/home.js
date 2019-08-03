import React from "react";

function Home() {
  return (
    <div>
      <h1>Today I Learned</h1>
      <h2>Add a fact</h2>
      <form method="POST" action="/facts">
        <input type="text" name="text" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Home;
