import React from "react";

const Col = (props) => {
  console.log(props.cols.col[0]);
  const col = props.cols.col[0];
  return (
    <div>
      <header>
        <h1>Cost of Living:</h1>
        <p>
          When considering a move to another city, one of the things you should
          think about is the changes to your cost of living in
          {props.cityTo.city_name}.
        </p>
      </header>
      <p>A gallon of milk: ${col.milk_cost}</p>
      <p>One-way Ticket (Local Transport): ${col.transport_ticket}</p>
      <p>Gasoline (1 gallon): ${col.gas}</p>
      <p>Basic Utilities for 915 sq ft Apartment: ${col.basic_utilities}</p>
      <p>Monthly Rent for a 1 bedroom apt in City Centre: ${col.rent}</p>
      <p>Average Monthly Net Salary (After Tax): ${col.avg_monthly_salary}</p>
    </div>
  );
};

export default Col;
