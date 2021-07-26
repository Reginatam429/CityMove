import React from "react";

const SelectCity = (props) => {
  const onSelectChanged = (event) => {
    for (const city of props.cities) {
      if (city.city_id == event.target.value) {
        props.onCitySelected(city);
        return;
      }
    }
  };
  return (
    <div>
      <form>
        <select
          className="select-box"
          onChange={onSelectChanged}
          value={props.city.city_id}
        >
          {props.cities &&
            props.cities.length > 0 &&
            props.cities.map((city) => {
              console.log(city);
              return (
                <option key={city.city_id} value={city.city_id}>
                  {city.city_name}, {city.city_state}
                </option>
              );
            })}
        </select>
      </form>
    </div>
  );
};

export default SelectCity;
