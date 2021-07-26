import React from "react";
import SelectCity from "./SelectCity";

const Homepage = (props) => {
  return (
    <div>
      <div>
        <h1 className="app-title">CityMove</h1>
        <p>Compare your cities before moving</p>
      </div>
      <div>
        <p>Where are you from?</p>
        <SelectCity
          cities={props.cities}
          city={props.cityFrom}
          onCitySelected={props.setCityFrom}
        />
        <p>Where do you want to go?</p>
        <SelectCity
          cities={props.cities}
          city={props.cityTo}
          onCitySelected={props.setCityTo}
        />
      </div>
    </div>
  );
};

export default Homepage;
