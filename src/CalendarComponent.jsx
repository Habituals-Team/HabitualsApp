
// /*
// **NPM INSTALL**
// REACT CALENDAR
// npm install --save react-calendar react-big-calendar
// MOMENT.js
// npm install moment --save
// ------
// Calendar is a component that will be rendered.
// Moments is a localizer javascript library that parses
// and manipulates the display dates. 
// **Calendar not rendering to screen**
// ------
// */

import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Switch, Route, Link } from "react-router-dom";
moment.locale("en-GB");
const localizer = momentLocalizer(moment);
// const myEventsList = {} //empty object for now

const HabitCalendar = () => {

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[{
          title: "My event",
          allDay: false,
          start: new Date(2018, 1, 1, 10, 0), // 10.00 AM
          end: new Date(2018, 1, 1, 14, 0) // 2.00 PM
        }]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  )

}

export default HabitCalendar;


