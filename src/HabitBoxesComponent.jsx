import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
//need a parameter to pass down props from BoxesContainer 'the id' path 
//need button on click to go to user input form passing in habit._id;
//need to fetch data for the habit with correlated route path id

const HabitBoxesComponent = (props) => {
    const { match: { params: { id } } } = props; // props.match.params.id

    const [habitName, setHabitName] = useState('');
    const [habitInfo, setHabitInfo] = useState('');

    //fetch goes here
    //habitsData will have all the habits info from db;

    useEffect(() => {
        fetch(`/habit-info?id=${id}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(habitsData => {
                //console.log(habitsData);
                const items = habitsData;
                // items = [{name:, info:, image:}]
                setHabitName(items[0].name);
                setHabitInfo(items[0].info);
            });
    }, []);

    return (<div className="habitBoxesInfo">
        <h1>{habitName}</h1>
        <p>{habitInfo}</p>
        <Button component={Link} to={`/habit/${id}/input`} variant="contained" src="./public/habitstext.jpg" > Start New Habit!</Button>
    </div >)
}

export default HabitBoxesComponent;