import React, { Component, useState, useEffect } from "react";
import { hot } from "react-hot-loader";


class Form extends Component() {
    constructor(props) {
      super(props)

    render() {
      return (
        <div>
              <h1> {habit} ROUTINE BUILDER </h1>
              <form>
                <label for="routine" align="left"> ROUTINE MESSAGE: </label>
                <input type="text" id="routineInput" placeholder="ROUTINE REMINDER HERE"></input>
                FREQUENCY: <input type="range" id="frequency" value="30" placeholder="How often would you like to make a change?"></input> 
                START:<input type="text" id="startDate" placeholder="Start Date"></input>
                END:<input type="text" id="endDate" placeholder="End Date"></input>
                <button type="button" id="calenderMaker" onClick={}> GENERATE CALENDAR</button> 
            </form>
        </div>
      )
    }
  }
}
              
              
              
export default hot(module)(Form);