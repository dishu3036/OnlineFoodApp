import React from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          <p>{props.descr}</p>
        </div>
        <h2 className={classes.price}>{price}</h2>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
