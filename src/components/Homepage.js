import React from "react";
import SelectCity from "./SelectCity";

const Homepage = (props) => {
  return (
    <div>
      <div>
        <p className="title">CityMove</p>
        <p className="hpwords">Compare your cities before moving</p>
      </div>
      <div className="flex-container">
        <div className="flex-child">
          <p className="hpwords">Where are you from?</p>
          <SelectCity
            cities={props.cities}
            city={props.cityFrom}
            onCitySelected={props.setCityFrom}
          />
        </div>
        <div className="flex-child">
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
