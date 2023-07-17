import React from "react";

import DUMMY_MEALS from "./DummyMeals";
import Card from "../Card/Card";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.Module.css";

const AvailableMeals = () => {
  const mealsLists = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      descr={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsLists}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
