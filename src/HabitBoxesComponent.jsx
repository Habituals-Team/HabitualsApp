import React, { Component } from 'react';

//need a parameter to pass down props from BoxesContainer 'props' ex) {props.habitName}
//need button on click to go to user input form passing in habit._id;

const HabitBoxesComponent = (props) => {
    return (<div>
        <p>{props.habitName}</p>
        <p>{props.habitInfo}</p>
        <button>placeholder for button to form component</button>
    </div>)
}


export default HabitBoxesComponent;