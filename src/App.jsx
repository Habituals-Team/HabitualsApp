import React, { Component } from "react";
import { hot } from "react-hot-loader";
import BoxesContainer from "./BoxesContainer.jsx";
// this is the destructuring from react router
import { Switch, Route, Link } from "react-router-dom";


// style importing - Eliot test
import "../public/style.css";

// importing Material Design io
import Button from "@material-ui/core/Button";

// my test components
// import InputForm from "./testComponent - InputForm.jsx";
import InfoForm from "./testComponent - InfoPage.jsx";
import HabitCalendar from "./testComponent - Calendar.jsx";

//Importing test Form component to test rendering to page - Ashley
import Form from "./testComponent - Form.jsx";


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
  // This is rendering using Router - Eliot's test code
  render() {

    /// injecting URL from google's api for Login button at initial render
        fetch("/loginUrl", {
          method: "GET"
        })
          .then(res => res.json())
          .then(loginUrl => {
            console.log(loginUrl);
          });

          
    return (
      <Switch>
        <div>
          <h1>APP</h1>
          {/* <Link to="/">Boxes</Link> */}
          <Button
            className="buttonsRouter"
            // placeholder="Button 1"
            component={Link}
            to="/"
          ></Button>
          <Route exact strict path="/" component={BoxesContainer} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            // placeholder="Button 2"
            to="/info"
          ></Button>
          <Route exact strict path="/info" component={InfoForm} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            // placeholder="Button 4"
            to="/input"
          ></Button>
          <Route exact strict path="/input" component={Form} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            // placeholder="Button 5"
            component={Link}
            to="/cal"
          ></Button>
          <Route exact strict path="/cal" component={HabitCalendar} />
        </div>
      </Switch>
    );
  }
}
//might not be able to do exact or strict path because it might not reach the grandchildren components
// export default hot(module)(App);
export default App;
