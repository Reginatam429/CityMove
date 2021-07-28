import React from "react";
import SelectCity from "./SelectCity";

const Homepage = (props) => {
  return (
    <div>
      <div>
        <h1 className="title">CityMove</h1>
        <p className="hptagline">
          Compare your cities and weigh your options before moving.
        </p>
      </div>
      <div className="flex-container">
        <div className="flex-child leftchild">
          <p className="hpwords">Where are you from?</p>
          <SelectCity
            cities={props.cities}
            city={props.cityFrom}
            onCitySelected={props.setCityFrom}
          />
        </div>
        <div className="flex-child rightchild">
          <p className="hpwords">Where do you want to go?</p>
          <SelectCity
            cities={props.cities}
            city={props.cityTo}
            onCitySelected={props.setCityTo}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
