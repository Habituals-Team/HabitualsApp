import React from "react";
// import App from "./App.jsx";

/*
No new node modules installed for this component.
Component renders a skeleton of form component.
Payload from this form should posted to psql database.
Upon click of "Generate Calendar" react calendar should render.
*/

const Form = () => {
  return (
    <form id="inputForm">
      <label for="habitMemo">Habit Memo:</label>
      <input
        type="text"
        id="habitMemo"
        placeholder="Habit Encouragement Memo"
      />
      <br></br>
      <label for="frequency">Frequency: </label>
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
      <label for="frequency">:Per Hour</label>
      <br></br>
      <label for="startDate"> Start Date:</label>
      <input type="date" id="startDate" />
      <label for="endDate"> End Date:</label>
      <input type="date" id="endDate" />
      <input type="submit" value="Generate Calendar" />
    </form>
  );
};

export default Form;
