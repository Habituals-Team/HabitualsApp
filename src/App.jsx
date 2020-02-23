import React, { Component } from "react";
import { hot } from "react-hot-loader";

// style importing - Eliot test
import "../public/style.css";

// importing Material Design io
import Button from "@material-ui/core/Button";

// my test components
import Boxes from "./testComponent - BoxesContainer";
import InputForm from "./testComponent - Input Form";
import InfoForm from "./testComponent - InfoPage";
import Calendar from "./testComponent - Calendar";

// this is the destructuring from react router
import { Switch, Route, Link } from "react-router-dom";

// Eliot's Test Code
class App extends Component {
  // This is rendering using Router - Eliot's test code
  render() {
    return (
      <Switch>
        <div>
          <h1>APP</h1>
          {/* <Link to="/">Boxes</Link> */}
          <Button className="buttonsRouter" component={Link} to="/"></Button>
          <Route exact strict path="/" component={Boxes} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            to="/info"
          ></Button>
          <Route exact strict path="/info" component={InfoForm} />
          <div>--------------------- </div>
          <Button
            className="buttonsRouter"
            component={Link}
            to="/input"
          ></Button>
          <Route exact strict path="/input" component={InputForm} />
          <div>--------------------- </div>
          <Button className="buttonsRouter" component={Link} to="/cal"></Button>
          <Route exact strict path="/cal" component={Calendar} />
        </div>
      </Switch>
    );
  }
}

// export default hot(module)(App);
export default App;
