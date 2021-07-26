import React from "react";

const Crimerate = (props) => {
  console.log(props.crimeratesTo);
  const crimerateTo = props.crimeratesTo.crimerate[0];
  const crimerateFrom = props.crimeratesFrom.crimerate[0];
  return (
    <div>
      <header className="center">
        <h1>Crime Rate:</h1>
        <p>
          When considering a move to another city, one of the things you should
          think about is the changes to your cost of living in
          {props.cityTo.city_name}.
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
          <p>{crimerateTo.crime_index}</p>
          <p>{crimerateTo.safety_index}</p>
        </div>
      </div>
    </div>
  );
};

export default Crimerate;
