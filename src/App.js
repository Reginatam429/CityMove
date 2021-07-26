import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import Submit from "./components/Submit";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const apiUrl = "https://citymove-api.herokuapp.com";
  const [cities, setCities] = useState([]);

  async function fetchData() {
    const cities = await getCities();
    setCities(cities);
    setCityFrom(cities[0]);
    setCityTo(cities[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const getCities = async () => {
    return axios
      .get(`${apiUrl}/cities`)
      .then((res) => {
        return res.data[0];
      })
      .catch((e) => {
        console.log("error!", e);
      });
  };
  // Submit
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(`Cities picked: ${cityFrom.city_name} and ${cityTo.city_name}`);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Route exact path="/">
            <div className="homepage">
              <Homepage
                cities={cities}
                cityFrom={cityFrom}
                setCityFrom={setCityFrom}
                cityTo={cityTo}
                setCityTo={setCityTo}
              />
              <br />
              <Submit handleSubmit={handleSubmit} />
            </div>
          </Route>
          <Route path="/results">
            <Results cityFrom={cityFrom} cityTo={cityTo} />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
