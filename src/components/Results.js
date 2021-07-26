import React from "react";
import Col from "./Col";

const Results = (props) => {
  console.log(props);
  return (
    <div>
      <header className="center">
        <h1>Let's Compare Cities:</h1>
        <p>
          So you want to move from {props.cityFrom.city_name} to{" "}
          {props.cityTo.city_name}? Here are some things to consider.
        </p>
      </header>
      <Col
        cityFrom={props.cityFrom}
        cityTo={props.cityTo}
        colsTo={props.colsTo}
        colsFrom={props.colsFrom}
      />
    </div>
  );
};

export default Results;
