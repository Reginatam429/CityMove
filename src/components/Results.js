import React from "react";
import Col from "./Col";

const Results = (props) => {
  return (
    <div>
      <header>
        <h1>Let's Compare Cities:</h1>
        <p>
          So you want to move from {props.cityFrom.city_name} to{" "}
          {props.cityTo.city_name}? Here are some things to consider.
        </p>
      </header>
      <Col cityFrom={props.cityFrom} cityTo={props.cityTo} cols={props.cols} />
    </div>
  );
};

export default Results;
