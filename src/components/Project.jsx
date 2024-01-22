import React from "react";
import PropTypes from "prop-types";

import ProjectItem from "../assets/projectItem.png";

const Project = (props) => {
  return (
    <div className="project-item flex flex-col items-start gap-8">
      <img src={ProjectItem} className="w-full aspect-[6/5] rounded" alt="" />
      <div className="flex flex-col gap-3 items-start text-left">
        <h3 className="text-2xl">Project name</h3>
        <p className="text-base leading-normal">
          Proxy provider website including authentication, dashboard and dynamic
          features
        </p>
        <span className="text-sky-800 text-sm leading-normal">
          React - Bootstrap - Styled Components
        </span>
      </div>
    </div>
  );
};

Project.propTypes = {};

export default Project;
