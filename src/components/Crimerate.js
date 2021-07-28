import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Crimerate = (props) => {
  const crimerateTo = props.crimeratesTo.crimerate[0];
  const crimerateFrom = props.crimeratesFrom.crimerate[0];

  const crimeCompare = (crime) => {
    if (parseInt(crime) > crimerateFrom.crime_index) {
      return (
        <span>
          {crime} <FaArrowUp color="red" />
        </span>
      );
    } else if (parseInt(crime) < crimerateFrom.crime_index) {
      return (
        <span>
          {crime} <FaArrowDown color="green" />
        </span>
      );
    } else {
      return crime;
    }
  };

  const safetyCompare = (safety) => {
    if (parseInt(safety) > crimerateFrom.safety_index) {
      return (
        <span>
          {safety} <FaArrowUp color="green" />
        </span>
      );
    } else if (parseInt(safety) < crimerateFrom.safety_index) {
      return (
        <span>
          {safety} <FaArrowDown color="red" />
        </span>
      );
    } else {
      return safety;
    }
  };
  return (
    <div>
      <header className="center">
        <h1>Crime Rate:</h1>
        <p className="resultp">
          Crime and Safety should be considered. Crime Index Numbers were taken
          from Numbeo. These numbers are an estimation of overall level of
          crime. Crime levels lower than 20 are very low, crime levels between
          20 and 40 are low, crime levels between 40 and 60 are moderate, crime
          levels between 60 and 80 are high and finally crime levels higher than
          80 are very high. Safety index is the opposite of crime index. If the
          city has a high safety index, it is considered very safe. Note: data
          is updated from 2021 Mid-Year.
        </p>
      </header>
      <br />
      <div className="flex-container">
        <div className="leftbox cityCol">
          <h3>Crime Rate</h3>
          <p>Crime Index:</p>
          <p>Safety Index:</p>
        </div>
        <div className="flex-child center">
          <h3>{props.cityFrom.city_name}</h3>
          <p>{crimerateFrom.crime_index}</p>
          <p>{crimerateFrom.safety_index}</p>
        </div>
        <div className="flex-child center">
          <h3>{props.cityTo.city_name}</h3>
          <p>{crimeCompare(crimerateTo.crime_index)}</p>
          <p>{safetyCompare(crimerateTo.safety_index)}</p>
        </div>
      </div>
    </div>
  );
};

export default Crimerate;
