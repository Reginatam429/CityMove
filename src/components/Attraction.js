import React from "react";
import AttractionList from "./AttractionList";

const Attraction = (props) => {
  //   console.log(props.attractions);
  //   const attraction = props.attractions.attraction;

  return (
    <div className="attraction">
      <header className="center">
        <h1>{props.cityTo.city_name} Attractions:</h1>
        <p>Check out these fun attractions in {props.cityTo.city_name}!</p>
      </header>
      <br />
      {/* <div className="flex-container">
        <div>
          <img
            src={attraction[0].image_url}
            width="500"
            height="300"
            alt="attraction image"
          />
        </div>
        <div>
          <h3>{attraction[0].name}</h3>
          <p>{attraction[0].description}</p>
        </div>
      </div> */}
      <AttractionList attractions={props.attractions} />
    </div>
  );
};

export default Attraction;
