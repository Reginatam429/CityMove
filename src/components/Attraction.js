import React from "react";
import AttractionList from "./AttractionList";

const Attraction = (props) => {
  return (
    <div className="attraction">
      <header className="center">
        <h1>{props.cityTo.city_name} Attractions</h1>
        <p>Check out these fun attractions in {props.cityTo.city_name}!</p>
      </header>
      <br />
      <AttractionList attractions={props.attractions} />
    </div>
  );
};

export default Attraction;
