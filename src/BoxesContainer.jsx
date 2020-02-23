import React, { useState, useEffect } from 'react';
import HabitBoxesComponent from './HabitBoxesComponent.jsx';

/*
This creates the container where all the habit boxes live.
*/

const BoxesContainer = () => {
    const [habitsArray, setHabits] = useState([]);

    //fetch goes here
    //habitsData will have all the habits info from db;
    useEffect(() => {
        fetch('/')
            .then(res => res.json())
            .then((habitsData) => {
                //console.log(habitsData);
                const items = [habitsData];
                setHabits(items);
            });
    }, [])
    //console.log(habitsArray);

    const boxes = habitsArray.map((habit, i) => {

        return (<HabitBoxesComponent key={i} habitName={habit.name} habitInfo={habit.info} />)
    });

    return (
        <div>
            {boxes}
        </div>
    );

}

export default BoxesContainer;
