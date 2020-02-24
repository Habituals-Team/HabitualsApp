import React from "react";
import Button from "@material-ui/core/Button";
// import App from "./App.jsx";
import { ButtonGroup, makeStyles, ButtonBase, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
/*
No new node modules installed for this component.
Component renders a skeleton of form component.
Payload from this form should posted to psql database.
Upon click of "Generate Calendar" react calendar should render.
*/

const Form = (props) => {
  //NOTE: added 'props' and const below to be able to pull the habit_id info from HabitBoxesComponent
  const { match: { params: { id } } } = props;

  return (
    <form id="inputForm">
      <label for="habitMemo">Habit Memo:</label>
      <input
        type="text"
        id="habitMemo"
        placeholder="Habit Encouragement Memo"
      />
      <br></br>
      <label htmlFor="frequency">Frequency: </label>
      <select id="frequency" name="frequency">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <label htmlFor="frequency">:Per Hour</label>
      <br></br>
      <label htmlFor="startDate"> Start Date:</label>
      <input type="date" id="startDate" />
      <label htmlFor="endDate"> End Date:</label>
      <input type="date" id="endDate" />
      <Button component={Link} to={`/habit/${id}/input/cal`} varient="contained">Generate Calendar</Button>
    </form>
  );
};

export default Form;
