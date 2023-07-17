import React from "react";

import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.description}>
        <p>{props.descr}</p>
      </div>
      <h2 className={classes.price}>{price}</h2>
    </div>
  );
};

export default MealItem;
