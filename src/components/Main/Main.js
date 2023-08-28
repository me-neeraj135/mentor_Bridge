import React, { useState } from "react";
import "./main.css";
import Aside from "../Aside/Aside.js";

import Service from "../Sections/ServiceSection/Service.js";
import ServiceForm from "../Sections/serviceForm/ServiceForm.js";
import Schedule from "../Sections/schedule/Schedule.js";

const Main = () => {
  let mapComponentTokey = {
    services: Service,
    serviceForm: ServiceForm,
    Schedule: Schedule,
  };
  const [currentComponent, setCurrentComponent] = useState("Schedule");

  let Component = mapComponentTokey[currentComponent];

  const changeComponent = (comp) => {
    // console.log(comp, `ccccc`);
    setCurrentComponent(comp);
  };
  return (
    <div className="main">
      <Aside changeComponent={changeComponent} />
      <div className="sectionBox">
        {" "}
        <Component changeComponent={changeComponent} />
      </div>
    </div>
  );
};

export default Main;
