import React, { Component } from 'react';

//need a parameter to pass down props from BoxesContainer 'props' ex) {props.habitName}
//need button on click to go to user input form passing in habit._id;
const HabitBoxesComponent = (props) => {
    return (
      <div>
        <p>Habit Name: {props.habitName} </p>
      </div>)
}


export default HabitBoxesComponent;