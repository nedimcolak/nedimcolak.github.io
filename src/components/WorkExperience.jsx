import React from "react";
import PropTypes from "prop-types";

const WorkExperience = (props) => {
  const {
    positionTitle,
    employmentType,
    companyName,
    startDate,
    endDate,
    responsibilities,
  } = props;
  return (
    <div className="experience-item text-left flex flex-col gap-3 w-full">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-2xl">
          {positionTitle} ({employmentType})
        </h3>
        <span>
          {startDate} - {endDate}
        </span>
      </div>
      <span className="text-sky-800 text-sm leading-normal">
        {" "}
        {companyName} / US - New York
      </span>
      <ul className="text-base leading-normal flex flex-col gap-3">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

WorkExperience.propTypes = {};

export default WorkExperience;
