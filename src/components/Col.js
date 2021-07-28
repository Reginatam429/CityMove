import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Col = (props) => {
  const colTo = props.colsTo.col[0];
  const colFrom = props.colsFrom.col[0];

  const colFromList = [
    colFrom.milk_cost,
    colFrom.transport_ticket,
    colFrom.gas,
    colFrom.basic_utilities,
    colFrom.rent,
  ];

  const colCompare = (colTo, index) => {
    if (parseInt(colTo) > colFromList[index]) {
      return (
        <span>
          {colTo} <FaArrowUp color="red" />
        </span>
      );
    } else if (parseInt(colTo) < colFromList[index]) {
      return (
        <span>
          {colTo} <FaArrowDown color="green" />
        </span>
      );
    } else {
      return colTo;
    }
  };
  const salaryCompare = (colTo) => {
    if (parseInt(colTo) > colFrom.avg_monthly_salary) {
      return (
        <span>
          {colTo} <FaArrowUp color="green" />
        </span>
      );
    } else if (parseInt(colTo) < colFrom.avg_monthly_salary) {
      return (
        <span>
          {colTo} <FaArrowDown color="red" />
        </span>
      );
    } else {
      return colTo;
    }
  };
  console.log(colCompare(colTo.milk_cost, 0));
  return (
    <div>
      <header className="center">
        <h1>Cost of Living</h1>
        <p className="resultp">
          When considering a move to another city, one of the things you should
          think about is the changes to your cost of living in{" "}
          <span>{props.cityTo.city_name}.</span>
        </p>
      </header>
      <br />
      <div className="flex-container">
        <div className="leftbox cityCol">
          <h3>Costs</h3>
          <p>A gallon of milk: </p>
          <p>One-way Ticket (Local Transport):</p>
          <p>Gasoline (1 gallon):</p>
          <p>Basic Utilities for 915 sq ft Apartment:</p>
          <p>Monthly Rent for a 1 bedroom apt in City Centre:</p>
          <p>Average Monthly Net Salary (After Tax):</p>
        </div>
        <div className="flex-child center">
          <h3>{props.cityFrom.city_name}</h3>
          <p>${colFrom.milk_cost} </p>
          <p>${colFrom.transport_ticket}</p>
          <p>${colFrom.gas}</p>
          <p>${colFrom.basic_utilities}</p>
          <p>${colFrom.rent}</p>
          <p>${colFrom.avg_monthly_salary}</p>
        </div>
        <div className="flex-child center">
          <h3>{props.cityTo.city_name}</h3>
          <p>${colCompare(colTo.milk_cost, 0)}</p>
          <p>${colCompare(colTo.transport_ticket, 1)}</p>
          <p>${colCompare(colTo.gas, 2)}</p>
          <p>${colCompare(colTo.basic_utilities, 3)}</p>
          <p>${colCompare(colTo.rent, 4)}</p>
          <p>${salaryCompare(colTo.avg_monthly_salary)}</p>
        </div>
      </div>
    </div>
  );
};

export default Col;
