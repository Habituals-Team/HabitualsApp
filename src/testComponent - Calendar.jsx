import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

/*
**NPM INSTALL**
REACT CALENDAR
npm install --save react-calendar react-big-calendar
MOMENT.js
npm install moment --save
------
Calendar is a component that will be rendered.
Moments is a localizer javascript library that parses
and manipulates the display dates. 
**Calendar not rendering to screen**
------
*/

const localizer = momentLocalizer(moment);
console.log(localizer);

const HabitCalendar = props => {
  return (
    <div className="calendar">
      <h1>Habits Calendar</h1>
      <Calendar
        localizer={localizer}
        events={habits}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default HabitCalendar;
