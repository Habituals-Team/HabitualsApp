import React, { useState, useEffect } from "react";
import HabitBoxesComponent from "./HabitBoxesComponent.jsx";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";


/*
This creates the container where all the habit boxes live.
will render # of habitBoxes pending on how many habits are returned from the fetch '/habits'
*/

const BoxesContainer = () => {
  const [habitsArray, setHabits] = useState([]);
  const [view, setVisibility] = useState(false);

  //fetch goes here
  //habitsData will have all the habits info from db;

  useEffect(() => {
    fetch("/habits", {
      method: "GET"
    })
      .then(res => res.json())
      .then(habitsData => {
        //console.log(habitsData);
        const items = habitsData;
        setHabits(items);
      });
  }, []);
  // console.log(habitsArray);


  /*
  creating array of components with specific habit info. Onclick will display the information 
  and a button whether they want to commit to a new habit.
  */

  const boxes = habitsArray.map(habit => {
    return (
      <>
        <Button className="buttonsRouter" component={Link} to={`/${habit._id}`} onClick={() => {

        }}>{habit.name}</Button>
        <Route path={`/${habit._id}`} component={HabitBoxesComponent} />
        <HabitBoxesComponent
          id={habit._id}
          key={habit._id}
          habitName={habit.name}
          habitInfo={habit.info}
        />
      </>
    );
  });

  return (<div className="boxesContainer">{boxes}</div>);
};

export default BoxesContainer;
