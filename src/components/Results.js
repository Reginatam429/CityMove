import React from "react";
import Col from "./Col";
import Crimerate from "./Crimerate";
import Attraction from "./Attraction";

const Results = (props) => {
  console.log(props);
  return (
    <div className="resultsContent">
      <header className="center">
        <h1>Let's Compare Cities:</h1>
        <p>
          So you want to move from {props.cityFrom.city_name} to{" "}
          {props.cityTo.city_name}? Here are some things to consider.
        </p>
      </header>
      <br />
      <Col
        cityFrom={props.cityFrom}
        cityTo={props.cityTo}
        colsTo={props.colsTo}
        colsFrom={props.colsFrom}
      />
      <br />
      <Crimerate
        cityFrom={props.cityFrom}
        cityTo={props.cityTo}
        crimeratesTo={props.crimeratesTo}
        crimeratesFrom={props.crimeratesFrom}
      />
      <br />
      <Attraction cityTo={props.cityTo} attractions={props.attractions} />
    </div>
  );
};

export default Results;
