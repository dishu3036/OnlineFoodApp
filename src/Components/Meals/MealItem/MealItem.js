import React, { useContext } from "react";

import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context.js";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const CartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          <p>{props.descr}</p>
        </div>
        <h2 className={classes.price}>{price}</h2>
      </div>
      <MealItemForm id={props.id} onAddCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
