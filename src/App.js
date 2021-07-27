import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import Submit from "./components/Submit";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const apiUrl = "https://citymove-api.herokuapp.com";
  const [cities, setCities] = useState([]);
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");
  const [colsTo, setColsTo] = useState([]);
  const [colsFrom, setColsFrom] = useState([]);
  const [crimeratesTo, setCrimeratesTo] = useState([]);
  const [crimeratesFrom, setCrimeratesFrom] = useState([]);
  const [attractions, setAttractions] = useState([]);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    getCityDropDown();
  }, []);

  async function getCityDropDown() {
    const cities = await getCities();
    setCities(cities);
  }

  // API
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
  const getCols = async (id) => {
    return axios
      .get(`${apiUrl}/cities/${id}/cols`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log("error!", e);
      });
  };

  const getCrimerates = async (id) => {
    return axios
      .get(`${apiUrl}/cities/${id}/crimerates`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log("error!", e);
      });
  };

  const getAttractions = async (id) => {
    return axios
      .get(`${apiUrl}/cities/${id}/attractions`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.log("error!", e);
      });
  };
  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const colsToData = await getCols(cityTo.city_id);
    const colsFromData = await getCols(cityFrom.city_id);
    const crimeratesToData = await getCrimerates(cityTo.city_id);
    const crimeratesFromData = await getCrimerates(cityFrom.city_id);
    const attractionsData = await getAttractions(cityTo.city_id);
    setColsTo(colsToData);
    setColsFrom(colsFromData);
    setCrimeratesTo(crimeratesToData);
    setCrimeratesFrom(crimeratesFromData);
    setAttractions(attractionsData);
    setIsRedirecting(true);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
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
                <br />
                <Submit
                  cityFrom={cityFrom}
                  setCityFrom={setCityFrom}
                  cityTo={cityTo}
                  handleSubmit={handleSubmit}
                  isRedirecting={isRedirecting}
                  setIsRedirecting={setIsRedirecting}
                />
              </div>
            </Route>
            <Route path="/results">
              <div className="results">
                <Results
                  cityFrom={cityFrom}
                  cityTo={cityTo}
                  colsTo={colsTo}
                  colsFrom={colsFrom}
                  crimeratesTo={crimeratesTo}
                  crimeratesFrom={crimeratesFrom}
                  attractions={attractions}
                />
                />
              </div>
            </Route>
            <Route path="/about">
              <div className="about">
                <About />
              </div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
