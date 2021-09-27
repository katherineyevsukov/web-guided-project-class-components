import React, { useState } from "react";

const Person = ({ state, handleClick }) => {
  return (<div>
    <h1>
      Hello {state.name}. You are {state.age} years old.
    </h1>
    <button onClick={handleClick}>
      Change name
    </button>
  </div>)
}

const App = () => {
  const [state, setState] = useState({
    name: "Warren",
    age: 33,
  });

  const handleClick = () => {
    setState({
      ...state,
      name: (state.name === "Warren" ? "Allison" : "Warren"),
      age: state.age === 12 ? 33 : 12
    })
  }

  return (
    <div>
      <Person state={state} onClick={handleClick}/>
    </div>
  );
};

export default App;
