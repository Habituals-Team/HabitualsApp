import React, { Component } from "react";
import { hot } from "react-hot-loader";
import BoxesContainer from "./BoxesContainer.jsx";
import HabitBoxesComponent from "./HabitBoxesComponent.jsx";
// this is the destructuring from react router
import { Switch, Route, Link } from "react-router-dom";


// style importing - Eliot test
import "../public/style.css";

// importing Material Design io
import Button from "@material-ui/core/Button";

// my test components
// import InputForm from "./testComponent - InputForm.jsx";
import HabitCalendar from "./CalendarComponent.jsx";

//Importing test Form component to test rendering to page - Ashley
import Form from "./FormComponent.jsx";


// this is the destructuring from react router
// import { useState, useEffect } from "react";

class App extends Component {
  /*
Declaring state in app component so that habit prop name can be passed
down to child components in order to keep track of which habit was 
chosen from the home page. 
*/
  constructor(props) {
    super(props);
    this.state = {
      habitName: []
    };
  }

  render() {
    return (
      <Switch>
        <div>
          <h1>APP</h1>
          {/* NOTE:  needed to change path to Form component so we can pass habit-id as a prop in Form */}
          <Route exact strict path="/habit/:id/input" component={Form} />
          <Route exact strict path="/cal" component={HabitCalendar} />
          {/* NOTE:  needed to change path to HB component so we can pass use specific habit id*/}
          <Route exact strict path="/habit/:id" component={HabitBoxesComponent} />
          <Route exact strict path="/" component={BoxesContainer} />
        </div>
      </Switch>
    );
  }
}
// export default hot(module)(App);
export default App;
