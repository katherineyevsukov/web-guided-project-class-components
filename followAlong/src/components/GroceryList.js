import React from "react";

import Item from "./Item";

const GroceryList = props => {

  const handleClick = ()=> {
    props.handleClear();
  }

  return (
    <div className="shopping-list">
      {props.groceries.map(item => (
        <Item handleToggleComplete={props.handleToggleComplete} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} className="clear-btn">
        Clear Purchased
      </button>
    </div>
  );
};

export default GroceryList;