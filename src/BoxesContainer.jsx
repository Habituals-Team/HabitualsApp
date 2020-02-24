import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Switch, Route, Link } from "react-router-dom";
import { ButtonGroup, makeStyles, ButtonBase, Typography } from "@material-ui/core";


/*
This creates the container where all the habit boxes live.
will render # of habitBoxes pending on how many habits are returned from the fetch '/habits'
*/

const BoxesContainer = () => {
  const [habitsArray, setHabits] = useState([]);


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
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     display: 'flex',
  //     flexWrap: 'wrap'
  //   },
  //   image: {
  //     position: 'relative',
  //     height: 200
  //   },
  //   // '&:hover, &$focusVisible': {
  //   //   zIndex: 1,
  //   //   '& $imageBackdrop': {
  //   //     opacity: 0.15,
  //   //   },
  //   //   '& $imageMarked': {
  //   //     opacity: 0
  //   //   },
  //   //   '& $imageTitle': {
  //   //     border: '4px solid currentColor'
  //   //   }
  //   // },
  //   imageSrc: {
  //     position: 'absolute',
  //     left: 0,
  //     right: 0,
  //     top: 0,
  //     bottom: 0,
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center 40%',
  //   }
  // }))
  // const classes = useStyles();
  // /*
  // creating array of components with specific buttons that will route to a specific habit_id path.
  // * /

  const boxes = habitsArray.map(habit => {
    return (
      <div key={habit._id}>
        <Button
          component={Link} to={`/habit/${habit._id}`} variant="contained">{habit.name}
        </Button>
      </div >
    );
  });

  return (<div className="boxesContainer">

    {boxes}

  </div>);
};

export default BoxesContainer;
