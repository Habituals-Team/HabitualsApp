import React, { Component } from 'react';

//need a parameter to pass down props from BoxesContainer 'params'

const HabitBoxesComponent = (params) => {
    return (<div>
        <p>Habit Name:{params.habitName} </p>
        <p>Habit Info: {params.habitInfo}</p>

    </div>)
}


export default HabitBoxesComponent;