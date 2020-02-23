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
// import InputForm from "./testComponent - InputForm";
// import InfoForm from "./testComponent - InfoPage";
// import Calendar from "./testComponent - Calendar";


class App extends Component {

  render() {
    return (
      <Switch>
        <div>
          <h1>APP</h1>
          {/* <Link to="/">Boxes</Link> */}
          <Route path="/*" component={BoxesContainer} />
          <div>--------------------- </div>
        </div>
      </Switch>
    );
  }
}
//might not be able to do exact or strict path because it might not reach the grandchildren components
// export default hot(module)(App);
export default App;
