import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./schedule.css";
const Schedule = () => {
  return (
    <div className="scheduleContainer">
      <div>
        <h1>schedules</h1>
        <h2>default</h2>
        <div className="scheduleWrapContainer">
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
          <div className="scheduleWrap">
            <input type="checkbox" id="" name="" value="" />
            <p>
              <span className="scheduleDetail">Saturday</span>
              <span className="scheduleDetail">Unavailble</span>
            </p>
          </div>
        </div>
      </div>

      <Calendar className="calanderBox" />
    </div>
  );
};

export default Schedule;
