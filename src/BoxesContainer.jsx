import React, { useState, useEffect } from 'react';
import HabitBoxesComponent from './HabitBoxesComponent.jsx';

/*
This creates the container where all the habit boxes live.
will render # of habitBoxes pending on how many habits are returned from the fetch '/habits'
*/

const BoxesContainer = () => {
    const [habitsArray, setHabits] = useState([]);

    //fetch goes here
    //habitsData will have all the habits info from db;
    useEffect(() => {
        fetch('/habits', {
            method: 'GET'
        })
            .then(res => res.json())
            .then((habitsData) => {
                //console.log(habitsData);
                const items = habitsData;
                setHabits(items);
            });
    }, [])
    // console.log(habitsArray);

    const boxes = habitsArray.map((habit) => {

        return (<HabitBoxesComponent key={habit._id} habitName={habit.name} habitInfo={habit.info} />)
    });

    return (
        <div className="boxContainer">
            {boxes}
        </div>
    );

}

export default BoxesContainer;
