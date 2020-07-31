import React, { useState, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import DetailsPage from "./components/DetailsPage";
import axios from "axios";
import "./sass/main.scss";
function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialList = useRef(null);
  const [currentInput, setcurrentInput] = useState("");
  const [error, setError] = useState(false);
  const inputList = useRef(null);
  const region = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      initialList.current = response.data;
      setCountries(initialList.current);
      setLoading(false);
    };
    fetchData();
  }, []);

  const inputHandler = (input) => {
    setcurrentInput(input);
    if (input === "") {
      setError(false);
      inputList.current = null;
      if (region.current) {
        setCountries(filterByRegion(initialList));
      } else {
        setCountries(initialList.current);
      }
    } else {
      const fetchRegion = async () => {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/name/${input}`
        );
        inputList.current = response.data;
        if (region.current) {
          setCountries(filterByRegion(inputList));
        } else {
          setCountries(inputList.current);
        }
      };
      fetchRegion().catch(() => setError(true));
    }
  };
  const filterByRegion = (list) => {
    return list.current.filter((item) => item.region.includes(region.current));
  };
  const regionSelector = (selection) => {
    if (selection === "All Regions") {
      region.current = null;
      if (inputList.current) {
        setCountries(inputList.current);
      } else {
        setCountries(initialList.current);
      }
    } else {
      region.current = selection;
      if (inputList.current) {
        setCountries(filterByRegion(inputList));
      } else {
        setCountries(filterByRegion(initialList));
      }
    }
  };
  return (
    <>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePage
              countries={countries}
              loading={loading}
              selectedRegion={
                region.current ? region.current : "Filter By Region"
              }
              regionHandler={regionSelector}
              inputValue={currentInput}
              inputChanged={inputHandler}
              error={error}
            />
          )}
        />
        <Route
          exact
          path="/details/:code"
          render={(props) => (
            <DetailsPage countries={initialList.current} {...props} />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
